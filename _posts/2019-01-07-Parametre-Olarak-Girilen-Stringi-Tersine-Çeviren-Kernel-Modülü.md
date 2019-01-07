---
layout: post
title: Parametre Olarak Girilen Stringi Tersine Çeviren Kernel Modülü
---

Merhabalar. Bu modülü oluşturmak için gerekli c dosyası ve Makefile dosyası kodları aşağıdaki gibidir.

StringReverser.c
<pre>
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
&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;char Temporary;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;int i=0;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;int j=strlen (String)-1; // Parametre olarak girilen string in uzunluğunun 1 eksiğini tutar.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;printk (KERN_INFO "Module StringReverser loaded.\n");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;printk (KERN_INFO "String: %s\n", String);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;while (i<j) // Ters çevirme işlemleri gerçekleşir.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temporary=String[i];<br/>
		    String[i]=String[j];<br/>
		    String[j]=Temporary;<br/>
		    i++;<br/>
		    j--;<br/>
			}<br/>
		printk (KERN_INFO "Reversed String: %s\n", String);<br/>
		return 0;<br/>
	}<br/>
static void __exit StringReverserExit (void) // Modül kaldırıldığında çalışacak fonksiyon.<br/>
	{<br/>
		printk (KERN_INFO "Module StringReverser removed.\n");<br/>
	}<br/>
module_init (StringReverserInit);<br/>
module_exit (StringReverserExit);<br/>
</pre>
Makefile
obj-m += StringReverser.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
