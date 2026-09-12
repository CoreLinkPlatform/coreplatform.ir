const products = [
  {
    name: "CoreLink",
    label: "CONNECT",
    href: "https://link.coreplatform.ir",
    desc: "لایه اتصال برای دستگاه‌ها، سرویس‌ها، پروتکل‌ها و سیستم‌های ناهمگون؛ با یک مدل مشترک و API پایدار.",
    bullets: ["Device & service connectivity", "Normalized contracts", "Commands, events & integrations"],
  },
  {
    name: "Core Signal",
    label: "UNDERSTAND",
    href: "https://signal.coreplatform.ir",
    desc: "لایه تبدیل telemetry و eventهای خام به signalهای قابل فهم برای عملیات، تصمیم‌گیری و اتوماسیون.",
    bullets: ["Ingest & observe", "Detect meaningful change", "Route insight into action"],
  },
];

const ecosystem = ["API Contracts", "TypeScript SDK", "Python SDK", "Java SDK", "CLI", "MCP", "Webhooks", "Examples"];

export default function Home() {
  return (
    <main>
      <header className="topbar shell">
        <a className="brand" href="#top" aria-label="Core Platform home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><b>CORE</b> PLATFORM</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#platform">پلتفرم</a>
          <a href="#products">محصولات</a>
          <a href="#developers">توسعه‌دهندگان</a>
          <a href="https://docs.coreplatform.ir">Docs</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> CORE PLATFORM / SYSTEM LAYER</p>
          <h1>
            سیستم‌ها را متصل کنید.<br />
            <em>آنچه مهم است را بفهمید.</em>
          </h1>
          <p className="lede">
            Core Platform خانواده‌ای از ابزارها و زیرساخت‌ها برای ساخت سیستم‌های متصل، قابل مشاهده و قابل اتوماسیون است؛
            از اتصال و نرمال‌سازی داده با CoreLink تا استخراج signalهای معنادار با Core Signal.
          </p>
          <div className="actions">
            <a className="button primary" href="#products">مشاهده محصولات <span>↙</span></a>
            <a className="button ghost" href="https://docs.coreplatform.ir">Developer docs</a>
          </div>
        </div>

        <div className="system-visual" aria-label="Connect, observe, signal, decide and act flow">
          <div className="radar" />
          <div className="node n1">DEVICE</div>
          <div className="node n2">SERVICE</div>
          <div className="node n3">DATA</div>
          <div className="core-node"><small>CORE</small><b>PLATFORM</b></div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="signal-line"><i /><i /><i /><i /><i /></div>
          <div className="output">ACTION</div>
        </div>
      </section>

      <section className="flow-section" id="platform">
        <div className="shell">
          <div className="section-head">
            <p>01 / PLATFORM MODEL</p>
            <h2>یک مسیر مشترک از دنیای خام تا اقدام.</h2>
          </div>
          <div className="flow">
            {[
              ["01", "Connect", "دستگاه، سرویس و منبع داده"],
              ["02", "Observe", "رویداد، وضعیت و telemetry"],
              ["03", "Signal", "تشخیص تغییر معنادار"],
              ["04", "Decide", "قانون، context و تصمیم"],
              ["05", "Act", "فرمان، workflow و automation"],
            ].map(([n, title, text]) => (
              <article key={title}><small>{n}</small><b>{title}</b><span>{text}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-head split">
          <div><p>02 / PRODUCT FAMILY</p><h2>دو محصول، یک زبان مشترک.</h2></div>
          <p>هر محصول هویت و مسئله خودش را دارد؛ قرارداد طراحی، ناوبری و تجربه توسعه‌دهنده بین همه اعضای خانواده مشترک می‌ماند.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <a className={`product-card product-${index + 1}`} href={product.href} key={product.name}>
              <div className="product-top"><span>{product.label}</span><i>0{index + 1}</i></div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <ul>{product.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              <strong>Explore {product.name} ↗</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="architecture">
        <div className="shell architecture-grid">
          <div>
            <p className="mini-label">03 / SHARED ARCHITECTURE</p>
            <h2>محصول‌ها جدا دیده می‌شوند؛ زیرساخت باید یکپارچه بماند.</h2>
            <p className="muted">Core Platform قرار نیست یک monolith بازاریابی باشد. مرزهای محصول روشن می‌مانند و قراردادهای مشترک، SDKها، مستندات و اصول عملیاتی در سطح خانواده هماهنگ می‌شوند.</p>
          </div>
          <div className="stack">
            <span>Apps · Agents · Operations</span>
            <span className="accent-signal">Core Signal</span>
            <span className="core-layer">Core Platform contracts & developer layer</span>
            <span className="accent-link">CoreLink</span>
            <span>Devices · Services · Protocols · Data sources</span>
          </div>
        </div>
      </section>

      <section className="developers shell" id="developers">
        <div className="section-head"><p>04 / DEVELOPERS</p><h2>برای ساخته‌شدن، نه فقط معرفی‌شدن.</h2></div>
        <div className="dev-grid">
          <div className="terminal" dir="ltr">
            <div><i /> <i /> <i /></div>
            <code><span>$</span> npm install @coreplatform/sdk</code>
            <code><span>→</span> connect(source)</code>
            <code><span>→</span> observe(events)</code>
            <code><span>→</span> emit(signal)</code>
            <code className="ok">✓ ready for action</code>
          </div>
          <div className="ecosystem">
            {ecosystem.map((item) => <span key={item}>{item}</span>)}
            <a href="https://docs.coreplatform.ir">docs.coreplatform.ir ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark"><i /><i /><i /></span><span><b>CORE</b> PLATFORM</span></div>
        <p>Connect. Understand. Act.</p>
        <div><a href="https://link.coreplatform.ir">Link</a><a href="https://signal.coreplatform.ir">Signal</a><a href="https://docs.coreplatform.ir">Docs</a></div>
      </footer>
    </main>
  );
}
