<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DİŞHANEM — GELİŞTİRME TALİMATLARI

## 1. Genel İlkeler

- Proje adı: Dişhanem.
- Alan adı: dishanem.com.tr.
- Proje, diş klinikleri için geliştirilen çok kiracılı (multi-tenant) SaaS uygulamasıdır.
- Geliştirme dili ve Codex açıklamaları Türkçe olmalıdır.
- Kod okunabilir, modüler, güvenli ve sürdürülebilir olmalıdır.
- Gereksiz bağımlılık, servis veya mimari karmaşıklık oluşturma.
- Mevcut çalışan özellikleri bozmadan ilerle.
- Değişikliklerden önce ilgili dosyaları ve bağımlılıkları incele.
- Varsayımları açıkça belirt; bilinmeyen altyapı bilgilerini uydurma.

## 2. Teknoloji

- Frontend ve backend: Next.js, TypeScript.
- Veritabanı: PostgreSQL.
- ORM ve migration aracı mevcut proje incelendikten sonra belirlenmelidir.
- Kod yönetimi: Git ve GitHub.
- Geliştirme ortamı: Ubuntu Linux, AWS EC2.
- Uygulama başlangıçta tek sunucuda çalışabilir.
- Kubernetes ve mikroservis mimarisi başlangıçta zorunlu değildir.
- Next.js kodu yazmadan önce node_modules/next/dist/docs/
  altındaki ilgili güncel dokümantasyonu incele.
- Eski Next.js API ve alışkanlıklarını varsayma.

## 3. SaaS Mimari İlkeleri

- Uygulama merkezi olarak yönetilir.
- Tek uygulama kod tabanı kullanılır.
- Klinikler birbirinden mantıksal ve veritabanı seviyesinde izole edilir.
- Her klinik ayrı PostgreSQL veritabanına sahiptir.
- Klinikler birbirlerinin verilerine erişemez.
- Ortak kod tabanındaki değişiklikler kliniklerin tamamına uygulanabilir.
- Kliniklere özel özellikler kontrollü ve modüler biçimde geliştirilebilir.

## 4. PostgreSQL Mimari Kuralları

Merkezi kontrol veritabanı:

Veritabanı: dishanem_control
Şema: app

Klinik veritabanları:

Veritabanı: clinic_<id>
Şema: clinic_<id>_app

Kurallar:

- Her SQL işleminde hedef veritabanını açıkça belirt.
- SQL çalıştırmadan önce current_database() ve current_schema()
  değerlerini doğrula.
- Merkezi kontrol verilerini klinik veritabanına yazma.
- Klinik hasta verilerini merkezi kontrol veritabanına yazma.
- Klinikler arası SQL bağlantılarını kesin biçimde izole et.
- Tenant kimliği yalnızca kullanıcı isteğine güvenilerek belirlenemez.
- Tenant kimliği sunucu tarafında doğrulanmalıdır.
- Veritabanı bağlantılarını merkezi ve güvenli bir katmanda yönet.
- Migration işlemleri merkezi ve klinik veritabanlarında ayrı yönetilir.
- Migration işlemlerini otomatik olarak canlı veritabanına uygulama.
- DROP, TRUNCATE ve yıkıcı migration işlemleri için açık onay iste.
- Klinik oluşturma ve silme işlemleri denetlenebilir olmalıdır.

## 5. Kimlik Doğrulama ve Yetkilendirme

- Platform yönetimi ile klinik kullanıcı yönetimini ayır.
- Platformun merkezi yöneticisi tek bir ana yönetici hesabıdır.
- Klinik kullanıcıları platform yöneticisi yetkisine sahip olamaz.
- Her kliniğin kendi kullanıcıları ve yetki sınırları bulunur.
- Kliniklerde birden fazla yetkili kullanıcı tanımlanabilir.
- Kullanıcı rolleri ihtiyaca göre genişletilebilir.
- Rol ve izin denetimleri sunucu tarafında yapılmalıdır.
- Authentication ve authorization birbirinden ayrı değerlendirilmelidir.
- Güvenli oturum, parola saklama ve erişim kontrolleri uygulanmalıdır.
- Klinik erişiminde tenant izolasyonu her istekte doğrulanmalıdır.

## 6. Güvenlik ve Veri Koruma

- Hasta verileri hassas sağlık verileridir.
- KVKK ve ilgili mevzuata uyum gereksinimleri dikkate alınmalıdır.
- Gizli anahtarlar ve parolalar kaynak koduna yazılmamalıdır.
- .env dosyaları GitHub'a gönderilmemelidir.
- SQL injection, XSS ve CSRF riskleri değerlendirilmelidir.
- Girdi doğrulama yalnızca istemci tarafında yapılmamalıdır.
- API uç noktalarında kimlik, yetki ve tenant denetimi bulunmalıdır.
- Hasta verileri uygulama loglarına yazılmamalıdır.
- Güvenlik açısından kritik işlemler için audit log tasarlanmalıdır.
- Yedekleme, geri yükleme ve erişim yönetimi klinik bazında ele alınmalıdır.

## 7. Uygulama Tasarımı

- Arayüz dili başlangıçta Türkçedir.
- Tasarım mobil, tablet ve masaüstü cihazlarla uyumlu olmalıdır.
- Ana tema beyaz taban üzerine bebek mavisi ve bebek pembesidir.
- Tasarım sade, profesyonel, modern ve erişilebilir olmalıdır.
- Hasta ve klinik yönetimi kullanıcı dostu olmalıdır.
- Ortak bileşenler yeniden kullanılabilir şekilde tasarlanmalıdır.
- Görsel tutarlılık için merkezi tasarım değişkenleri kullanılmalıdır.
- Klinik çalışanları için gereksiz teknik karmaşıklık oluşturma.

## 8. Entegrasyonlar

- Harici entegrasyonlar modüler tasarlanmalıdır.
- POS, ödeme, e-Nabız ve e-Devlet gibi entegrasyonlar
  ileride eklenebilecek şekilde değerlendirilmelidir.
- Henüz doğrulanmamış entegrasyon API'lerini mevcut varsayma.
- Entegrasyon gerektiren lisans, yetki ve sözleşme koşullarını belirt.
- Gerçek entegrasyon olmadan çalışıyor izlenimi verme.
- Klinik bazında özellik etkinleştirme ileride desteklenebilir.

## 9. Kod Kalitesi

- TypeScript tip güvenliğini koru.
- Gereksiz any kullanımından kaçın.
- İş mantığını görsel bileşenlerden ayır.
- Tekrarlanan kodları ortak modüllere taşı.
- Hataları güvenli ve anlaşılır biçimde ele al.
- Kritik iş kuralları için testler oluştur.
- Tenant izolasyonunu testlerle doğrula.
- Her değişiklikten sonra mevcut lint, typecheck ve ilgili testleri çalıştır.
- Test sonucu hakkında yalnızca gerçekten çalıştırılan kontrolleri raporla.

## 10. Git ve Değişiklik Yönetimi

- Küçük, anlaşılır ve geri alınabilir değişiklikler yap.
- Gereksiz dosyaları değiştirme.
- Gizli bilgileri Git geçmişine ekleme.
- Kullanıcının mevcut değişikliklerini izinsiz silme.
- Git push, force push ve geçmiş değiştirme işlemlerini
  açık talimat olmadan gerçekleştirme.
- Değişiklikleri Türkçe ve kısa biçimde özetle.
- Veritabanını etkileyen değişiklikleri ayrıca bildir.

## 11. Codex Çalışma Biçimi

Her geliştirme görevinde:

1. İlgili mevcut kodu incele.
2. Mevcut mimariyi ve bağımlılıkları değerlendir.
3. Gerekli en küçük güvenli değişikliği belirle.
4. Kod değişikliklerini uygula.
5. Uygun testleri çalıştır.
6. Sonuçları Türkçe olarak raporla.

Özellikle:

- Kullanıcının istemediği büyük mimari değişiklikleri yapma.
- Production ortamına izinsiz müdahale etme.
- Migration ve veri kaybı riski taşıyan işlemleri otomatik uygulama.
- Başarısız işlemleri gizleme.
- Mevcut Next.js agent kurallarını koru.

