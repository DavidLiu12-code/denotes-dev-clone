"use client";

import { ADMIN_KEY, BUYERS_KEY, OTP_KEY, SESSION_KEY } from "./data";

export type Session = { email: string; loggedInAt: string };
export type Buyer = { email: string; addedAt: string; note?: string };
export type OtpRecord = { email: string; code: string; createdAt: number };

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getSession(): Session | null {
  return readJson<Session | null>(SESSION_KEY, null);
}

export function setSession(email: string) {
  writeJson(SESSION_KEY, { email, loggedInAt: new Date().toISOString() });
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function isAdminAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_KEY) === "1";
}

export function setAdminAuthed(on: boolean) {
  if (on) localStorage.setItem(ADMIN_KEY, "1");
  else localStorage.removeItem(ADMIN_KEY);
}

export function getBuyers(): Buyer[] {
  return readJson<Buyer[]>(BUYERS_KEY, []);
}

export function addBuyer(email: string, note?: string): { ok: boolean; error?: string } {
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return { ok: false, error: "请输入有效邮箱" };
  }
  const buyers = getBuyers();
  if (buyers.some((b) => b.email === normalized)) {
    return { ok: false, error: "这个邮箱已经在名单里了" };
  }
  buyers.unshift({
    email: normalized,
    addedAt: new Date().toISOString(),
    note: note?.trim() || undefined,
  });
  writeJson(BUYERS_KEY, buyers);
  return { ok: true };
}

export function removeBuyer(email: string) {
  writeJson(
    BUYERS_KEY,
    getBuyers().filter((b) => b.email !== email),
  );
}

export function issueOtp(email: string): string {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  writeJson(OTP_KEY, {
    email: email.trim().toLowerCase(),
    code,
    createdAt: Date.now(),
  } satisfies OtpRecord);
  return code;
}

export function verifyOtp(email: string, code: string): boolean {
  const rec = readJson<OtpRecord | null>(OTP_KEY, null);
  if (!rec) return false;
  const age = Date.now() - rec.createdAt;
  if (age > 15 * 60 * 1000) return false;
  return (
    rec.email === email.trim().toLowerCase() && rec.code === code.trim()
  );
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
