import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { BrandLogo, TextureLetters } from "@/components/BrandMark";
import auth from "@/styles/auth.module.css";
import ui from "@/styles/ui.module.css";
import type { ReactNode } from "react";

export function AuthBackdrop({
  children,
  wide,
  showBack = true,
}: {
  children: ReactNode;
  wide?: boolean;
  showBack?: boolean;
}) {
  return (
    <main className={auth.backdrop}>
      <div className={auth.texture} aria-hidden="true">
        <TextureLetters />
        <span className={auth.textureHand}>unslop</span>
        <span className={`${auth.textureLine} ${auth.textureLineA}`} />
        <span className={`${auth.textureLine} ${auth.textureLineB}`} />
      </div>
      {showBack ? (
        <Link href="/" className={auth.backHome}>
          <ArrowLeft size={14} aria-hidden="true" />
          <span className={auth.backHomeLabel}>返回首页</span>
        </Link>
      ) : null}
      <div className={auth.brand}>
        <Link href="/" className={ui.brand} aria-label="Design Engineer Notes">
          <BrandLogo />
        </Link>
      </div>
      <div className={wide ? `${auth.column} ${auth.columnWide}` : auth.column}>
        {children}
      </div>
    </main>
  );
}
