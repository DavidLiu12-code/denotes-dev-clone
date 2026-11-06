# Denotes 复刻（私有）

- 原站：[https://denotes.dev/](https://denotes.dev/)
- 本仓库：按 `PROMPT.md` 中的提示词，侦察后用同一技术栈本地复刻的可运行 Next.js 项目
- 说明与差异：见 `DELIVERABLE.md`、`RECON.md`
- 对照截图：`reference-shots/`（原站）、`compare-shots/`（本地）、`compare-shots/side-by-side/`（左右拼图）

---

# Denotes clone

本地可运行的 [denotes.dev](https://denotes.dev/) 视觉复刻（Next.js App Router + CSS Modules）。

营销首页、登录、管理后台按原站公开页面还原。登录后的课室路由（`/learn` `/welcome` `/skill` `/group` `/references`）在原站有登录门禁且课程正文不可抓取，这里用同样的课室壳和占位说明代替。

## 运行

需要 Node.js 18+（开发时使用 20.19）。

```bash
cd denotes-clone
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

生产构建：

```bash
npm run build
npm start
```

## 本地模拟说明

- **登录**：任意有效邮箱 → 发送验证码。验证码显示在页面上（并打印到浏览器控制台），15 分钟内有效。验证成功后进入 `/learn`。
- **管理后台** `/admin`：密码来自 `.env.local` 的 `ADMIN_PASSWORD`，默认 `denotes-admin`。进入后可在 localStorage 里增删买家邮箱名单。
- **早鸟加入**：点击定价区按钮会复制微信号 `ianneoxyz`（与原站一致），三人步骤仅作展示，没有真实支付。

更完整的页面清单和与原站的差异见 [DELIVERABLE.md](./DELIVERABLE.md)。
