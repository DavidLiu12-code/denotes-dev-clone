import type { Metadata } from "next";
import { AuthGate } from "@/components/AuthGate";
import { ClassroomShell } from "@/components/ClassroomShell";
import lesson from "@/styles/lesson.module.css";
import welcome from "@/styles/welcome.module.css";

export const metadata: Metadata = { title: "References" };

const GROUPS = [
  { title: "好网站", desc: "我平时找参考常去的网站" },
  { title: "好作品", desc: "值得反复拆开看的界面" },
  { title: "设计师", desc: "我一直关注的设计师" },
];

export default function ReferencesPage() {
  return (
    <AuthGate redirectTo="/references">
      <ClassroomShell
        title="设计参考"
        intro="原站登录后会展示伊恩常用的好网站、好作品和设计师名单。具体链接和评语在登录墙之后，这里只保留分类结构。"
      >
        <div className={welcome.refSection}>
          <div className={welcome.refList}>
            {GROUPS.map((group) => (
              <section key={group.title} className={welcome.section}>
                <h2 className={lesson.h2} style={{ marginTop: 0 }}>
                  {group.title}
                </h2>
                <p className={lesson.p}>{group.desc}。完整名单和点评无法从公开页面抓取。</p>
                <div className={lesson.media}>
                  <div className={lesson.placeholderContent}>
                    <p className={lesson.placeholderTitle}>参考条目未公开</p>
                    <p className={lesson.placeholderHint}>登录原站课室后才能看到具体网站、作品和设计师。</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </ClassroomShell>
    </AuthGate>
  );
}
