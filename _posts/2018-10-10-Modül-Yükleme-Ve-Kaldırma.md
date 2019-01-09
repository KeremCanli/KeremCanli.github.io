---
layout: post
title: Modül Yükleme Ve Kaldırma
---
<ul>
	<li>Modülü oluşturmak için gerekli c ve Makefile dosyası kodları aşağıdaki gibidir.</li>
	<h3>Hello.c</h3>
	<pre>#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>
MODULE_LICENSE ("GPL");
static int __init InitHello (void)
	{
		printk (KERN_INFO "Module Hello loaded.\n");
		printk (KERN_INFO "Hello\n");
		return 0;
	}
static void __exit ExitHello (void)
	{
		printk (KERN_INFO "Module Hello removed.\n");
	}
module_init (InitHello);
module_exit (ExitHello);</pre>
	<h3>Makefile</h3>
	<pre>obj-m += Hello.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean</pre>
	<br/>
	<li>c ve Makefile dosyalarını oluşturacağımız dizinde terminali açıyoruz ve <strong>pico</strong> komutu ile editörü açıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/1.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>c dosyası kodlarını yazıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/2.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Dosyayı kaydetmek için <strong>Ctrl + X</strong> e basıyoruz ve ardından <strong>E</strong> ye basıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/3.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Dosya adını uzantısıyla birlikte yazıp <strong>Enter</strong> a basıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/4.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>pico</strong> komutu ile editörü açıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/5.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Makefile dosyası kodlarını yazıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/6.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Dosyayı kaydetmek için <strong>Ctrl + X</strong> e basıyoruz ve ardından <strong>E</strong> ye basıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/7.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Makefile yazıp <strong>Enter</strong> a basıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/8.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Oluşturduğumuz dosyalar aşağıdaki gibidir.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/9.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>sudo -s</strong> komutu ile yönetici izini alıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/10.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make</strong> komutu ile modülü derliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/11.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>insmod Hello.ko</strong> komutu ile modülü yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/12.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/13.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Modül başarı ile yüklenmişse aşağıdaki mesajları log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/14.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>rmmod Hello</strong> komutu ile modülü kaldırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/15.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>dmesg</strong> komutu ile log a bakıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/16.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Modül başarı ile kaldırılmışsa aşağıdaki mesajı log a yazar.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/ModuleLoadAndRemove/17.JPG"/>
	<br/>
	<br/>
	<br/>
</ul>
