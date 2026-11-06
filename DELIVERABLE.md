# Denotes clone 交付说明

复刻目标：https://denotes.dev/  
项目路径：`/workspace/denotes-clone`  
构建：`npm run build` 已于本地通过（Next.js 15.5.29）

## 运行方式

```bash
cd /workspace/denotes-clone
npm install
npm run dev
```

浏览器打开 http://localhost:3000 。

生产模式：

```bash
npm run build
npm start
```

Node 要求：18+（开发环境为 v20.19.2）。

### 本地模拟账号

| 能力 | 用法 |
|---|---|
| 学员登录 | 任意有效邮箱 →「发送验证码」。验证码显示在表单里（同时 `console.info`），15 分钟内有效。验证成功进入 `/learn`。 |
| 管理后台 | 打开 `/admin`，密码为 `.env.local` 的 `ADMIN_PASSWORD`，默认 `denotes-admin`。 |
| 买家名单 | 管理端增删的邮箱保存在 `localStorage` 键 `denotes:buyers`。克隆版**不强制**只有名单内邮箱才能登录，方便本地走完流程。 |
| 早鸟加入 | 定价区黑色按钮会复制微信号 `ianneoxyz`；成功显示「微信号已复制，备注 早鸟」，失败显示「加微信 ianneoxyz，备注 早鸟」。无真实支付。 |

## 页面清单

### 公开页（与原站未登录态对齐）

| 路由 | 标题 | 还原内容 |
|---|---|---|
| `/` | Denotes | 完整营销首页：滚动变实心顶栏、Hero（unslop scribble + 7 条引用无限滚动墙 + `/hero/design-engineer-notes-interactive.html` iframe）、社交证明、`#why` `#audience` `#skill` `#catalog` `#pricing`、关于伊恩、页脚外链与 DENOTES 字标 |
| `/login` | Login · Denotes | 纹理背景 + 字标 + 邮箱 / 验证码表单 |
| `/admin` | Admin · Denotes（noindex） | 同套纹理背景；密码门后可增删买家邮箱 |
| `/hero/design-engineer-notes-interactive.html` | 原站静态 Hero | 已保留下载的互动页 |
| `/og.jpg` `/icon.svg` `/images/*` | 静态资源 | 已保留 |
| `/sitemap.xml` | 仅收录 `/` | 与原站范围一致 |
| `/robots.txt` | 允许 `/`，禁止 `/dev` `/admin` | 近似原站 |
| 不存在的路由 | 这一页不存在 | 与原站 404 文案/布局一致 |

首页锚点：`#why` 为什么、`#audience` 适合谁、`#skill` 审美 Skill、`#catalog` 课程目录、`#pricing` 早鸟价。顶栏/Hero 的「¥99 早鸟加入」和「看课程目录」跳到对应锚点。

### 登录门禁页（原站未登录会渲染登录页）

| 路由 | 未登录 | 已登录 |
|---|---|---|
| `/learn` | 渲染与 `/login` 相同的登录门禁 | 课室壳 + 12 节实战标题占位卡片 |
| `/welcome` | 同上 | 课室壳 + 欢迎占位 |
| `/skill` | 同上 | 课室壳 + 12 条审美判断标题列表 |
| `/group` | 同上 | 课室壳 + 早鸟群/微信占位 |
| `/references` | 同上 | 课室壳 + 好网站 / 好作品 / 设计师分类占位 |

课室侧栏：欢迎、课程目录、审美 Skill、早鸟群、设计参考。右上角头像菜单可回首页或退出登录。

## 技术栈（与侦察结论一致）

- Next.js App Router + TypeScript + React 19
- CSS Modules + `app/globals.css` 中的原站 `:root` tokens（未使用 Tailwind 工具类去猜页面）
- `next/font`：Inter（`--font-inter` / `--font-inter-full`）、Noto Sans SC、Caveat、JetBrains Mono
- 图标：`@phosphor-icons/react`（以及原站内联的同 viewBox `0 0 256 256` 路径 / 社交定制 SVG）
- 动效：纯 CSS（`--duration-fast: .15s`，`--ease-out: cubic-bezier(.22, 1, .36, 1)`；引用墙 `36s linear infinite`，hover 暂停）
- **未安装** Framer Motion / GSAP / shadcn / Aceternity / Magic UI

样式来源：把 `RECON-components.css` 的 hashed class 转成可读 CSS Module 类名，规则本身保持原站数值。

## 与原站的差异 / 未能还原项

1. **后端与支付**  
   原站 OTP 会发信，买家名单在服务端校验，付费走微信。克隆版全部本地 mock：验证码当面显示、买家名单在 `localStorage`、加人三步只做 UI + 复制微信号。原因：没有原站后端授权。

2. **登录后课程正文**  
   `/learn` `/welcome` `/skill` `/group` `/references` 在原站是付费课室（侧栏、搜索、文档、演示、参考库名单等）。未登录只能看到登录页，正文无法抓取。克隆版用同一套视觉 token 做了课室壳和占位说明，**不是**原站已登录后的 1:1 内容。课室搜索框为占位，没有原站的命令面板。

3. **登录校验策略**  
   原站只有买家名单里的邮箱能登录。克隆版为方便预览，任意有效邮箱 + 正确验证码即可进入课室。管理端名单功能仍可用，但不拦截登录。

4. **管理端持久化**  
   原站买家名单在服务器；克隆版用 `localStorage`（`denotes:buyers`），清站点数据会丢失。管理会话存在 `localStorage` 键 `denotes:admin`。

5. **截图对拍结果（1280×800 桌面 / 390×844 移动）**  
   原站与本地复刻截图在 `reference-shots/` 与 `compare-shots/`，左右拼图在 `compare-shots/side-by-side/`。  
   像素差（meanΔ / 通道差>30 的像素占比）：登录 0.76 / 0.60%，管理 0.69 / 0.55%，页脚 1.81 / 1.27%，定价 2.82 / 2.02%，why～catalog 约 3–4%，Hero 8.17 / 7.30%（主要来自右侧引用墙滚动相位不同，属动效帧差而非布局错位）。移动 Hero 同理约 8.9%。已验证：锚点跳转、顶栏 `data-solid`、登录 OTP→`/learn`、未登录门禁、管理密码进入买家名单、外链保留。

6. **可能的细微视觉差**  
   - `next/font` 加载的 Inter / Noto 子集与原站 offline 字体包不完全同一份文件，中文在缺 PingFang SC 的系统上会更依赖 Noto Sans SC。  
   - 个别按钮箭头尺寸按组件默认（主按钮 20px，向下箭头 18px），与原站某一处的 16/18/20 可能差 2px。  
   - 引用墙头像原站没有填色，克隆版同样是描边圆 + 姓氏字。  
   - Hero 互动页是保存下来的原站静态 HTML，不依赖本仓库的 React 运行时。

7. **不存在的路由**  
   `/dev` 在原站为 404，这里同样走通用 404，没有单独实现。

侦察原文、tokens 与原始 CSS 仍留在仓库根目录的 `RECON*` 文件中，便于对照。
