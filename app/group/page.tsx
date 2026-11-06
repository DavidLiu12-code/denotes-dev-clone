import type { Metadata } from "next";
import { AuthGate } from "@/components/AuthGate";
import { ClassroomShell } from "@/components/ClassroomShell";
import { WECHAT_ID } from "@/lib/data";
import lesson from "@/styles/lesson.module.css";
import welcome from "@/styles/welcome.module.css";

export const metadata: Metadata = { title: "Group" };

export default function GroupPage() {
  return (
    <AuthGate redirectTo="/group">
      <ClassroomShell
        title="早鸟群"
        intro="加入后可以进早鸟群，有新内容会第一时间通知。原站这里会展示进群方式和群内预览，未登录不可见。"
      >
        <p className={lesson.p}>
          克隆版不接入真实微信支付或微信群。加人流程和首页定价区一致：加微信 {WECHAT_ID}，备注「早鸟」，支付 ¥99 后由伊恩拉群。
        </p>
        <div className={welcome.joinCard} style={{ marginTop: 32 }}>
          <div className={welcome.qrWindow}>
            <div className={welcome.qrCode}>二维码未接入</div>
            <p className={welcome.qrNote}>
              微信 {WECHAT_ID}
            </p>
          </div>
        </div>
      </ClassroomShell>
    </AuthGate>
  );
}
