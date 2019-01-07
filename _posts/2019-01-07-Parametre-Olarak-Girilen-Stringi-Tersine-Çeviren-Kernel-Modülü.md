---
layout: post
title: Parametre Olarak Girilen Stringi Tersine Çeviren Kernel Modülü
---

Merhabalar. Bu modülü oluşturmak için gerekli c dosyası ve Makefile dosyası kodları aşağıdaki gibidir.

StringReverser.c

#include <linux/module.h><br/>
#include <linux/kernel.h><br/>
#include <linux/init.h><br/>
#include <linux/moduleparam.h><br/>
MODULE_LICENSE ("GPL");<br/>
MODULE_AUTHOR ("Module5.ko");<br/>
static char *String; // Parametre olarak girilen string i tutar.<br/>
module_param (String, charp, 0000); // Parametre almak için kullanılan, değişken adı, değişken türü, verilecek izinleri parametre olarak alan fonksiyon.<br/>
MODULE_PARM_DESC (String, "This variable's value will reverse.");<br/>
static int __init StringReverserInit (void) // Modül yüklendiğinde çalışacak fonksiyon.<br/>
	{<br/>
		char Temporary;<br/>
		int i=0;<br/>
    int j=strlen (String)-1; // Parametre olarak girilen string in uzunluğunun 1 eksiğini tutar.<br/>
		printk (KERN_INFO "Module StringReverser loaded.\n");<br/>
		printk (KERN_INFO "String: %s\n", String);<br/>
    while (i<j) // Ters çevirme işlemleri gerçekleşir.<br/>
			{<br/>
		  	Temporary=String[i];<br/>
		    String[i]=String[j];<br/>
		    String[j]=Temporary;<br/>
		    i++;<br/>
		    j--;<br/>
			}
		printk (KERN_INFO "Reversed String: %s\n", String);
		return 0;
	}
static void __exit StringReverserExit (void) // Modül kaldırıldığında çalışacak fonksiyon.
	{
		printk (KERN_INFO "Module StringReverser removed.\n");
	}
module_init (StringReverserInit);
module_exit (StringReverserExit);

Makefile
obj-m += StringReverser.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
