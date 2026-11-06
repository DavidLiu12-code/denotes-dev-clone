import type { Metadata } from "next";
import { AdminApp } from "@/components/AdminApp";
import { AuthBackdrop } from "@/components/AuthBackdrop";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <AuthBackdrop wide showBack={false}>
      <AdminApp />
    </AuthBackdrop>
  );
}
