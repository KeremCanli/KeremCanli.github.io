---
layout: post
title: Linux Kurma Ve Kernel Yükseltme
---

Merhabalar. Bu postta sizlere sanal makine üzerinde Ubuntu kurmayı ve kernel yükseltmeyi anlatacağım.



En güncel Ubuntu sürümü olan 18.04.1 kurulumunu sanal makine üzerinde başlatıyoruz.
<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/1.JPG"/>

<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/2.JPG"/>




Herhangi bir problem olabilir diye güncellemeleri sonra yapmayı tercih edebilirsiniz.
<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/3.JPG"/>

<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/4.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/5.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/6.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/7.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/8.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/9.JPG"/>

Kurulum tamamlandı. Sistemi yeniden başlatıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/10.JPG"/>

Ubuntu problemsiz bir şekilde başladı.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/11.JPG"/>

Eğer kurulum sırasında güncelleştirmeleri yapmayı sonraya bıraktıysanız güncellemeleri yapmak için Yazılım Güncelleştirici’ yi kullanalım.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/12.JPG"/>

Güncelleştirmeleri başlatıyoruz.

<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/13.JPG"/>


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/14.JPG"/>

Güncelleştirmeler bitti ve sistemi yeniden başlatıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/15.JPG"/>

Terminali açıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/16.JPG"/>

Kernel sürümünü öğrenmek için uname –r komutunu giriyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/17.JPG"/>

Ubuntu 18.04.1 ile default olarak gelen kernel sürümü 4.15.0-34-generic.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/18.JPG"/>

www.kernel.org sitesine girdiğimizde en güncel kernel sürümü gösterecektir. Ben yükseltme yaparken en güncel sürüm 4.18.11 idi.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/19.JPG"/>

Bu sürümü indiriyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/20.JPG"/>

İndirilenler altında bulunan bu dosyayı /usr/src dizinine kopyalamak için cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu kullanıyoruz. Ancak "Erişim engellendi" hatası alacağız.

<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/21.JPG"/>

Bu hatayı almamak için sudo –s komutu ile root moduna geçiyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/22.JPG"/>

cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu tekrar giriyoruz ve sorunsuz bir şekilde çalışıyor.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/23.JPG"/>

cd /usr/src komutu ile /usr/src dizinine geçiyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/24.JPG"/>

tar –xJvf linux-4.18.11.tar.xz komutu ile tar.xz uzantılı dosyayı klasöre çıkartıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/25.JPG"/>

cd linux-4.18.11 komutu ile çıkarttığımız klasöre geçiş yapıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/26.JPG"/>

Bu dizindeki eski ayarları temizlemek için make proper komutunu kullanıyoruz. Fakat "make not found" hatası alacağız.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/27.JPG"/>

apt install make komutu ile make paketini yüklüyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/28.JPG"/>

Tekrar make proper komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/29.JPG"/>

"gcc not found" hatası alacağız.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/30.JPG"/>

apt install gcc komutu ile gcc paketini yüklüyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/31.JPG"/>

Tekrar make proper komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/32.JPG"/>

"bison not found" hatası alacağız.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/33.JPG"/>

apt install bison komutu ile bison paketini yüklüyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/34.JPG"/>

Tekrar make proper komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/35.JPG"/>

"flex not found" hatası alacağız.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/36.JPG"/>

apt install flex komutu ile flex paketini yüklüyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/37.JPG"/>

Tekrar make proper komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/38.JPG"/>

".config not found" hatası alacağız. Bu hatayı gidermek için make menuconfig komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/39.JPG"/>

ncurses yüklememiz gerektiğini söyleyecek.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/40.JPG"/>

apt-get install libncurses5-dev komutu ile bu paketi yüklüyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/41.JPG"/>

Tekrar make menuconfig komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/42.JPG"/>

Kernel da düzenlemeler yapmak için hazırlanmış bir arayüz karşımıza gelecek.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/43.JPG"/>

Herhangi bir ayarı değiştirmeden Exit ı seçiyoruz.
 
 
<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/44.JPG"/>

Gelen ekranı onaylıyoruz.

<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/45.JPG"/>

Konfigürasyonun tamamlandığını söyleyecek.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/46.JPG"/>

make clean komutu ile yapılandırma dosyasındaki fazlalıkları temizliyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/47.JPG"/>

Kernel imajını derlemek için make bzImage komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/48.JPG"/>

Bir hata ile karşılaşacağız.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/49.JPG"/>

Bu hatayı gidermek için apt-get install libssl-dev komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/50.JPG"/>

Tekrar make bzImage komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/51.JPG"/>

Modülleri derlemek için make modules komutunu kullanıyoruz.
 
 
<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/52.JPG"/>

Derlenen modülleri /lib/modules içine taşımak için make modules_install komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/53.JPG"/>

Son olarak make install komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/54.JPG"/>

Kernel sürümünü kontrol etmek için uname –r komutunu giriyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/55.JPG"/>

Eski sürümü gösterecek. Bu yüzden sistemi yeniden başlatıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/56.JPG"/>

Yeniden başlatma sırasında böyle bir hata ile karşılaşırsanız hatanın sebebi sanal makineye verilen RAM boyutundan kaynaklanıyor. Boyutu arttırırsanız sorun çözülecektir.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/57.JPG"/>

Tekrar uname –r komutunu kullanıyoruz.


<img src="https://raw.githubusercontent.com/KeremCanli/KeremCanli.github.io/master/images/LinuxSetupAndKernelUpgrade/58.JPG"/>
