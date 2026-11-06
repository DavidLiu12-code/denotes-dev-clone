"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  isValidEmail,
  issueOtp,
  setSession,
  verifyOtp,
} from "@/lib/auth";
import auth from "@/styles/auth.module.css";

export function LoginForm({ redirectTo = "/learn" }: { redirectTo?: string }) {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [devCode, setDevCode] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [pending, setPending] = useState(false);

  function sendCode() {
    setError("");
    if (!isValidEmail(email)) {
      setError("请输入有效邮箱");
      return;
    }
    setPending(true);
    const issued = issueOtp(email);
    setDevCode(issued);
    console.info(`[denotes-clone] mock OTP for ${email.trim().toLowerCase()}: ${issued}`);
    setNotice("验证码已发送（本地模拟，不会发信）");
    setStep("code");
    setPending(false);
  }

  function onSend(event: React.FormEvent) {
    event.preventDefault();
    sendCode();
  }

  function submitCode(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (!verifyOtp(email, code)) {
      setError("验证码不对或已过期，请重新发送");
      return;
    }
    setSession(email);
    router.push(redirectTo);
  }

  return (
    <section className={auth.window} aria-labelledby="login-title">
      <h1 id="login-title" className={`t-section ${auth.title}`}>
        登录课程
      </h1>
      {step === "email" ? (
        <form noValidate onSubmit={onSend}>
          <p className={`t-muted ${auth.intro}`}>填买课时留的邮箱，验证码会发到这里</p>
          <label className={auth.label} htmlFor="email">
            邮箱
          </label>
          <input
            id="email"
            className={error ? `${auth.input} ${auth.inputError}` : auth.input}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(error)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error ? <p className={auth.error}>{error}</p> : null}
          <button type="submit" className={auth.submit} disabled={pending}>
            发送验证码
          </button>
        </form>
      ) : (
        <form noValidate onSubmit={submitCode}>
          <p className={`t-muted ${auth.intro}`}>验证码已发到 {email.trim().toLowerCase()}</p>
          {notice ? <p className={auth.notice}>{notice}</p> : null}
          {devCode ? (
            <p className={auth.devCode}>
              本地验证码：<strong>{devCode}</strong>
            </p>
          ) : null}
          <label className={auth.label} htmlFor="code">
            验证码
          </label>
          <input
            id="code"
            className={
              error
                ? `${auth.input} ${auth.codeInput} ${auth.inputError}`
                : `${auth.input} ${auth.codeInput}`
            }
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="6 位数字"
            aria-invalid={Boolean(error)}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {error ? <p className={auth.error}>{error}</p> : null}
          <button type="submit" className={auth.submit}>
            登录
          </button>
        </form>
      )}
      <div className={auth.foot}>
        {step === "code" ? (
          <>
            <button
              type="button"
              className={auth.footLink}
              onClick={() => {
                setStep("email");
                setCode("");
                setError("");
                setNotice("");
              }}
            >
              用其他邮箱
            </button>
            <button type="button" className={auth.footLink} onClick={sendCode}>
              重新发送
            </button>
          </>
        ) : (
          <>
            <span>还没加入？</span>
            <Link className={auth.footLink} href="/#pricing">
              看早鸟价
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
