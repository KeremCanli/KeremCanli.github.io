---
layout: post
title: Linux Kurma Ve Kernel Yükseltme
---

<p>Merhabalar. Bu postta sizlere sanal makine üzerinde Ubuntu kurmayı ve kernel yükseltmeyi anlatacağım.</p>
<ul>
	<li>En güncel Ubuntu sürümü olan 18.04.1 kurulumunu sanal makine üzerinde başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/1.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/2.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Herhangi bir problem olabilir diye güncellemeleri sonra yapmayı tercih edebilirsiniz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/3.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/4.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/5.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/6.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/7.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/8.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Kurulum tamamlandı. Sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/9.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Ubuntu problemsiz bir şekilde başladı.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/10.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Eğer kurulum sırasında güncelleştirmeleri yapmayı sonraya bıraktıysanız güncellemeleri yapmak için Yazılım Güncelleştirici’ yi kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/11.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Güncelleştirmeleri başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/12.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/13.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Güncelleştirmeler bitti ve sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/14.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Terminali açıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/15.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>uname –r</strong> komutunu ile kernel sürümünü öğreniyoruz. Ubuntu 18.04.1 ile default olarak gelen kernel sürümü 4.15.0-34-generic.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/16.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>www.kernel.org sitesine girdiğimizde en güncel kernel sürümü gösterecektir. Ben yükseltme yaparken en güncel sürüm 4.18.11 idi.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/17.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Bu sürümü indiriyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/18.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src</strong> komutunu ile indirilenler altında bulunan bu klasörü /usr/src dizinine kopyalıyoruz. Ancak "Erişim engellendi" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/19.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>sudo –s</strong> komutu ile bu hatayı almamak için root moduna geçiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/20.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src</strong> komutunu çalıştırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/21.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>cd /usr/src</strong> komutu ile /usr/src dizinine gidiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/22.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>tar –xJvf linux-4.18.11.tar.xz</strong> komutu ile tar.xz uzantılı klasörü çıkartıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/23.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/24.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>cd linux-4.18.11</strong> komutu ile çıkarttığımız klasöre gidiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/25.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make proper</strong> komutunu ile bu klasördeki eski ayarları temizliyoruz. Fakat "make not found" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/26.JPG"/>	
	<br/>
	<br/>
	<br/>
	<li><strong>apt install make</strong> komutu ile make paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/27.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make proper</strong> komutunu çalıştırıyoruz. "gcc not found" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/28.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>apt install gcc</strong> komutu ile gcc paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/29.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/30.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make proper</strong> komutunu çalıştırıyoruz. "bison not found" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/31.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>apt install bison</strong> komutu ile bison paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/32.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make proper</strong> komutunu çalıştırıyoruz. "flex not found" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/33.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>apt install flex</strong> komutu ile flex paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/34.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make proper</strong> komutunu çalıştırıyoruz. ".config not found" hatası aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/35.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make menuconfig</strong> komutunu bu hatayı gidermek için çalıştırıyoruz. ncurses yüklememiz gerektiğini söyledi.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/36.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>apt-get install libncurses5-dev</strong> komutu ile bu paketi yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/37.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make menuconfig</strong> komutunu çalıştırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/38.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Kernel da düzenlemeler yapmak için hazırlanmış bir arayüz karşımıza geldi.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/39.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Herhangi bir ayarı değiştirmeden Exit ı seçiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/40.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Gelen ekranı onaylıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/41.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/42.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make clean</strong> komutu ile yapılandırma dosyasındaki fazlalıkları temizliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/43.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make bzImage</strong> komutunu ile kernel imajını derliyoruz. Bir hata aldık.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/44.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/45.JPG"/>
	<br/>
	<br/>
	<br/>
 	<li><strong>apt-get install libssl-dev</strong> komutunu bu hatayı gidermek için çalıştırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/46.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make bzImage</strong> komutunu çalıştırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/47.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/48.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make modules</strong> komutunu ile modülleri derliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/49.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/50.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make modules_install</strong> komutunu ile derlenen modülleri /lib/modules dizinine taşıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/51.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/52.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>make install</strong> komutunu çalıştırıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/53.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>uname –r</strong> komutunu ile kernel sürümünü kontrol ediyoruz. Eski sürümü gösterdi. Bu yüzden sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/54.JPG"/>
	<br/>
	<br/>
	<br/>
	<li>Yeniden başlatma sırasında böyle bir hata ile karşılaşırsanız hatanın sebebi sanal makineye verilen RAM boyutundan kaynaklanıyor. Boyutu arttırırsanız sorun çözülecektir.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/55.JPG"/>
	<br/>
	<br/>
	<br/>
	<li><strong>uname –r</strong> komutunu çalıştırıyoruz. Kernel başarıyla yükseltilmiş.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/56.JPG"/>
	<br/>
	<br/>
	<br/>
</ul>
