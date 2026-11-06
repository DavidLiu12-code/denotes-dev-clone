import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Check,
  File,
  Folder,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import { Flame } from "@phosphor-icons/react/dist/ssr";
import {
  BrandLogo,
  DribbbleIcon,
  GitHubIcon,
  OpenCircle,
  StrokeCheck,
  WindowDots,
  Wordmark,
  XIcon,
} from "@/components/BrandMark";
import { Catalog } from "@/components/Catalog";
import { FloatingNav } from "@/components/FloatingNav";
import { JoinButton } from "@/components/JoinButton";
import { WechatCopy } from "@/components/WechatCopy";
import { ButtonLink, CenteredHeader, SectionHeader } from "@/components/ui";
import {
  FOOTER_ABOUT,
  JUDGMENT,
  NAV_LINKS,
  PRACTICE,
  QUOTES,
} from "@/lib/data";
import about from "@/styles/about.module.css";
import audience from "@/styles/audience.module.css";
import footer from "@/styles/footer.module.css";
import hero from "@/styles/hero.module.css";
import layout from "@/styles/layout.module.css";
import pricing from "@/styles/pricing.module.css";
import skillsec from "@/styles/skillsec.module.css";
import ui from "@/styles/ui.module.css";
import why from "@/styles/why.module.css";

function ModuleLine() {
  return (
    <div className={layout.line} aria-hidden="true">
      <span className={layout.nodes} />
    </div>
  );
}

function Quotes() {
  const items = (
    <>
      {QUOTES.map((quote) => (
        <figure key={quote.name} className={hero.quote}>
          <blockquote>{quote.text}</blockquote>
          <figcaption>
            <span className={hero.avatar} aria-hidden="true">
              {quote.name.slice(0, 1)}
            </span>
            {quote.name}
          </figcaption>
        </figure>
      ))}
    </>
  );
  return (
    <div className={hero.quotes} role="group" aria-label="读者反馈">
      <div className={hero.quotesTrack}>
        {items}
        <div className={hero.quotesCopy} aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className={`${layout.page} ${layout.home}`}>
      <div className={layout.rails} aria-hidden="true" />
      <main>
        <div className={hero.hero}>
          <FloatingNav>
            <Link href="/" className={ui.brand} aria-label="Design Engineer Notes">
              <BrandLogo />
            </Link>
            <nav className={hero.links} aria-label="主导航">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className={hero.navRight}>
              <Link className={hero.login} href="/login">
                登录
              </Link>
              <ButtonLink href="#pricing" variant="primary" size="small">
                <span>¥99 早鸟加入</span>
              </ButtonLink>
            </div>
          </FloatingNav>

          <div className={`container ${hero.top}`}>
            <div className={hero.intro}>
              <span className={hero.announce}>
                <Flame size={16} aria-hidden="true" />
                新课早鸟 · 越早越划算
              </span>
              <h1 className={`t-hero t-mixed ${hero.title}`}>
                用 AI 做出
                <span className={hero.scribble} aria-hidden="true">
                  unslop
                </span>
                <br />
                不廉价的界面
              </h1>
              <p className={`t-desc ${hero.description}`}>
                现在 AI 做的页面越来越像了。你觉得哪里不对劲，又说不出是哪里，
                <br />
                只能让它一遍遍再来一版
              </p>
              <div className={hero.actions}>
                <ButtonLink href="#pricing" variant="primary">
                  <span>¥99 早鸟加入</span>
                </ButtonLink>
                <ButtonLink href="#catalog" variant="ghost">
                  <span>看课程目录</span>
                </ButtonLink>
              </div>
            </div>
            <Quotes />
          </div>
          <div className={`container ${hero.visual}`}>
            <iframe
              className={hero.frame}
              src="/hero/design-engineer-notes-interactive.html"
              title="Design Engineer Notes：实战场景、审美判断、审美 Skill 和设计参考库"
            />
          </div>
        </div>

        <div className={hero.proof}>
          <ul className={`container ${hero.list}`}>
            <li>
              <a
                href="https://dribbble.com/neocurve"
                target="_blank"
                rel="noreferrer"
                className={hero.link}
              >
                <DribbbleIcon />
                Dribbble 万粉
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ianneo_ai"
                target="_blank"
                rel="noreferrer"
                className={hero.link}
              >
                <XIcon />
                推特万粉
              </a>
            </li>
            <li>
              <a
                href="https://github.com/helloianneo"
                target="_blank"
                rel="noreferrer"
                className={hero.link}
              >
                <GitHubIcon />
                GitHub 万星
              </a>
            </li>
          </ul>
        </div>

        <WhySection />
        <AudienceSection />
        <SkillSection />

        <section id="catalog" className={`${layout.module} ${layout.flushBottom}`}>
          <ModuleLine />
          <div className={`container ${layout.stack}`}>
            <CenteredHeader
              badge="课程目录"
              title="20+ 实战场景，15+ 审美判断"
              description="实战场景每节从一个你会卡住的地方做起，审美判断每节只讲透一条"
            />
            <Catalog practice={PRACTICE} judgment={JUDGMENT} />
          </div>
        </section>

        <PricingSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function WhySection() {
  return (
    <section id="why" className={layout.module}>
      <ModuleLine />
      <div className={`container ${layout.stack}`}>
        <SectionHeader
          badge="AI 味"
          title={
            <>
              为什么<span className="latin-run"> AI </span>做的界面
              <br />
              总差一点
            </>
          }
          titleClassName="t-mixed"
          lowered
          action={
            <ButtonLink href="#skill" variant="ghost" arrow="down">
              <span>看课里有什么</span>
            </ButtonLink>
          }
          description={
            <>
              现在让 AI 做一个页面，一句话就够了，
              <br />
              可做出来的东西大多长一个样
            </>
          }
        />
        <div className={why.groups}>
          <div className={why.bigCards}>
            <figure className={why.col}>
              <div className={why.media}>
                <Image
                  src="/images/sky.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 552px"
                  className={why.mediaImage}
                />
                <div className={`${why.window} ${why.windowWide}`}>
                  <WindowDots />
                  <div className={why.fakeTabs} aria-hidden="true">
                    <span className={why.fakeTabActive}>产品首页</span>
                    <span>App 官网</span>
                    <span>课程落地页</span>
                  </div>
                  <p className={why.windowTitle}>帮我做一个产品首页</p>
                  <ul className={why.checks}>
                    <li>
                      <StrokeCheck className={why.check} />
                      一个大标题
                    </li>
                    <li>
                      <StrokeCheck className={why.check} />
                      一排功能卡片
                    </li>
                    <li>
                      <StrokeCheck className={why.check} />
                      一个按钮
                    </li>
                  </ul>
                </div>
                <span className={`${why.tag} ${why.tagWhite}`}>
                  <i aria-hidden="true" />
                  换一句话，还是这三样
                </span>
              </div>
              <figcaption className={why.caption}>
                <span className="t-aux">AI 味就这么来的</span>
                <span>单看哪儿都不丑，就是哪儿都差一点</span>
              </figcaption>
            </figure>
            <figure className={why.col}>
              <div className={why.media}>
                <Image
                  src="/images/bg109.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 552px"
                  className={why.mediaImage}
                />
                <div className={`${why.window} ${why.windowNarrow}`}>
                  <WindowDots />
                  <p className={`${why.windowTitle} ${why.windowTitleFirst}`}>
                    AI 做完了，还剩三件事
                  </p>
                  <ul className={why.questions}>
                    <li>
                      <OpenCircle className={why.open} />
                      哪样该放最前面？
                    </li>
                    <li>
                      <OpenCircle className={why.open} />
                      哪些干脆不要？
                    </li>
                    <li>
                      <OpenCircle className={why.open} />
                      两版里哪版更好？
                    </li>
                  </ul>
                </div>
                <span className={`${why.tag} ${why.tagGreen}`}>
                  这几件你来定，剩下交给 AI
                </span>
              </div>
              <figcaption className={why.caption}>
                <span className="t-aux">差的就是这几个判断</span>
                <span>你不拿主意，它就照最常见的做，所以谁做出来都差不多</span>
              </figcaption>
            </figure>
          </div>
          <ul className={why.problems} aria-label="界面常见的四个问题">
            <li className={why.problem}>
              <span className={why.problemIcon} aria-hidden="true">
                <SquaresFour size={24} />
              </span>
              <div className={why.problemCopy}>
                <h3>没有重点</h3>
                <p>每块都在抢眼，看的人不知道该先看哪里</p>
              </div>
            </li>
            <li className={why.problem}>
              <span className={why.problemIcon} aria-hidden="true">
                <File size={24} />
              </span>
              <div className={why.problemCopy}>
                <h3>内容太空</h3>
                <p>看了一堆介绍，还是不知道这个产品能做什么</p>
              </div>
            </li>
            <li className={why.problem}>
              <span className={why.problemIcon} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M71.59,61.47a8,8,0,0,0-15.18,0l-40,120A8,8,0,0,0,24,192h80a8,8,0,0,0,7.59-10.53ZM35.1,176,64,89.3,92.9,176ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm-88,0a36,36,0,1,1,36,36A36,36,0,0,1,120,76Zm104,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Zm-8,56H144V160h72Z" />
                </svg>
              </span>
              <div className={why.problemCopy}>
                <h3>装饰太满</h3>
                <p>渐变和光晕加得太多，内容都被盖住了</p>
              </div>
            </li>
            <li className={why.problem}>
              <span className={why.problemIcon} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM240,96v64a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V96A16,16,0,0,1,72,80H224A16,16,0,0,1,240,96Zm-16,64V96H72v64H224Z" />
                </svg>
              </span>
              <div className={why.problemCopy}>
                <h3>细节不齐</h3>
                <p>间距和圆角各用一套，页面看着像拼起来的</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="audience" className={layout.module}>
      <ModuleLine />
      <div className={`container ${layout.stack}`}>
        <SectionHeader
          badge="适合谁"
          title="这门课写给这三种人"
          description={
            <>
              同样觉得 AI 做的界面不对劲，三种人卡住的地方不太一样，
              <br />
              你看看自己是哪种
            </>
          }
        />
        <div className={audience.group}>
          <ul className={audience.cards}>
            <li className={audience.card}>
              <h3 className={audience.persona}>正在用 AI 做产品</h3>
              <div className={audience.window}>
                <WindowDots className={audience.windowDots} />
                <h4 className={audience.windowTitle}>首页改版</h4>
                <ul className={audience.rows}>
                  <li>
                    <span>再高级一点</span>
                    <span className={audience.meta}>第 5 版</span>
                  </li>
                  <li>
                    <span>再来一版</span>
                    <span className={audience.meta}>第 6 版</span>
                  </li>
                  <li>
                    <span>换个配色试试</span>
                    <span className={audience.meta}>第 7 版</span>
                  </li>
                </ul>
              </div>
              <div className={audience.prompt}>
                <span>还是不对，差在哪？</span>
                <span className={audience.send} aria-hidden="true">
                  <ArrowUp size={14} weight="bold" />
                </span>
              </div>
            </li>
            <li className={audience.card}>
              <h3 className={audience.persona}>被 AI 冲击的设计师</h3>
              <div className={audience.window}>
                <WindowDots className={audience.windowDots} />
                <div className={audience.folder}>
                  <span className={audience.tile} aria-hidden="true">
                    <Folder size={18} weight="fill" />
                  </span>
                  <span className={audience.folderText}>
                    <span className={audience.folderTitle}>AI 出的方案</span>
                    <span className={audience.meta}>10 分钟，12 版</span>
                  </span>
                </div>
                <ul className={audience.rows}>
                  {["首页方案 A", "首页方案 B", "首页方案 C"].map((label) => (
                    <li key={label}>
                      <File size={18} className={audience.fileIcon} aria-hidden="true" />
                      <span>{label}</span>
                      <span className={audience.meta}>待选</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={audience.prompt}>
                <span>我的审美还值钱吗？</span>
                <span className={audience.send} aria-hidden="true">
                  <ArrowUp size={14} weight="bold" />
                </span>
              </div>
            </li>
            <li className={audience.card}>
              <h3 className={audience.persona}>想做 Design Engineer</h3>
              <div className={audience.window}>
                <WindowDots className={audience.windowDots} />
                <h4 className={audience.windowTitle}>首页走查</h4>
                <ul className={audience.rows}>
                  {["标题和正文拉开层级", "一屏只留一个主按钮", "卡片换成淡投影"].map(
                    (label) => (
                      <li key={label}>
                        <Check size={16} className={audience.checkIcon} aria-hidden="true" />
                        <span>{label}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className={audience.prompt}>
                <span>这版对了</span>
                <span className={`${audience.send} ${audience.complete}`} aria-hidden="true">
                  <StrokeCheck />
                </span>
              </div>
            </li>
          </ul>
          <div className={audience.notFor}>
            <span className={audience.notForChip}>不太适合</span>
            <p className="t-muted">
              只想要一堆复制就能用的提示词。那些几个月就过时，这里练的是自己看出好坏
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillSection() {
  return (
    <section id="skill" className={layout.module}>
      <ModuleLine />
      <div className={`container ${layout.stack}`}>
        <SectionHeader
          badge="审美 Skill"
          title="把审美判断装进 AI"
          titleClassName="t-mixed"
          description={
            <>
              判断学会了，还要让 AI 照着做，
              <br />
              再配上我平时找参考用的好网站、好作品和设计师
            </>
          }
        />
        <div className={skillsec.group}>
          <div className={skillsec.two}>
            <div className={`${skillsec.card} ${skillsec.misty}`}>
              <Image
                src="/images/bg094-card.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 552px"
                className={skillsec.image}
              />
              <span className={skillsec.darken} aria-hidden="true" />
              <div className={skillsec.stack}>
                <span className={skillsec.stackBack} aria-hidden="true" />
                <span className={skillsec.stackMiddle} aria-hidden="true" />
                <div className={skillsec.list}>
                  <div className={skillsec.listHead}>
                    <span className={skillsec.file}>
                      <File size={16} aria-hidden="true" />
                      SKILL.md
                    </span>
                    <span>15+ 条判断</span>
                  </div>
                  <ul>
                    <li>
                      <StrokeCheck className={skillsec.check} strokeWidth={1.2} />
                      界面看着廉价，先查内容
                    </li>
                    <li>
                      <StrokeCheck className={skillsec.check} strokeWidth={1.2} />
                      说不出哪里不对，是因为缺词
                    </li>
                    <li>
                      <StrokeCheck className={skillsec.check} strokeWidth={1.2} />
                      AI 做不对，先看你说清楚没
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${skillsec.caption} ${skillsec.captionLight}`}>
                <span className={skillsec.captionLabel}>审美 Skill</span>
                <span>把课里的判断写下来，AI 照着做就行</span>
              </div>
            </div>
            <div className={`${skillsec.card} ${skillsec.plain}`}>
              <div className={skillsec.composer}>
                <WindowDots />
                <p className={skillsec.composerText}>
                  照审美 Skill 的标准，看看这个页面哪里廉价，
                  <br />
                  再改一版
                </p>
                <div className={skillsec.composerFoot}>
                  <div className={skillsec.composerTags}>
                    <span>审美 Skill</span>
                    <span>设计参考库</span>
                  </div>
                  <span className={skillsec.composerSend}>发送</span>
                </div>
              </div>
              <span className={skillsec.installed}>
                <i aria-hidden="true" />
                已装上审美 Skill
              </span>
              <div className={skillsec.result}>
                <div className={skillsec.resultHead}>
                  <span className={skillsec.resultTitle}>
                    <i aria-hidden="true" />
                    找到 3 处廉价
                  </span>
                  <span className={skillsec.resultNote}>已改一版</span>
                </div>
                <ul>
                  <li>
                    <i aria-hidden="true" />
                    标题和正文字号太接近
                  </li>
                  <li>
                    <i aria-hidden="true" />
                    三张卡一样大，没有重点
                  </li>
                  <li>
                    <i aria-hidden="true" />
                    按钮太多，不知道先点哪个
                  </li>
                </ul>
              </div>
              <div className={skillsec.caption}>
                <span className={skillsec.captionLabel}>装上之后</span>
                <span>它照这套标准做界面、改界面，不用你每次从头讲一遍</span>
              </div>
            </div>
          </div>
          <ul className={skillsec.three}>
            <li className={skillsec.library}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#33312E" strokeLinecap="round" aria-hidden="true">
                <path d="M2 32H62" strokeDasharray="1 3" />
                <path d="M6 32C10 14 19.3 14 23.3 32C27.3 50 36.7 50 40.7 32C44.7 14 54 14 58 32" />
                <path d="M6 32C10 50 19.3 50 23.3 32C27.3 14 36.7 14 40.7 32C44.7 50 54 50 58 32" />
              </svg>
              <h3 className="t-card">好网站</h3>
              <p className="t-muted">我平时找参考常去的网站</p>
            </li>
            <li className={skillsec.library}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#33312E" strokeLinecap="round" aria-hidden="true">
                <path d="M2 32H62" strokeDasharray="1 3" />
                <circle cx="32" cy="32" r="27" strokeDasharray="1 3" />
                <circle cx="32" cy="32" r="17" />
                <circle cx="32" cy="32" r="8" />
              </svg>
              <h3 className="t-card">好作品</h3>
              <p className="t-muted">值得反复拆开看的界面</p>
            </li>
            <li className={skillsec.library}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M2 32H62" stroke="#33312E" strokeLinecap="round" strokeDasharray="1 3" />
                <path d="M8 54C8 40 18 32 32 32C46 32 56 24 56 10" stroke="#292929" />
                <circle cx="32" cy="32" r="5" stroke="#292929" />
              </svg>
              <h3 className="t-card">设计师</h3>
              <p className="t-muted">我一直关注的设计师</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className={pricing.section}>
      <ModuleLine />
      <div className={`container ${pricing.stack}`}>
        <CenteredHeader
          badge="早鸟价"
          title={
            <>
              <span className={pricing.titlePhrase}>一次买断，</span>
              <wbr />
              <span className={pricing.titlePhrase}>后续更新都能看</span>
            </>
          }
          description="现在 ¥99，课越写越多，之后加入的价格也会慢慢往上调"
        />
        <div className={pricing.card}>
          <div className={pricing.buy}>
            <div className={pricing.price}>
              <Image
                src="/images/bg132-price.jpg"
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, 520px"
                quality={90}
                className={pricing.priceImage}
              />
              <div className={pricing.priceTop}>
                <span className={pricing.priceName}>早鸟价</span>
                <span className={pricing.priceChip}>越早越划算</span>
              </div>
              <div className={pricing.priceRow}>
                <span className={pricing.priceValue}>¥99</span>
                <span>一次买断</span>
              </div>
            </div>
            <JoinButton />
          </div>
          <div className={pricing.terms}>
            <p className="t-aux">早鸟怎么算</p>
            <ul>
              {[
                "买一次，之后更新的课都能看",
                "边写边更新，写好一篇就放一篇",
                "进早鸟群，有新内容我第一个告诉你",
              ].map((item) => (
                <li key={item}>
                  <Check size={16} className={pricing.check} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={pricing.join}>
            <p className="t-aux">怎么加入</p>
            <ol className={pricing.steps}>
              <li>
                <span className={pricing.stepNo}>1</span>
                <span className={pricing.stepWechat}>
                  加我微信
                  <WechatCopy />
                  备注 早鸟
                </span>
              </li>
              <li>
                <span className={pricing.stepNo}>2</span>
                支付早鸟价 ¥99
              </li>
              <li>
                <span className={pricing.stepNo}>3</span>
                我拉你进早鸟群
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={about.section}>
      <ModuleLine />
      <div className={`container ${about.card}`}>
        <Image
          src="/images/bg137-about.jpg"
          alt=""
          fill
          sizes="(max-width: 1200px) 100vw, 1120px"
          className={about.image}
        />
        <div className={about.window}>
          <WindowDots className={about.dots} />
          <h2 className="t-module">我是伊恩，一名产品设计师</h2>
          <p className="t-desc">做过 GitHub 万星的小黑插图 Skill，平时在推特聊设计和 AI</p>
          <ButtonLink
            href="https://ianneo.xyz/"
            variant="primary"
            className={about.button}
            target="_blank"
            rel="noreferrer"
          >
            <span>看我的个站</span>
          </ButtonLink>
        </div>
        <span className={about.signature} aria-hidden="true">
          Ian
        </span>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className={footer.footer}>
      <ModuleLine />
      <div className={`container ${footer.top}`}>
        <div className={footer.brand}>
          <span className={footer.brandName}>Design Engineer Notes</span>
          <span className={footer.copy}>© 2026 伊恩</span>
        </div>
        <div className={footer.columns}>
          <nav aria-label="课程">
            <span className={footer.heading}>课程</span>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <nav aria-label="关于我">
            <span className={footer.heading}>关于我</span>
            {FOOTER_ABOUT.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
          <nav aria-label="联系">
            <span className={footer.heading}>联系</span>
            <a href="https://x.com/ianneo_ai" target="_blank" rel="noreferrer">
              推特 @ianneo_ai
            </a>
            <span>微信 ianneoxyz</span>
            <a
              href="https://www.xiaohongshu.com/user/profile/5a12a7d54eacab58938f95d2"
              target="_blank"
              rel="noreferrer"
            >
              小红书
            </a>
          </nav>
        </div>
      </div>
      <div className={footer.wordmark}>
        <Wordmark />
        <p className={footer.tagline}>用 AI 做出不廉价的界面</p>
      </div>
    </footer>
  );
}
