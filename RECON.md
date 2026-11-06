# denotes.dev 侦察报告

目标站：https://denotes.dev/  
侦察时间：2026-11-06 Asia/Shanghai

## 技术栈（有证据）

| 项 | 结论 | 证据 |
|---|---|---|
| 框架 | **Next.js App Router + Turbopack** | HTML 含 `/_next/static/chunks/`、`turbopack-*.js`；RSC flight payload（`RSC: 1`） |
| UI | **React** | RSC / React 运行时 chunk |
| 样式 | **CSS Modules**（自定义 hashed class，如 `FBiGaq_`、`Hi2WXW_`、`cni4Dq_`、`GcMOtW_`） | 标记中无 Tailwind utility class；样式在 `*_*.css` chunk |
| 字体 | **next/font**：Inter、Inter Full、Noto Sans SC、Caveat、JetBrains Mono；中文回退 PingFang SC | `@font-face` + CSS 变量 `--font-inter` / `--font-noto` / `--font-caveat` / `--font-jetbrains` |
| 图标 | **Phosphor** | SVG `viewBox="0 0 256 256"` 与 Phosphor path 数据 |
| 图片 | **next/image** + `/public/images/*` | `/_next/image?url=%2Fimages%2F...` |
| 动效 | **纯 CSS** transition/keyframes + 少量 IntersectionObserver | `--duration-fast:.15s`、`--ease-out:cubic-bezier(.22,1,.36,1)`；`@keyframes FBiGaq_quotesScroll`、`ytKetW_menuIn`、`ytKetW_dialogIn`；`prefers-reduced-motion` |
| Hero 互动 | **独立静态 HTML（Canvas/WebGL）** | `/hero/design-engineer-notes-interactive.html`（约 598KB，内嵌 Geist + webp） |

## 明确未使用（扫描 JS/CSS/HTML 无匹配）

- Framer Motion / `motion/react` / Motion One
- GSAP / ScrollTrigger
- shadcn/ui / Radix / CVA / tailwind-merge
- Aceternity UI / Magic UI
- Rive（先前命中为 `getDerivedStateFrom*` 假阳性）
- Lenis / Locomotive / anime.js

→ 复刻时**不安装**上述库；动效用同一套 CSS token 实现。

## 设计 token（摘自原站 CSS）

- 页底色 `#fdfcfc`，主色 `#5b6f00`，accent `#b2c248`，muted `#777169`
- 圆角：card `24px`，window `16px`，pill `999px`
- 内容宽 `1120px`，栏宽 `1176px`，gutter 桌面 `40px` / 平板 `24px` / 手机 `16px`
- 模块间距 `--space-module` 96 / 72 / 56

## 页面与路由清单

### 可公开完整打开（未登录）

| 路由 | 标题 | 说明 |
|---|---|---|
| `/` | Denotes | 营销首页；锚点 `#why` `#audience` `#skill` `#catalog` `#pricing` |
| `/login` | Login · Denotes | 邮箱 +「发送验证码」OTP 登录 |
| `/admin` | Admin · Denotes | 管理密码进入「买家名单」（前端有表单；后端不可复刻） |
| `/hero/design-engineer-notes-interactive.html` | Design Engineer Notes | Hero 内嵌互动页（静态资源） |
| `/og.jpg` `/icon.svg` `/images/*` | — | 静态资源 |
| `/sitemap.xml` | — | 仅收录 `/` |
| `/robots.txt` | — | 见下方 Disallow |

### 存在但未登录会落到登录页

| 路由 | 未登录表现 |
|---|---|
| `/learn` | 200 → Login · Denotes |
| `/welcome` | 200 → Login · Denotes |
| `/skill` | 200 → Login · Denotes |
| `/group` | 200 → Login · Denotes |
| `/references` | 200 → Login · Denotes |

### robots Disallow 且探活为 404

| 路由 | 状态 |
|---|---|
| `/dev` `/dev/` | 404 |

### 站内锚点（首页）

- `#why` 为什么 AI 做的界面总差一点
- `#audience` 适合谁
- `#skill` 审美 Skill
- `#catalog` 课程目录
- `#pricing` 早鸟价

### 外链（保留原 URL）

- https://dribbble.com/neocurve
- https://x.com/ianneo_ai
- https://github.com/helloianneo
- https://ianneo.xyz/ 、/portfolio/ 、/ib/
- https://www.xiaohongshu.com/user/profile/5a12a7d54eacab58938f95d2

## 复刻范围说明

- **会完整视觉复刻**：`/`、`/login`、`/admin`（UI）、登录门禁壳（`/learn` 等未登录态）、静态 hero HTML、资源与响应式。
- **无法 1:1 还原后端**：真实发信 OTP、买家名单持久化、付费/微信加人流程、登录后课程内容（未授权不可见）。本地用 mock（本地存储验证码/买家名单）近似交互。
