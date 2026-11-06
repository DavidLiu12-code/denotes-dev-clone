import type { Metadata } from "next";
import { AuthGate } from "@/components/AuthGate";
import { ClassroomShell } from "@/components/ClassroomShell";
import lesson from "@/styles/lesson.module.css";
import welcome from "@/styles/welcome.module.css";

export const metadata: Metadata = { title: "Welcome" };

export default function WelcomePage() {
  return (
    <AuthGate redirectTo="/welcome">
      <ClassroomShell
        title="欢迎来到课室"
        intro="原站欢迎页会介绍怎么开始上课、怎么进群。完整文案和配图在登录墙之后，这里用同样的版式给一个本地占位。"
      >
        <p className={lesson.p}>
          你已经用本地模拟验证码登录。接下来可以看课程目录、审美 Skill 说明、早鸟群入口和设计参考库——这些路由在原站未登录时都会落到登录页。
        </p>
        <div className={welcome.pair} style={{ marginTop: 32 }}>
          <div className={welcome.pairMedia}>
            <div className={lesson.placeholderContent}>
              <p className={lesson.placeholderTitle}>欢迎页配图未公开</p>
              <p className={lesson.placeholderHint}>原站此区块是登录后内容，无法完整复刻。</p>
            </div>
          </div>
          <div className={welcome.pairCol}>
            <div className={welcome.caption}>
              <h2 className={lesson.h2} style={{ marginTop: 0 }}>
                先做这三件事
              </h2>
              <p className={lesson.p}>从目录里挑一节会卡住的场景，装上审美 Skill，有问题去早鸟群问。</p>
            </div>
          </div>
        </div>
      </ClassroomShell>
    </AuthGate>
  );
}
