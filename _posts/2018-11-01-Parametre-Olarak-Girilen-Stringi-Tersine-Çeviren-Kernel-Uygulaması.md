---
layout: post
title: Parametre Olarak Girilen Stringi Tersine Çeviren Kernel Uygulaması
---
<ul>
	<li>Modülü oluşturmak için gerekli c ve Makefile dosyası kodları aşağıdaki gibidir.</li>
	<h3>StringReverser.c</h3>
	<pre>#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/moduleparam.h>
MODULE_LICENSE ("GPL");
MODULE_AUTHOR ("Module5.ko");
static char *String; // Parametre olarak girilen string i tutar.
module_param (String, charp, 0000); // Parametre almak için kullanılan, değişken adı, değişken
türü, verilecek izinleri parametre olarak alan fonksiyon.
MODULE_PARM_DESC (String, "This variable's value will reverse.");
static int __init StringReverserInit (void) // Modül yüklendiğinde çalışan fonksiyon.
    {
        char Temporary;
        int i=0;
        int j=strlen (String)-1; // Parametre olarak girilen string in uzunluğunun 1 eksiğini tutar.
        printk (KERN_INFO "Module StringReverser loaded.\n");
        printk (KERN_INFO "String: %s\n", String);
        while (i<j) // Ters çevirme işlemlerini gerçekleştirir.
            {
                Temporary=String[i];
	        String[i]=String[j];
	        String[j]=Temporary;
	        i++;
	        j--;
            }
        printk (KERN_INFO "Reversed String: %s\n", String);
        return 0;
    }
static void __exit StringReverserExit (void) // Modül kaldırıldığında çalışan fonksiyon.
    {
        printk (KERN_INFO "Module StringReverser removed.\n");
    }
module_init (StringReverserInit);
module_exit (StringReverserExit);</pre>
	<h3>Makefile</h3>
	<pre>obj-m += StringReverser.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean</pre>
	<br/>
	<li>Modülü yüklemek için c ve Makefile dosyasının bulunduğu dizinde terminali açıp yönetici izini alıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/1.JPG"/>
	<br/>
	<br/>
	<li><strong>make</strong> komutu ile modülü derliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/2.JPG"/>
	<br/>
	<br/>
	<li><strong>insmod StringReverser.ko String='Ters Çevrilecek String'</strong> komutu ile modülü yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/3.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/4.JPG"/>
	<br/>
	<br/>
	<li>Modül başarı ile yüklenmişse girilen string i çevirip aşağıdaki mesajları log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/5.JPG"/>
	<br/>
	<br/>
	<li><strong>rmmod StringReverser</strong> komutu ile modülü kaldırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/6.JPG"/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/7.JPG"/>
	<br/>
	<br/>
	<li>Modül başarı ile kaldırılmışsa aşağıdaki mesajı log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/StringReverser/8.JPG"/>
	<br/>
	<br/>
</ul>
