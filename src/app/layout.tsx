import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dişhanem | Diş Kliniği Yönetimi",
  description: "Dişhanem ile diş kliniğiniz için randevu, hasta ve tedavi yönetimini keşfedin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
