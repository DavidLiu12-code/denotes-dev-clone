"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useCopy } from "@/lib/clipboard";
import { WECHAT_ID } from "@/lib/data";
import ui from "@/styles/ui.module.css";

export function WechatCopy() {
  const { status, copy } = useCopy();
  return (
    <button
      type="button"
      className={ui.wechat}
      aria-label={`复制微信号 ${WECHAT_ID}`}
      onClick={() => copy(WECHAT_ID)}
    >
      <span>{status === "copied" ? "已复制" : WECHAT_ID}</span>
      {status === "copied" ? (
        <Check size={16} className={ui.wechatCopied} aria-hidden="true" />
      ) : (
        <Copy size={16} className={ui.wechatIcon} aria-hidden="true" />
      )}
      <span className="visually-hidden" role="status">
        {status === "copied" ? "已复制" : status === "failed" ? "复制失败，请手动输入" : ""}
      </span>
    </button>
  );
}
