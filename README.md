# Cartelizm V14 Bots

## 🎉 TypeScript Cartelizm V14 Public Bots

Uzun süredir beklenen **Cartelizm V14 Bots**'u duyurmaktan büyük mutluluk duyuyorum. 🎉 Bu projeyi, global alanda daha ileriye gitme hedefiyle geliştiriyorum. Discord için tekrardan bir public bot çıkarma düşüncem olmasa da ekip arkadaşlarımın ve tanıdıklarımın ısrarı üzerine bu projeyi hayata geçirmeye karar verdim. Bu projeyi, Discord camiasında kimseye parayla satmayacağım ve GitHub hesabımda public olarak yayınlayacağım. 📂 Botlar tamamlandıktan sonra repository'yi daha fazla güncellemeyeceğim, bu sayede botlar hatasız olarak GitHub hesabımda kalacak. 🚀

## 🤔 Neden Bu Projeyi Yapıyorum?

Discord ortamında uzun süre bulunduktan ve pek çok insanla iş yaptıktan sonra böyle bir karar aldım. Dostlarımın ricası üzerine projeyi oluşturmaya başladım. Ekstra bir sebebi yok, sadece arkadaşlarımın isteği ve destekleriyle bu projeye başladım. 🙌

## 🛠️ Botun Kullandığı Teknolojiler

- 📝 **Discord.js V14:** Proje Discord.js V14 kullanılarak geliştirilecek.
- 💻 **TypeScript:** Proje tamamen TypeScript dili ile yazılacak. Bu, kodun daha güvenli, okunabilir ve bakımının kolay olmasını sağlar.
- 🗂️ **Özgün Dizin Yapısı:** Daha önce görmediğiniz, özgün bir dizin yapısına sahip olacak. Bu yapı, botların işlevselliğini ve performansını optimize ederken, geliştiricilerin kodu kolayca anlamalarını sağlar.
- 🗃️ **Local Veri Sistemi:** MongoDB yerine, olabilecek en iyi local veri sistemi olan SQL ile çalışacak. Veriler SQL şemalarıyla yönetilecek ve depolanacak. Bu, veri bütünlüğünü ve erişim hızını artırır.
- ⚙️ **Konfigürasyon Sistemleri:** Tüm konfigürasyonlar YAML dosyaları üzerinden yapılacak. Değişiklik yapmaları ve yapmamaları gereken yerler dosyaların içerisinde oldukça açık bir şekilde belirtilecek, böylece okuma yazma bilen herkes bu botları kullanabilir hale gelecek.
- 🔄 **Canlı Konfigürasyon Sistemi:** Bu sistem de entegre edilecek, böylece çoğu ayar ve mesaj bot kapatılmadan ayarlanabilir. Bu, kullanıcı deneyimini artırır ve kesintisiz hizmet sağlar.
- 🌐 **Web Panel:** Sunucu içi kurulumlar hem Discord'dan hem de web panelden yapılabilecek. Bu, yönetim ve yapılandırmayı daha kolay ve erişilebilir hale getirir.
- 🖥️ **Özel Build Sistemi:** TypeScript botlarda PM2 ile çalışma desteklenmediği için, botlar kendine has PM2 benzeri bir build sistemiyle beraber geliştirildi. Konsoldan başlatmak istedikleri botları tek tek seçebilir, hepsini başlatıp durdurabilir veya durumlarını görüntüleyebilirler.

## 🌟 Özellikler

### ⚙️ Canlı Konfigürasyon

- 📜 Tüm string, konsol ve ayar sistemleri YAML dosyalarına dayalıdır ve bot içinde özel tanımlamalarla kullanılır.
- 🔧 Gelişmiş konfigürasyon sistemi sayesinde, çoğu ayar ve mesaj bot kapatılmadan ayarlanabilir. Bu, kullanıcıların botu kesintisiz kullanmasını sağlar ve anlık değişiklikler yapılabilir.

### 🎉 Etkinlik Yönetimi

- 🔄 Etkinlik okuma sistemi iki kısma ayrılmıştır ve iki farklı yaratıcı sınıf tarafından desteklenmektedir. Bu, botun işlevselliğini ve etkinlik yönetimini optimize eder.
- 📈 Bu da bot içinde yüksek optimizasyon ve düzen sağlar. Etkinliklerin yönetimi daha verimli hale gelir ve performans artışı sağlanır.
- 🎛️ Etkinlikler gerektiğinde tek bir işleyici içinde tetiklenir. Bu, kodun daha temiz ve yönetilebilir olmasını sağlar.

### 💾 Otomatik Veritabanı İşlemleri

- 🗃️ Tüm veriler kullanıcı ayarları için otomasyon aracılığıyla kaydedilir. Bu, veri girişini kolaylaştırır ve hata oranını azaltır.

### 📚 Özel Tür Tanımlamaları

- 📂 Sistem, diğer benzer sistemlerden farklı olarak benzersiz tür tanımlamaları ve dosyalar içerir. Bu, kodun daha okunabilir ve anlaşılır olmasını sağlar.
- 🖥️ Tipik TypeScript ve JavaScript altyapılarına benzemez, daha çok Java dili ve ilkeleri ile uyumludur. Bu, geliştiricilerin daha hızlı adapte olmasını sağlar.

### ⚡ Optimize Komut ve Etkinlik Sistemi

- 🚀 Komutlar ve etkinliklerden oluşan ana sistem, optimize edilmiş, hızlı bir işleyici grubudur. Bu, botun daha hızlı yanıt vermesini sağlar ve kullanıcı deneyimini artırır.
- 💨 Daha hızlı ve verimli çalışması için OOP programlama dillerine daha yakın yazılmıştır. Bu, kodun daha modüler ve genişletilebilir olmasını sağlar.

### 🛡️ Koruma Sistemleri ve AutoMod Kullanımı

- 🔒 Gelişmiş koruma sistemleri ve AutoMod kullanımı, küfür engel, reklam engel gibi özellikleri içerir. Bu, sunucunun güvenliğini artırır ve istenmeyen içeriklerin yayılmasını engeller.
- 😊 Botlar kendi içlerinde gelen emojilere sahip olacak ve kurulum gerektirmeyecek. Bu, kullanımı daha eğlenceli ve kolay hale getirir.

### 🌐 Web Panel ve Sunucu Yönetimi

- 💻 Sunucu içi kurulumlar hem Discord'dan hem de web panelden yapılabilecek. Bu, kullanıcıların botları daha kolay yönetmesini sağlar.
- 🛠️ Web panel, kullanıcı dostu arayüzü ile botların yapılandırmasını ve yönetimini kolaylaştırır. Kullanıcılar, botların durumunu izleyebilir, komutları ve ayarları değiştirebilir.

### 💡 Yenilikçi Sistemler ve Kullanıcı Dostu Yapı

- 📝 Konfigürasyon sistemi tamamen YAML dosyalarından oluşacak ve değişiklik yapmaları ve yapmamaları gereken yerler dosyaların içerisinde oldukça açık bir şekilde belirtilecek. Bu, teknik bilgiye sahip olmayan kullanıcıların bile botları kolayca kullanabilmesini sağlar.
- 🔄 Botların tüm veri tabanı SQL olacak. Bu, veri yönetimini daha güvenli ve verimli hale getirir.
- 🛠️ Komut ve event sistemleri her botun ayrı ve düzenli çalışmasını sağlayacak. Botun kendi içinde ortak dosyalar var fakat bot adlarına göre ayırıp ya da clientlere göre tekrardan çağırılarak her botta ayrı kullanımı sağlanacak.

### 🚀 PM2 Benzeri Build Sistemi

- 🔧 TypeScript botlarda PM2 ile çalışma desteklenmediği için, kendine has PM2 benzeri bir build sistemiyle beraber geliştirilmiştir.
- 🎛️ Botlar konsoldan başlatmak istedikleri botları tek tek seçebilir, hepsini başlatıp durdurabilir veya durumlarını görüntüleyebilirler. Bu, botların yönetimini daha esnek ve kullanıcı dostu hale getirir.

## ℹ️ Genel Bilgilendirme

Kişisel olarak geliştirdiğim bu sistem hakkında destek almak isterseniz, sorun yaşarsanız veya önerilerinizi paylaşmak isterseniz Discord üzerinden benimle iletişime geçebilirsiniz. 💬

- **Discord Nick Hesabım:** @cartelizm
- **Discord Şuan Takıldığım Hesap:** @cartelxrd

Bu kanallardan bana ulaşabilirsiniz. Bu projeyi kullanacak herkese şimdiden teşekkür ederim ve projeyi beğeneceğinizi umuyorum. 🙏🎉
