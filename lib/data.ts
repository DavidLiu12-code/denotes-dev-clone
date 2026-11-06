export const SITE_NAME = "Denotes";
export const SITE_DESCRIPTION =
  "教你看出 AI 做的界面哪里廉价、说清为什么，再让 AI 改对";
export const SITE_URL = "https://denotes.dev";
export const WECHAT_ID = "ianneoxyz";
export const WECHAT_NOTE = "早鸟";
export const JOIN_COUNT_LABEL = "（100+ 人已加入）";

export const QUOTES = [
  { text: "终于有设计师下场了，好看这件事真的很重要", name: "阿瑞*" },
  { text: "这个思路挺清楚的，课程安排看着也合理", name: "一帆*" },
  { text: "这个课我喜欢，我写代码还行，但是怎么做好看真有点发愁", name: "小杰*" },
  {
    text: "来得太及时了，AI 做的界面确实都长得差不多，学学审美，感觉能少改好多遍",
    name: "王小*",
  },
  { text: "关注好久了，审美这块我就服他", name: "阿南*" },
  { text: "最早是被他的小黑圈粉的，后来发现这个人本身就挺有意思", name: "阿木*" },
  { text: "他的小黑太可爱了，还直接开源给大家用，真的大方", name: "小波*" },
] as const;

export type Lesson = { slug: string; no: string; title: string };

export const PRACTICE: Lesson[] = [
  { slug: "practice-01", no: "01", title: "让 AI 把界面改对" },
  { slug: "practice-02", no: "02", title: "让 AI 做出你喜欢的那个风格" },
  { slug: "practice-03", no: "03", title: "做一个有质感的落地页" },
  { slug: "practice-04", no: "04", title: "从零做一个产品界面" },
  { slug: "practice-05", no: "05", title: "补齐空白、报错页和界面文案" },
  { slug: "practice-06", no: "06", title: "找到对的参考" },
  { slug: "practice-07", no: "07", title: "拆一个好网站" },
  { slug: "practice-08", no: "08", title: "让 AI 每次都做出同一套风格" },
  { slug: "practice-09", no: "09", title: "把自己的审美写成 Skill" },
  { slug: "practice-10", no: "10", title: "把一个点子做成上线的产品" },
  { slug: "practice-11", no: "11", title: "把排得平的页面重新排出层次" },
  { slug: "practice-12", no: "12", title: "交付前，把设计过一遍" },
];

export const JUDGMENT: Lesson[] = [
  { slug: "judgment-01", no: "01", title: "AI 越强，你的判断越值钱" },
  { slug: "judgment-02", no: "02", title: "好界面是从目标一步步推出来的" },
  { slug: "judgment-03", no: "03", title: "界面看着廉价，先查内容" },
  { slug: "judgment-04", no: "04", title: "高级感从哪来" },
  { slug: "judgment-05", no: "05", title: "说不出哪里不对，是因为缺词" },
  { slug: "judgment-06", no: "06", title: "靠眼睛判断的活，留给自己" },
  { slug: "judgment-07", no: "07", title: "好用的交互，都满足这四条" },
  { slug: "judgment-08", no: "08", title: "判断一个界面好不好，分三层看" },
  { slug: "judgment-09", no: "09", title: "AI 做不对，先看你说清楚没" },
  { slug: "judgment-10", no: "10", title: "先做能点的原型，让坏点子早点露馅" },
  { slug: "judgment-11", no: "11", title: "Skill：让 AI 记住你的标准" },
  { slug: "judgment-12", no: "12", title: "好体验都绕不开这四点" },
];

export const NAV_LINKS = [
  { href: "#why", label: "为什么" },
  { href: "#audience", label: "适合谁" },
  { href: "#skill", label: "审美 Skill" },
  { href: "#catalog", label: "课程目录" },
  { href: "#pricing", label: "早鸟价" },
] as const;

export const FOOTER_ABOUT = [
  { href: "https://ianneo.xyz/", label: "个站 ianneo.xyz" },
  { href: "https://ianneo.xyz/portfolio/", label: "作品集" },
  { href: "https://dribbble.com/neocurve", label: "Dribbble" },
  { href: "https://github.com/helloianneo", label: "GitHub" },
  { href: "https://ianneo.xyz/ib/", label: "Indie Builders" },
] as const;

export const SESSION_KEY = "denotes:session";
export const ADMIN_KEY = "denotes:admin";
export const BUYERS_KEY = "denotes:buyers";
export const OTP_KEY = "denotes:otp";
