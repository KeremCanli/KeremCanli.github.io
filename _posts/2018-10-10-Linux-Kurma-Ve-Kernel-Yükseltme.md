---
layout: post
title: Linux Kurma Ve Kernel Yükseltme
---


![_config.yml]({{ site.baseurl }}/images/1.png)
Ubuntu 18.04.1 kurulumunu sanal makine üzerinde başlatıyoruz.
![_config.yml]({{ site.baseurl }}/images/2.png)
![_config.yml]({{ site.baseurl }}/images/3.png)
Herhangi bir problem olabilir diye güncellemeleri sonra yapmayı tercih edebilirsiniz.
![_config.yml]({{ site.baseurl }}/images/4.png)
![_config.yml]({{ site.baseurl }}/images/5.png)
![_config.yml]({{ site.baseurl }}/images/6.png)
![_config.yml]({{ site.baseurl }}/images/7.png)
![_config.yml]({{ site.baseurl }}/images/8.png)
![_config.yml]({{ site.baseurl }}/images/9.png)
Kurulum tamamlandı.
![_config.yml]({{ site.baseurl }}/images/10.png)
Ubuntu problemsiz bir şekilde başladı.
![_config.yml]({{ site.baseurl }}/images/11.png)
Kurulum ekranında sonraya bıraktığımız güncellemeleri yapmak için Yazılım Güncelleştirici’ yi kullanalım. 
![_config.yml]({{ site.baseurl }}/images/12.png)
Güncelleştirmeleri başlatıyoruz.
![_config.yml]({{ site.baseurl }}/images/13.png)
![_config.yml]({{ site.baseurl }}/images/14.png)
Güncelleştirmeler bitti ve sistemi yeniden başlatıyoruz.
![_config.yml]({{ site.baseurl }}/images/15.png)
Terminali açıyoruz.
![_config.yml]({{ site.baseurl }}/images/16.png)
Kernel sürümünü öğrenmek için uname –r komutunu giriyoruz.
![_config.yml]({{ site.baseurl }}/images/17.png)
Default olarak gelen kernel sürümü 4.15.0-34-generic.
![_config.yml]({{ site.baseurl }}/images/18.png)
www.kernel.org sitesine girdiğimizde en güncel sürümü gösterecektir. Ben yükseltme yaparken en güncel sürüm 4.18.11 di.
![_config.yml]({{ site.baseurl }}/images/19.png)
Bu sürümü indiriyoruz.
![_config.yml]({{ site.baseurl }}/images/20.png)
İndirilenler altında bulunan bu dosyayı /usr/src dizinine kopyalamak için cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu kullanıyoruz. Ancak ‘Erişim engellendi’ hatası alacağız. 
![_config.yml]({{ site.baseurl }}/images/21.png)
Bu hatayı almamak için sudo –s komutu ile root moduna geçiyoruz.
![_config.yml]({{ site.baseurl }}/images/22.png)
cp /home/"Kullanıcı Adınız"/İndirilenler/linux-4.18.11.tar.xz /usr/src komutunu tekrar giriyoruz ve sorunsuz bir şekilde çalışıyor. 
![_config.yml]({{ site.baseurl }}/images/23.png)
cd /usr/src komutu ile /usr/src dizinine geçiyoruz.
![_config.yml]({{ site.baseurl }}/images/24.png)
tar –xJvf linux-4.18.11.tar.xz komutu ile tar.xz uzantılı dosyayı klasöre çıkartıyoruz.
![_config.yml]({{ site.baseurl }}/images/25.png)
cd linux-4.18.11 komutu ile çıkarttığımız klasöre geçiş yapıyoruz.
![_config.yml]({{ site.baseurl }}/images/26.png)
Bu dizindeki eski ayarları temizlemek için make proper komutunu kullanıyoruz. Fakat ‘make not found’ hatası alacağız.
![_config.yml]({{ site.baseurl }}/images/27.png)
apt install make komutu ile make paketini yüklüyoruz.
![_config.yml]({{ site.baseurl }}/images/28.png)
Tekrar make proper komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/29.png)
‘gcc not found’ hatası alacağız.
![_config.yml]({{ site.baseurl }}/images/30.png)
apt install gcc komutu ile gcc paketini yüklüyoruz.
![_config.yml]({{ site.baseurl }}/images/31.png)
Tekrar make proper komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/32.png)
‘bison not found’ hatası alacağız.
![_config.yml]({{ site.baseurl }}/images/33.png)
apt install bison komutu ile bison paketini yüklüyoruz.
![_config.yml]({{ site.baseurl }}/images/34.png)
Tekrar make proper komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/35.png)
flex not found’ hatası alacağız.
![_config.yml]({{ site.baseurl }}/images/36.png)
apt install flex komutu ile flex paketini yüklüyoruz.
![_config.yml]({{ site.baseurl }}/images/37.png)
Tekrar make proper komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/38.png)
‘.config not found’ hatası alacağız. Bu hatayı gidermek için make menuconfig komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/39.png)
ncurses yüklememiz gerektiğini söylecek.
![_config.yml]({{ site.baseurl }}/images/40.png)
apt-get install libncurses5-dev komutu ile bu paketi yüklüyoruz.
![_config.yml]({{ site.baseurl }}/images/41.png)
Tekrar make menuconfig komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/42.png)
Kernel da düzenlemeler yapmak için hazırlanmış bir arayüz karşımıza gelecek.
![_config.yml]({{ site.baseurl }}/images/43.png)
Herhangi bir ayarı değiştirmeden <Exit> ı seçiyoruz.
![_config.yml]({{ site.baseurl }}/images/44.png)
 Gelen ekranı onaylıyoruz.
![_config.yml]({{ site.baseurl }}/images/45.png)
 Konfigürasyonun tamamlandığını söylecek.
![_config.yml]({{ site.baseurl }}/images/46.png)
 make clean komutu ile yapılandırma dosyasındaki fazlalıkları temizliyoruz.
![_config.yml]({{ site.baseurl }}/images/47.png)
 Kernel imajını derlemek için make bzImage komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/48.png)
 Bir hata ile karşılaşacağız.
![_config.yml]({{ site.baseurl }}/images/49.png)
apt-get install libssl-dev komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/50.png)
Tekrar make bzImage komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/51.png)
  Modülleri derlemek için make modules komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/52.png)
  Derlenen modülleri /lib/modules içine taşımak için make modules_install komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/53.png)
  Son olarak make install komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/54.png)
  Kernel sürümünü kontrol etmek için uname –r komutunu giriyoruz.
![_config.yml]({{ site.baseurl }}/images/55.png)
  Eski sürümü gösterecek. Bu yüzden sistemi yeniden başlatıyoruz.
![_config.yml]({{ site.baseurl }}/images/56.png)
  Böyle bir hata ile karşılaşırsanız hatanın sebebi sanal makineye verilen RAM boyutundan kaynaklanıyor. Boyutu arttırırsanız sorun çözülecektir.
![_config.yml]({{ site.baseurl }}/images/57.png)
  Tekrar uname –r komutunu kullanıyoruz.
![_config.yml]({{ site.baseurl }}/images/58.png)
