import Image from "next/image";
import Link from "next/link";
import logoReference from "../../../public/brand/dishanem-logo-reference.png";

type DishanemLogoProps = {
  variant?: "header" | "footer";
};

export function DishanemLogo({ variant = "header" }: DishanemLogoProps) {
  return (
    <Link href="/" className={`brand brand--${variant}`}>
      <Image
        src={logoReference}
        alt="Dişhanem ana sayfası"
        sizes={variant === "header" ? "200px" : "148px"}
        loading={variant === "header" ? "eager" : "lazy"}
      />
    </Link>
  );
}
