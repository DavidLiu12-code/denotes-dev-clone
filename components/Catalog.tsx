"use client";

import { useState } from "react";
import { LockSimple } from "@phosphor-icons/react";
import { WindowDots } from "@/components/BrandMark";
import type { Lesson } from "@/lib/data";
import catalog from "@/styles/catalog.module.css";
import ui from "@/styles/ui.module.css";
import Image from "next/image";

const TABS = [
  { value: "practice", label: "实战场景" },
  { value: "judgment", label: "审美判断" },
] as const;

const VISIBLE = 12;

export function Catalog({
  practice,
  judgment,
}: {
  practice: Lesson[];
  judgment: Lesson[];
}) {
  const [tab, setTab] = useState<(typeof TABS)[number]["value"]>("practice");
  const items = (tab === "practice" ? practice : judgment).slice(0, VISIBLE);
  const half = VISIBLE / 2;
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <div className={catalog.screen}>
      <Image
        src="/images/bg105-catalog.jpg"
        alt=""
        fill
        sizes="(max-width: 1200px) 100vw, 1120px"
        className={catalog.image}
      />
      <div className={catalog.window}>
        <WindowDots className={catalog.dots} />
        <div
          role="group"
          aria-label="课程目录分类"
          className={`${ui.segmented} ${catalog.tabs}`}
        >
          {TABS.map((item) => {
            const active = tab === item.value;
            return (
              <button
                key={item.value}
                type="button"
                aria-pressed={active}
                className={
                  active
                    ? `${ui.segmentedTab} ${ui.segmentedTabActive}`
                    : ui.segmentedTab
                }
                onClick={() => setTab(item.value)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className={catalog.list}>
          {columns.map((col) => (
            <ol key={col[0]?.slug ?? "empty"} className={catalog.column}>
              {col.map((lesson, index) => (
                <li
                  key={lesson.slug}
                  className={
                    index >= 4 ? `${catalog.row} ${catalog.rowBlurred}` : catalog.row
                  }
                >
                  <span className={catalog.no}>{lesson.no}</span>
                  <span className={catalog.title}>{lesson.title}</span>
                </li>
              ))}
            </ol>
          ))}
          <span className={catalog.fade} aria-hidden="true" />
          <a href="#pricing" className={catalog.unlock}>
            <LockSimple size={16} aria-hidden="true" />
            加入后看完整目录
          </a>
        </div>
      </div>
    </div>
  );
}
