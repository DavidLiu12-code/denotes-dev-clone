"use client";

import { ArrowUpRight, Check } from "@phosphor-icons/react";
import { useCopy } from "@/lib/clipboard";
import { JOIN_COUNT_LABEL, WECHAT_ID, WECHAT_NOTE } from "@/lib/data";
import ui from "@/styles/ui.module.css";

export function JoinButton() {
  const { status, copy } = useCopy();
  const label =
    status === "copied"
      ? `微信号已复制，备注 ${WECHAT_NOTE}`
      : status === "failed"
        ? `加微信 ${WECHAT_ID}，备注 ${WECHAT_NOTE}`
        : null;

  return (
    <button
      type="button"
      className={`${ui.button} ${ui.black} ${ui.full}`}
      onClick={() => copy(WECHAT_ID)}
    >
      <span aria-live="polite">
        {label ?? (
          <>
            ¥99 早鸟加入
            <span className={ui.joinCount}>{JOIN_COUNT_LABEL}</span>
          </>
        )}
      </span>
      {status === "copied" ? (
        <Check size={16} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={16} className={ui.arrow} aria-hidden="true" />
      )}
    </button>
  );
}
