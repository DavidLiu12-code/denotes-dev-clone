import Link from "next/link";
import { AuthBackdrop } from "@/components/AuthBackdrop";
import auth from "@/styles/auth.module.css";

export default function NotFound() {
  return (
    <AuthBackdrop showBack={false}>
      <section className={auth.window}>
        <h1 className={auth.title}>这一页不存在</h1>
        <p className={`t-muted ${auth.intro}`}>可能是链接写错了，或者这节还没更新</p>
        <Link href="/" className={`${auth.submit} ${auth.action}`}>
          回到首页
        </Link>
      </section>
    </AuthBackdrop>
  );
}
