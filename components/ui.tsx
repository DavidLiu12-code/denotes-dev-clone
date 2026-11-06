import type { ReactNode } from "react";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import ui from "@/styles/ui.module.css";

type ButtonVariant = "primary" | "ghost" | "black";

export function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size,
  full,
  arrow = "up",
  className,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "small";
  full?: boolean;
  arrow?: "up" | "down" | "none";
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        ui.button,
        variant === "primary" && ui.primary,
        variant === "ghost" && ui.ghost,
        variant === "black" && ui.black,
        size === "small" && ui.small,
        full && ui.full,
        className,
      )}
      target={target}
      rel={rel}
    >
      {children}
      {arrow === "up" && (
        <ArrowUpRight size={20} className={ui.arrow} aria-hidden="true" />
      )}
      {arrow === "down" && (
        <ArrowDown
          size={18}
          className={cx(ui.arrow, ui.arrowDown)}
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className={ui.badge}>{children}</span>;
}

export function SectionHeader({
  badge,
  title,
  titleClassName,
  description,
  action,
  lowered,
}: {
  badge: ReactNode;
  title: ReactNode;
  titleClassName?: string;
  description?: ReactNode;
  action?: ReactNode;
  lowered?: boolean;
}) {
  return (
    <header className={ui.header}>
      <div className={ui.headerLeft}>
        <Badge>{badge}</Badge>
        <h2 className={cx("t-module", titleClassName, ui.titleTight)}>{title}</h2>
        {action ? <div className={ui.headerAction}>{action}</div> : null}
      </div>
      {description ? (
        <p
          className={cx(
            "t-desc",
            ui.headerRight,
            lowered && ui.headerRightLowered,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function CenteredHeader({
  badge,
  title,
  description,
}: {
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <header className={ui.headerCentered}>
      <Badge>{badge}</Badge>
      <div className={ui.headerCenteredText}>
        <h2 className="t-module t-mixed">{title}</h2>
        <p className="t-desc">{description}</p>
      </div>
    </header>
  );
}
