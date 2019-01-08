---
layout: post
title: Character Device Uygulaması
---
<ul>
	<li>Modülü oluşturmak için gerekli c ve Makefile dosyası kodları aşağıdaki gibidir.</li>
	<h3>CharacterDevice.c</h3>
	<pre>#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/init.h>
#include <linux/device.h>
#include <linux/fs.h>
#include <linux/uaccess.h>
#define DeviceName "CharacterDevice"
#define ClassName "CharacterDeviceClass"
#define MaximumSize 2048
MODULE_LICENSE ("GPL");
MODULE_AUTHOR ("Kerem Canlı");
static int MajorNumber; // Major numarasını tutar.
static unsigned long Size=0;
static char DeviceBuffer[MaximumSize];
static struct class *Class; // Class ile ilgili bilgileri tutar.
static struct device *Device; // Device ile ilgili bilgileri tutar.
static int Open (struct inode *Inode, struct file *File) // Device ı açan fonksiyon.
    {
        printk (KERN_INFO "Device opened.\n");
	return 0;
    }
static ssize_t Write (struct file *File, const char *Buffer, size_t Length, loff_t *Offset) // Device a
yazan fonksiyon.
    {
        if (Length>MaximumSize)
	    {
  	        Size=MaximumSize;
 	    }
 	else
	    {
  	        Size=Length;
 	    }
 	copy_from_user (DeviceBuffer, Buffer, Size); // Veriyi Buffer dan DeviceBuffer a
kopyalar.
	printk (KERN_INFO "%s", DeviceBuffer);
	printk (KERN_INFO "Write function wrote %lu bytes.\n", Size);
	return Size;
    }
static ssize_t Read (struct file *File, char *Buffer, size_t Length, loff_t *Offset) // Device ı
okuyan fonksiyon.
    {
        static int Finished=0;
	if (Finished)
	    {
	        printk (KERN_INFO "Read function finished reading.\n");
		Finished=0;
		return 0; // Dosyanın sonuna daha fazla bilgi yazmayacağını belirtmek için
return 0 yazılır.
	    }
	Finished=1;
	copy_to_user (Buffer, DeviceBuffer, Size); // Veriyi DeviceBuffer dan Buffer a
kopyalar.
	printk (KERN_INFO "%s", Buffer);
	printk (KERN_INFO "Read function read %lu bytes.\n", Size);
 	return Size;
    }
static int Release (struct inode *Inode, struct file *File) // Device ı kapatan fonksiyon.
    {
        printk (KERN_INFO "Device closed.\n");
	return 0;
    }
static struct file_operations FileOperations={.open=Open,
				    	      .read=Read,
					      .write=Write,
				              .release=Release};
static int __init InitCharacterDevice (void) // Modül yüklendiğinde çalışan fonksiyon.
    {
        printk (KERN_INFO "Module CharacterDevice loaded.\n");
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
      		printk (KERN_ALERT "Class CharacterDeviceClass did not create.\n");
   	    }
   	printk (KERN_INFO "Class CharacterDeviceClass created.\n");
   	Device=device_create (Class, NULL, MKDEV (MajorNumber, 0), NULL, DeviceName); // Device ı
oluşturur.
   	if (IS_ERR (Device)) // Device ı oluşturamadığında aşağıdaki işlemleri gerçekleştirir.
	    {
      	        class_destroy (Class); // Class ı kaldırır.
      		unregister_chrdev (MajorNumber, DeviceName); // Major numarasını kaldırır.
      		printk (KERN_ALERT "Device CharacterDevice did not create.\n");
   	    }
   	printk (KERN_INFO "Device CharacterDevice created.\n");
   	return 0;
    }
static void __exit ExitCharacterDevice (void) // Modül kaldırıldığında çalışan fonksiyon.
    {
        device_destroy (Class, MKDEV (MajorNumber, 0)); // Device ı kaldırır.
	printk (KERN_INFO "Device CharacterDevice removed.\n");
   	class_unregister (Class);
   	class_destroy (Class); // Class ı kaldırır.
	printk (KERN_INFO "Class CharacterDeviceClass removed.\n");
   	unregister_chrdev (MajorNumber, DeviceName); // Major numarasını kaldırır.
	printk (KERN_INFO "Major number removed.\n");
 	printk (KERN_INFO "Module CharacterDevice removed.\n");	
    }
module_init (InitCharacterDevice);
module_exit (ExitCharacterDevice);</pre>
	<h3>Makefile</h3>
	<pre>obj-m += CharacterDevice.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean</pre>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/1.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/2.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/3.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/4.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/5.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/6.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/7.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/8.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/9.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/10.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/11.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/12.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/13.JPG"/>
	<br/>
	<br/>
	<li></li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/CharacterDevice/14.JPG"/>
	<br/>
	<br/>
</ul>
