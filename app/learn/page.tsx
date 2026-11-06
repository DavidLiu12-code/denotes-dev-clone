import type { Metadata } from "next";
import { AuthGate } from "@/components/AuthGate";
import { ClassroomShell } from "@/components/ClassroomShell";
import { PRACTICE } from "@/lib/data";
import learn from "@/styles/learn.module.css";
import lesson from "@/styles/lesson.module.css";

export const metadata: Metadata = { title: "Learn" };

export default function LearnPage() {
  return (
    <AuthGate redirectTo="/learn">
      <ClassroomShell
        title="课程目录"
        intro="原站登录后的课程正文无法在未授权情况下抓取。这里用同样的课室壳展示目录占位，方便本地走完登录后的路由。"
      >
        <p className={lesson.p}>
          真实 Denotes 课里有 20+ 实战场景和 15+ 审美判断，以及配套演示、提示词和录屏。本复刻只保留公开营销页里出现过的 12 个实战标题作为索引。
        </p>
        <div className={`${lesson.media} ${lesson.docCover}`}>
          <div className={lesson.placeholderContent}>
            <p className={lesson.placeholderTitle}>课程内容不可抓取</p>
            <p className={lesson.placeholderHint}>
              登录后门禁之后的讲义、视频和作业都在原站后端，克隆版用占位卡片代替。
            </p>
          </div>
        </div>
        <div className={`${learn.grid} ${learn.columns3}`} style={{ marginTop: 32 }}>
          {PRACTICE.map((item) => (
            <article key={item.slug} className={`${learn.card} ${learn.cardPending}`}>
              <div className={learn.cover}>
                <div className={learn.coverArt}>
                  <span className={learn.coverNo}>{item.no}</span>
                </div>
                <span className={learn.coverStatus}>未同步</span>
              </div>
              <div className={learn.text}>
                <h2 className={learn.title}>{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </ClassroomShell>
    </AuthGate>
  );
}
