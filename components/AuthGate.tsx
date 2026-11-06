"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AuthBackdrop } from "@/components/AuthBackdrop";
import { LoginForm } from "@/components/LoginForm";
import { getSession } from "@/lib/auth";

export function AuthGate({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(Boolean(getSession()));
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <AuthBackdrop>
        <section style={{ minHeight: 200 }} />
      </AuthBackdrop>
    );
  }

  if (!ok) {
    return (
      <AuthBackdrop>
        <LoginForm redirectTo={redirectTo} />
      </AuthBackdrop>
    );
  }

  return <>{children}</>;
}
