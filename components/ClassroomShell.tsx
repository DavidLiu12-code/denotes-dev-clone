"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/BrandMark";
import { clearSession, getSession, type Session } from "@/lib/auth";
import classroom from "@/styles/classroom.module.css";
import layout from "@/styles/layout.module.css";
import lesson from "@/styles/lesson.module.css";
import ui from "@/styles/ui.module.css";

const NAV = [
  {
    title: "开始",
    items: [
      { href: "/welcome", label: "欢迎" },
      { href: "/learn", label: "课程目录" },
    ],
  },
  {
    title: "课室",
    items: [
      { href: "/skill", label: "审美 Skill" },
      { href: "/group", label: "早鸟群" },
      { href: "/references", label: "设计参考" },
    ],
  },
];

export function ClassroomShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSessionState] = useState<Session | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSessionState(getSession());
  }, []);

  function logout() {
    clearSession();
    router.push("/login");
  }

  const initial = session?.email?.slice(0, 1).toUpperCase() ?? "U";

  return (
    <div className={`${layout.theme} ${layout.home} ${layout.fill}`}>
      <header className={classroom.readerBar}>
        <div className={classroom.navGrid}>
          <Link href="/learn" className={ui.brand} aria-label="Design Engineer Notes">
            <BrandLogo />
          </Link>
          <div className={classroom.right}>
            <button type="button" className={classroom.search} aria-label="搜索（占位）">
              <MagnifyingGlass size={16} aria-hidden="true" />
              <span className={classroom.searchLabel}>搜索</span>
              <span className={classroom.key}>⌘K</span>
            </button>
            <div className={classroom.account}>
              <button
                type="button"
                className={classroom.avatar}
                aria-expanded={menuOpen}
                aria-label="账户菜单"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span>{initial}</span>
              </button>
              {menuOpen ? (
                <div className={classroom.accountMenu}>
                  <span style={{ padding: "8px 12px", color: "var(--color-muted)", fontSize: 13 }}>
                    {session?.email}
                  </span>
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    回到首页
                  </Link>
                  <button type="button" onClick={logout}>
                    退出登录
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
      <div className={lesson.shell}>
        <aside className={lesson.sidebar}>
          <div className={lesson.navGroups}>
            {NAV.map((group) => (
              <div key={group.title} className={lesson.navGroup}>
                <div className={lesson.navGroupTitle}>{group.title}</div>
                {group.items.map((item) => {
                  const current = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        current ? `${lesson.item} ${lesson.itemCurrent}` : lesson.item
                      }
                    >
                      <span className={lesson.itemTitle}>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>
        <div className={lesson.content}>
          <div className={lesson.column}>
            <p className={lesson.crumbs}>课室</p>
            <h1 className={lesson.docTitle}>{title}</h1>
            <p className={lesson.docIntro}>{intro}</p>
            <div className={lesson.prose}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
