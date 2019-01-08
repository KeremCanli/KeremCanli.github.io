---
layout: post
title: Mesafe Sensörü Kullanarak Arduino Üzerinden Mesafe Ölçen Ve Ekrana Yazdıran Kernel Modülü Ve Kullanıcı Katmanı Uygulaması
---
<ul>
	<li>Kullanıcı katmanı uygulamasını oluşturmak, modülü oluşturmak ve mesafe sensörünü kullanabilmek için gerekli c, Makefile ve ino dosyası kodları aşağıdaki gibidir.</li>
	<h3>DistanceMeasurer1.c</h3>
	<pre>#include &#60;stdio.h&#62;
#include &#60;stdlib.h&#62;
#include &#60;unistd.h&#62;
#include &#60;fcntl.h&#62;
int main ()
    {
        int i, Condition;
	char Buffer[10]; // Device dan alınan bilgiyi tutar.
	printf ("\nDistance Measurer\n\n");
	do
	    {
	        for (i=0;i<=9;i++)
		    {
		        int File=open ("/dev/DistanceMeasurer", O_RDWR); // Device ı açar.
			read (File, Buffer, 10); // Device ı okuyup Buffer a atar.
			printf ("Distance: %s\n", Buffer); // Buffer ı ekrana yazar.
			close (File); // Device ı kapatır.
		    }
		Choice: printf ("Continue -> 1\nExit -> 0\nYour Choice: ");
		scanf ("%d", &Condition);
		if (Condition==0)
		    {
		        printf ("\nGoodbye\n\n");
		    }
		else if (Condition==1)
		    {
		        printf ("\n");
		    }
		else
		    {
		        printf ("\nWrong Choice\n\n");
			goto Choice;
		    }
	    }
	while (Condition); // do while ile Device ı 10 kere açar, okur, ekrana yazar ve kullanıcıdan
aldığı komuta göre ya çıkış yapar ya da tekrar baştaki işlemleri yapar.
	return 0;
    }</pre>
	<h3>DistanceMeasurer2.c</h3>
	<pre>#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/init.h>
#include <linux/device.h>
#include <linux/fs.h>
#include <asm/uaccess.h>
#include <linux/syscalls.h>
#include <linux/string.h>
#include <linux/file.h>
#include <linux/fcntl.h>
#include <linux/delay.h>
#define FILE_DIR "/dev/ttyUSB0" // Device ın yükleneceği adres.
#define DeviceName "DistanceMeasurer"
#define ClassName "DistanceMeasurerClass"
MODULE_LICENSE ("GPL");
MODULE_DESCRIPTION ("Distance Measurer");
MODULE_AUTHOR ("Module5.ko");
static int MajorNumber; // Major numarasını tutar.
static char DeviceBuffer[10]; // Arduino dan gelen bilgiyi tutar.
static struct class *Class; // Class ile ilgili bilgileri tutar.
static struct device *Device; // Device ile ilgili bilgileri tutar.
static int Open (struct inode *Inode, struct file *File) // Device ı açan fonksiyon.
    {
        printk (KERN_INFO "Device opened.\n");
	return 0;
    }
static ssize_t Read (struct file *File, char *Buffer, size_t Length, loff_t *Offset) // Device ı
okuyan fonksiyon.
    {	
        int i;		
	struct file *FilePointer; // Arduino dan bilgi okumasını sağlayan pointer.
	mm_segment_t OldFS;
	for (i=0;i<=9;i++)
	    {
	        DeviceBuffer[i]='\0'; // DeviceBuffer dizisinin elemanlarını sıfırlar.
	    }
	FilePointer=filp_open (FILE_DIR, O_RDWR|O_APPEND, 0644); // Arduino nun bağlı
portun bilgilerini alarak bağlantı sağlayan fonksiyon.
	if (IS_ERR (FilePointer)) // Arduino ile bağlantı sağlayamaması durumunda mesaj verir.
	    {
	        printk (KERN_INFO "Connection failed.\n");
	    }
	OldFS=get_fs ();
	set_fs (get_ds ());
	kernel_read (FilePointer, DeviceBuffer, 10, &FilePointer->f_pos); // Arduino dan gelen
bilgiyi DeviceBuffer dizisine aktaran fonksiyon.
	printk (KERN_INFO "Distance: %s", DeviceBuffer); // DeviceBuffer dizisini log a yazdırır.
	set_fs (OldFS);
	filp_close (FilePointer, NULL); // Arduino ile bağlantıyı sonlandıran fonksiyon.
	copy_to_user (Buffer, DeviceBuffer, 10); // Kullanıcı katmanından bilginin okunabilmesi
için DeviceBuffer dizisini Buffer a kopyalayan fonksiyon.
	return 0;
    }
static int Release (struct inode *Inode, struct file *File) // Device ı kapatan fonksiyon.
    {
        printk (KERN_INFO "Device closed.\n");
	return 0;
    }
static struct file_operations FileOperations={.open=Open,
				    	      .read=Read,
				              .release=Release};
static int __init InitDistanceMeasurer (void) // Modül yüklendiğinde çalışan fonksiyon.
    {
        printk (KERN_INFO "Module DistanceMeasurer loaded.\n");
	MajorNumber=register_chrdev (0, DeviceName, &FileOperations); // Major numarasını
oluşturur.
	if (MajorNumber<0) // Major numarasını oluşturamadığında mesaj verir.
	    {
	        printk (KERN_ALERT "Major number did not create.\n");
	    }
	printk (KERN_INFO "Major number created. Major Number: %d\n", MajorNumber);
	Class=class_create (THIS_MODULE, ClassName); // Class ı oluşturur.
	if (IS_ERR (Class)) // Class ı oluşturamadığında aşağıdaki işlemleri gerçekleştirir.
	    {
	        unregister_chrdev (MajorNumber, DeviceName); // Major numarasını kaldırır.
		printk (KERN_ALERT "Class DistanceMeasurerClass did not create.\n");
	    }
	printk (KERN_INFO "Class DistanceMeasurerClass created.\n");
	Device=device_create (Class, NULL, MKDEV (MajorNumber, 0), NULL, DeviceName); // Device ı oluşturur.
	if (IS_ERR (Device)) // Device ı oluşturamadığında aşağıdaki işlemleri gerçekleştirir.
	    {
	        class_destroy (Class); // Class ı kaldırır.
		unregister_chrdev (MajorNumber, DeviceName); // Major numarasını kaldırır.
		printk (KERN_ALERT "Device DistanceMeasurer did not create.\n");
	    }
	printk (KERN_INFO "Device DistanceMeasurer created.\n");
	return 0;
    }
static void __exit ExitDistanceMeasurer (void) // Modül kaldırıldığında çalışan fonksiyon.
    {
        device_destroy (Class, MKDEV (MajorNumber, 0)); // Device ı kaldırır.
	printk (KERN_INFO "Device DistanceMeasurer removed.\n");
	class_unregister (Class);
	class_destroy (Class); // Class ı kaldırır.
	printk (KERN_INFO "Class DistanceMeasurerClass removed.\n");
	unregister_chrdev (MajorNumber, DeviceName); // Major numarasını kaldırır.
	printk (KERN_INFO "Major number removed.\n");
	printk (KERN_INFO "Module DistanceMeasurer removed.\n");
    }
module_init (InitDistanceMeasurer);
module_exit (ExitDistanceMeasurer);</pre>
	<h3>Makefile</h3>
	<pre>obj-m += DistanceMeasurer2.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean</pre>
	<h3>skecth_dec29a.ino</h3>
	<pre>const int trigPin=8;
const int echoPin=7;
long duration;
int distance;
void setup ()
    {
        pinMode (trigPin, OUTPUT);
        pinMode (echoPin, INPUT);
        Serial.begin (9600);
    }
void loop ()
    {
        float distance=0.0;
        for (int i=0;i<5;i++)
            {
                distance+=getDistance (trigPin, echoPin);
                delay (50);
            }
        distance/=5;
        if (distance<0.5)
            {
                Serial.println ("Undefined");
            }
        else if (distance >0.5)
            {
                Serial.print (distance);
                Serial.println (" cm");  
            }
        delay (1000);
    }
float getDistance (int trig, int echo)
    {
        pinMode (trig, OUTPUT);    
        digitalWrite (trig, LOW);    
        delayMicroseconds (2);
        digitalWrite (trig, HIGH);
        delayMicroseconds (10);
        digitalWrite (trig, LOW);
        pinMode (echo, INPUT);
        return pulseIn (echo, HIGH, 30000)/58.0;
    }</pre>
	<br/>
	<li>Bir adet Arduino Uno, bir adet mini breadboard, bir adet HC-SR04 Mesafe Sensörü ve bağlantı kabloları kullanarak aşağıdaki devreyi kuruyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/1.JPG"/>
	<br/>
	<br/>
	<li>Modülü yüklemek için c ve Makefile dosyasının bulunduğu dizinde terminali açıp yönetici izini alıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/2.JPG"/>
	<br/>
	<br/>
	<li><strong>make</strong> komutu ile modülü derliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/3.JPG"/>
	<br/>
	<br/>
	<li><strong>insmod DistanceMeasurer2.ko</strong> komutu ile modülü yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/4.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/5.JPG"/>
	<br/>
	<br/>
	<li>Modül başarı ile yüklenmişse aşağıdaki mesajları log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/6.JPG"/>
	<br/>
	<br/>
	<li><strong>chmod a+rw /dev/DistanceMeasurer</strong> ve <strong>chmod a+rw /dev/ttyUSB0</strong> komutları ile gerekli izinleri veriyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/7.JPG"/>
	<br/>
	<br/>
	<li><strong>gcc -o DistanceMeasurer1 DistanceMeasurer1.c</strong> komutu ile kullanıcı katmanı uygulamasını derliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/8.JPG"/>
	<br/>
	<br/>
	<li><strong>./DistanceMeasurer1</strong> komutu ile kullanıcı katmanı uygulamasını çalıştırıyoruz. Bu uygulama device ı okuyarak Arduino dan gelen bilgileri konsola yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/9.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/10.JPG"/>
	<br/>
	<br/>
	<li>Kullanıcı katmanı uygulaması okuma yapabilmek için Read fonksiyonunu çalıştırır. Bu fonksiyon çalışınca bilgileri hem kullanıcı katmanına kopyalar hem de log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/11.JPG"/>
	<br/>
	<br/>
	<li><strong>cat /dev/DistanceMeasurer</strong> komutu ile kullanıcı katmanı uygulaması olmadan da device ı okuyabiliriz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/12.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/13.JPG"/>
	<br/>
	<br/>
	<li>En son mesafe 26.31 cm idi. <strong>cat</strong> komutu ile okuma yaptıktan sonraki mesafe 21.36 cm olarak gözüküyor.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/14.JPG"/>
	<br/>
	<br/>
	<li><strong>rmmod DistanceMeasurer2</strong> komutu ile modülü kaldırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/15.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/16.JPG"/>
	<br/>
	<br/>
	<li>Modül başarı ile kaldırılmışsa aşağıdaki mesajları log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/DistanceMeasurer/17.JPG"/>
	<br/>
	<br/>
</ul>
