---
layout: post
title: Parametre Olarak Girilen Stringi Tersine Çeviren Kernel Modülü
---

Merhabalar. Bu modülü oluşturmak için gerekli c dosyası ve Makefile dosyası kodları aşağıdaki gibidir.

StringReverser.c
<pre>
<code>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/moduleparam.h>
MODULE_LICENSE ("GPL");
MODULE_AUTHOR ("Module5.ko");
static char *String; // Parametre olarak girilen string i tutar.
module_param (String, charp, 0000); // Parametre almak için kullanılan, değişken adı, değişken türü, verilecek izinleri parametre olarak alan fonksiyon.
MODULE_PARM_DESC (String, "This variable's value will reverse.");
static int __init StringReverserInit (void) // Modül yüklendiğinde çalışacak fonksiyon.
    {
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
</code>
</pre>
Makefile
obj-m += StringReverser.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
