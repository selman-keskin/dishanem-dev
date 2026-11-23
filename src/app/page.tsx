import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AppointmentPreview } from "./appointment-preview";

const features = [
  {
    title: "Randevu planlama",
    description: "Günlük randevuları ve muayene saatlerini aynı takvimde görüntüleme.",
  },
  {
    title: "Hasta yönetimi",
    description: "Hasta kayıtlarına ve ziyaret geçmişine klinik ekibinin tek ekrandan erişimi.",
  },
  {
    title: "Tedavi takibi",
    description: "Tedavi adımlarını planlama ve tamamlanan işlemleri izleme.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="ana-baslik">
          <div className="site-width hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Diş kliniği yönetimi</p>
              <h1 id="ana-baslik">Kliniğinizin iş akışı <span>tek yerde.</span></h1>
              <p className="hero__description">
                Dişhanem, randevu planlama, hasta yönetimi ve tedavi takibini tek çatı altında
                toplamak için geliştirilen bir klinik yönetim platformudur.
              </p>
              <div className="hero__actions">
                <ButtonLink href="#ornek-panel">Örnek paneli incele</ButtonLink>
                <ButtonLink href="#ozellikler" variant="secondary">Özellikleri keşfet</ButtonLink>
              </div>
            </div>
            <section className="hero__preview" id="ornek-panel" aria-labelledby="panel-baslik">
              <AppointmentPreview />
            </section>
          </div>
        </section>

        <section className="site-width features" id="ozellikler" aria-labelledby="ozellik-baslik">
          <h2 id="ozellik-baslik">Kliniğiniz için planlanan özellikler</h2>
          <ul className="features__grid">
            {features.map(({ title, description }) => (
              <li key={title}>
                <Card className="feature">
                  <h3>{title}</h3>
                  <p className="muted">{description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
