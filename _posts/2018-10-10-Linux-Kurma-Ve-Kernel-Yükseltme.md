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
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/9.JPG"/>
	<br/>
	<br/>
	<li>Kurulum tamamlandı. Sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/10.JPG"/>
	<br/>
	<br/>
	<li>Ubuntu problemsiz bir şekilde başladı.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/11.JPG"/>
	<br/>
	<br/>
	<li>Eğer kurulum sırasında güncelleştirmeleri yapmayı sonraya bıraktıysanız güncellemeleri yapmak için Yazılım Güncelleştirici’ yi kullanalım.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/12.JPG"/>
	<br/>
	<br/>
	<li>Güncelleştirmeleri başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/13.JPG"/>
	<br/>
	<br/>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/14.JPG"/>
	<br/>
	<br/>
	<li>Güncelleştirmeler bitti ve sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/15.JPG"/>
	<br/>
	<br/>
	<li>Terminali açıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/16.JPG"/>
	<br/>
	<br/>
	<li>Kernel sürümünü öğrenmek için uname –r komutunu giriyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/17.JPG"/>
	<br/>
	<br/>
	<li>Ubuntu 18.04.1 ile default olarak gelen kernel sürümü 4.15.0-34-generic.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/18.JPG"/>
	<br/>
	<br/>
	<li>www.kernel.org sitesine girdiğimizde en güncel kernel sürümü gösterecektir. Ben yükseltme yaparken en güncel sürüm 4.18.11 idi.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/19.JPG"/>
	<br/>
	<br/>
	<li>Bu sürümü indiriyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/20.JPG"/>
	<br/>
	<br/>
	<li>İndirilenler altında bulunan bu dosyayı /usr/src dizinine kopyalamak için cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu kullanıyoruz. Ancak "Erişim engellendi" hatası alacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/21.JPG"/>
	<br/>
	<br/>
	<li>Bu hatayı almamak için sudo –s komutu ile root moduna geçiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/22.JPG"/>
	<br/>
	<br/>
	<li>cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu tekrar giriyoruz ve sorunsuz bir şekilde çalışıyor.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/23.JPG"/>
	<br/>
	<br/>
	<li>cd /usr/src komutu ile /usr/src dizinine geçiyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/24.JPG"/>
	<br/>
	<br/>
	<li>tar –xJvf linux-4.18.11.tar.xz komutu ile tar.xz uzantılı dosyayı klasöre çıkartıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/25.JPG"/>
	<br/>
	<br/>
	<li>cd linux-4.18.11 komutu ile çıkarttığımız klasöre geçiş yapıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/26.JPG"/>
	<br/>
	<br/>
	<li>Bu dizindeki eski ayarları temizlemek için make proper komutunu kullanıyoruz. Fakat "make not found" hatası alacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/27.JPG"/>
	<br/>
	<br/>
	<li>apt install make komutu ile make paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/28.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make proper komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/29.JPG"/>
	<br/>
	<br/>
	<li>"gcc not found" hatası alacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/30.JPG"/>
	<br/>
	<br/>
	<li>apt install gcc komutu ile gcc paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/31.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make proper komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/32.JPG"/>
	<br/>
	<br/>
	<li>"bison not found" hatası alacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/33.JPG"/>
	<br/>
	<br/>
	<li>apt install bison komutu ile bison paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/34.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make proper komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/35.JPG"/>
	<br/>
	<br/>
	<li>"flex not found" hatası alacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/36.JPG"/>
	<br/>
	<br/>
	<li>apt install flex komutu ile flex paketini yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/37.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make proper komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/38.JPG"/>
	<br/>
	<br/>
	<li>".config not found" hatası alacağız. Bu hatayı gidermek için make menuconfig komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/39.JPG"/>
	<br/>
	<br/>
	<li>ncurses yüklememiz gerektiğini söyleyecek.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/40.JPG"/>
	<br/>
	<br/>
	<li>apt-get install libncurses5-dev komutu ile bu paketi yüklüyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/41.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make menuconfig komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/42.JPG"/>
	<br/>
	<br/>
	<li>Kernel da düzenlemeler yapmak için hazırlanmış bir arayüz karşımıza gelecek.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/43.JPG"/>
	<br/>
	<br/>
	<li>Herhangi bir ayarı değiştirmeden Exit ı seçiyoruz.</li>
 	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/44.JPG"/>
	<br/>
	<br/>
	<li>Gelen ekranı onaylıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/45.JPG"/>
	<br/>
	<br/>
	<li>Konfigürasyonun tamamlandığını söyleyecek.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/46.JPG"/>
	<br/>
	<br/>
	<li>make clean komutu ile yapılandırma dosyasındaki fazlalıkları temizliyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/47.JPG"/>
	<br/>
	<br/>
	<li>Kernel imajını derlemek için make bzImage komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/48.JPG"/>
	<br/>
	<br/>
	<li>Bir hata ile karşılaşacağız.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/49.JPG"/>
	<br/>
	<br/>
	<li>Bu hatayı gidermek için apt-get install libssl-dev komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/50.JPG"/>
	<br/>
	<br/>
	<li>Tekrar make bzImage komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/51.JPG"/>
	<br/>
	<br/>
	<li>Modülleri derlemek için make modules komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/52.JPG"/>
	<br/>
	<br/>
	<li>Derlenen modülleri /lib/modules içine taşımak için make modules_install komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/53.JPG"/>
	<br/>
	<br/>
	<li>Son olarak make install komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/54.JPG"/>
	<br/>
	<br/>
	<li>Kernel sürümünü kontrol etmek için uname –r komutunu giriyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/55.JPG"/>
	<br/>
	<br/>
	<li>Eski sürümü gösterecek. Bu yüzden sistemi yeniden başlatıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/56.JPG"/>
	<br/>
	<br/>
	<li>Yeniden başlatma sırasında böyle bir hata ile karşılaşırsanız hatanın sebebi sanal makineye verilen RAM boyutundan kaynaklanıyor. Boyutu arttırırsanız sorun çözülecektir.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/57.JPG"/>
	<br/>
	<br/>
	<li>Tekrar uname –r komutunu kullanıyoruz.</li>
	<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/58.JPG"/>
	<br/>
	<br/>
</ul>
