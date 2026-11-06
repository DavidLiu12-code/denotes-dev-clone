import type { Metadata } from "next";
import { AuthBackdrop } from "@/components/AuthBackdrop";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <AuthBackdrop>
      <LoginForm />
    </AuthBackdrop>
  );
}
