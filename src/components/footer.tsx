import { DishanemLogo } from "@/components/brand/dishanem-logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width site-footer__inner">
        <div>
          <DishanemLogo variant="footer" />
          <p>Diş klinikleri için yönetim platformu</p>
        </div>
        <a href="#sayfa-basi">Sayfa başına dön</a>
      </div>
    </footer>
  );
}
