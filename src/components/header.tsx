import { DishanemLogo } from "@/components/brand/dishanem-logo";

export function Header() {
  return (
    <header className="site-header" id="sayfa-basi">
      <div className="site-width site-header__inner">
        <DishanemLogo />
        <nav aria-label="Ana menü">
          <a href="#ozellikler">Özellikler</a>
          <a href="#ornek-panel">Örnek panel</a>
        </nav>
      </div>
    </header>
  );
}
