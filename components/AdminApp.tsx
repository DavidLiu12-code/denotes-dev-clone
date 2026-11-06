"use client";

import { useEffect, useState } from "react";
import {
  addBuyer,
  getBuyers,
  isAdminAuthed,
  isValidEmail,
  removeBuyer,
  setAdminAuthed,
  type Buyer,
} from "@/lib/auth";
import auth from "@/styles/auth.module.css";

export function AdminApp() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setAuthed(isAdminAuthed());
    setBuyers(getBuyers());
    setReady(true);
  }, []);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok: boolean };
      if (!data.ok) {
        setError("密码不对");
        return;
      }
      setAdminAuthed(true);
      setAuthed(true);
      setPassword("");
    } catch {
      setError("登录失败，请重试");
    } finally {
      setPending(false);
    }
  }

  function onAdd(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    const result = addBuyer(email);
    if (!result.ok) {
      setError(result.error ?? "添加失败");
      return;
    }
    setEmail("");
    setBuyers(getBuyers());
  }

  function onRemove(target: string) {
    removeBuyer(target);
    setBuyers(getBuyers());
  }

  if (!ready) {
    return (
      <section className={auth.window}>
        <h1 className={auth.title}>买家名单</h1>
        <p className={`t-muted ${auth.intro} ${auth.adminIntro}`}>载入中…</p>
      </section>
    );
  }

  if (!authed) {
    return (
      <section className={auth.window}>
        <h1 className={auth.title}>买家名单</h1>
        <p className={`t-muted ${auth.intro} ${auth.adminIntro}`}>
          只有你能进。收完款，把买家的邮箱加进来，他就能登录看课
        </p>
        <form onSubmit={signIn}>
          <label className={auth.label} htmlFor="password">
            管理密码
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            className={error ? `${auth.input} ${auth.inputError}` : auth.input}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? <p className={auth.error}>{error}</p> : null}
          <button type="submit" className={auth.submit} disabled={pending}>
            进入
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className={`${auth.window} ${auth.windowWide}`}>
      <h1 className={auth.title}>买家名单</h1>
      <p className={`t-muted ${auth.intro} ${auth.adminIntro}`}>
        只有你能进。收完款，把买家的邮箱加进来，他就能登录看课
      </p>
      <form onSubmit={onAdd}>
        <label className={auth.label} htmlFor="buyer-email">
          买家邮箱
        </label>
        <input
          id="buyer-email"
          className={error ? `${auth.input} ${auth.inputError}` : auth.input}
          type="email"
          placeholder="buyer@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error && isValidEmail(e.target.value)) setError("");
          }}
        />
        {error ? <p className={auth.error}>{error}</p> : null}
        <button type="submit" className={auth.submit}>
          添加
        </button>
      </form>
      <div className={auth.list}>
        <div className={auth.listHead}>
          <h2 className={auth.listTitle}>已添加</h2>
          <span className={auth.count}>{buyers.length} 人</span>
        </div>
        {buyers.length === 0 ? (
          <p className={auth.empty}>还没有买家。加上邮箱后，他们可以用这个邮箱登录看课。</p>
        ) : (
          buyers.map((buyer) => (
            <div key={buyer.email} className={auth.row}>
              <div className={auth.who}>
                <span className={auth.email}>{buyer.email}</span>
                <span className={auth.meta}>
                  {new Date(buyer.addedAt).toLocaleString("zh-CN", {
                    hour12: false,
                    timeZone: "Asia/Shanghai",
                  })}{" "}
                  加入
                </span>
              </div>
              <button
                type="button"
                className={auth.textButton}
                onClick={() => onRemove(buyer.email)}
              >
                移除
              </button>
            </div>
          ))
        )}
      </div>
      <div className={auth.foot}>
        <button
          type="button"
          className={auth.footLink}
          onClick={() => {
            setAdminAuthed(false);
            setAuthed(false);
          }}
        >
          退出管理
        </button>
      </div>
    </section>
  );
}
