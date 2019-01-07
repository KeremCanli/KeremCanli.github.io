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
		char Temporary;
		int i=0;
    int j=strlen (String)-1; // Parametre olarak girilen string in uzunluğunun 1 eksiğini tutar.
		printk (KERN_INFO "Module StringReverser loaded.\n");
		printk (KERN_INFO "String: %s\n", String);
    while (i<j) // Ters çevirme işlemleri gerçekleşir.
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
