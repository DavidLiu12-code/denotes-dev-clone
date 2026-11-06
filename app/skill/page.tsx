import type { Metadata } from "next";
import { AuthGate } from "@/components/AuthGate";
import { ClassroomShell } from "@/components/ClassroomShell";
import { JUDGMENT } from "@/lib/data";
import lesson from "@/styles/lesson.module.css";
import welcome from "@/styles/welcome.module.css";

export const metadata: Metadata = { title: "Skill" };

const TAGS = [welcome.tagPink, welcome.tagYellow, welcome.tagPurple];

export default function SkillPage() {
  return (
    <AuthGate redirectTo="/skill">
      <ClassroomShell
        title="审美 Skill"
        intro="把课里的判断写成 Skill，让 AI 照着做。原站这里会提供可复制的 SKILL.md 和安装说明，正文无法抓取。"
      >
        <p className={lesson.p}>
          下面列出公开营销页出现过的 12 条审美判断标题，作为索引占位。每条的讲解、例句和配套 Skill 文件都只在原站课室内。
        </p>
        <ul className={welcome.skillList} style={{ marginTop: 32 }}>
          {JUDGMENT.map((item, index) => (
            <li key={item.slug}>
              <span className={`${welcome.tag} ${TAGS[index % TAGS.length]}`}>{item.no}</span>
              <div>
                <p className={welcome.skillText}>{item.title}</p>
                <p className={welcome.skillExample}>完整判断说明未公开</p>
              </div>
            </li>
          ))}
        </ul>
      </ClassroomShell>
    </AuthGate>
  );
}
