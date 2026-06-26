"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Filter,
  Menu,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Upload,
  X,
  Zap,
} from "lucide-react";

const stats = [
  ["85+", "ready-to-sell demos"],
  ["4.9/5", "buyer rating"],
  ["24h", "launch-ready setup"],
  ["0", "code edits required"],
];

const featureCards = [
  ["Organic commerce blocks", "Prebuilt sections for hero, catalog, bundles, testimonials, FAQs, pricing tables, and launch banners."],
  ["Theme-file delivery", "Upload ZIP theme packages from the backend and expose downloads instantly on the frontend."],
  ["Responsive by default", "Every catalog card, sales section, and admin form is built for mobile, tablet, and desktop."],
  ["Conversion focused", "Use badges, previews, sticky actions, trust rows, and demo links to help buyers choose faster."],
  ["Simple content backend", "Local JSON storage keeps setup easy while leaving a clean path to a database later."],
  ["Digital product ready", "Designed for Shopify themes, Next.js templates, landing pages, or UI kits."],
];

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value || 0);
}

export default function Page() {
  const [themes, setThemes] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetch("/api/themes")
      .then((response) => response.json())
      .then(setThemes)
      .catch(() => setThemes([]));
  }, []);

  const categories = useMemo(() => ["All", ...Array.from(new Set(themes.map((theme) => theme.category)))], [themes]);
  const filteredThemes = themes.filter((theme) => {
    const search = `${theme.title} ${theme.category} ${theme.description}`.toLowerCase();
    return (category === "All" || theme.category === category) && search.includes(query.toLowerCase());
  });
  const cartTotal = cart.reduce((sum, theme) => sum + Number(theme.price || 0), 0);

  const addTheme = (theme) => {
    setCart((items) => (items.some((item) => item.id === theme.id) ? items : [...items, theme]));
  };

  return (
    <main className="theme-site">
      <header className="market-header">
        <a className="market-logo" href="#">
          <span>Theme</span>Forge
        </a>
        <nav className={mobileMenu ? "open" : ""}>
          <a href="#themes">Themes</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="/admin">Backend</a>
        </nav>
        <div className="header-actions">
          <a className="admin-link" href="/admin"><Upload size={17} /> Add Theme</a>
          <button className="cart-pill" aria-label="Cart">
            <ShoppingCart size={18} />
            <span>{cart.length}</span>
          </button>
          <button className="menu-button" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="market-hero">
        <div className="hero-glow left" />
        <div className="hero-glow right" />
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Theme marketplace builder</span>
          <h1>The Next Generation Shopify theme store</h1>
          <p>Sell digital themes, upload theme files from the backend, and show polished previews on a responsive storefront inspired by the reference layout.</p>
          <div className="hero-buttons">
            <a href="#themes">Explore Themes <ArrowRight size={18} /></a>
            <a href="/admin" className="secondary">Open Backend</a>
          </div>
          <div className="rating-row">
            <span><Star size={16} fill="currentColor" /> 4.9 rating</span>
            <span><ShieldCheck size={16} /> Secure digital files</span>
            <span><Zap size={16} /> Fast launch</span>
          </div>
        </div>
        <ThemeWall themes={themes} />
      </section>

      <section className="stats-band">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="catalog-section" id="themes">
        <div className="section-title">
          <span>Ready for your buyers</span>
          <h2>85+ themes and templates can live here</h2>
          <p>Use the backend to add ZIP files, preview images, prices, categories, versions, and descriptions. They appear in this catalog immediately.</p>
        </div>

        <div className="catalog-tools">
          <label>
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search themes" />
          </label>
          <div className="filter-row">
            <Filter size={18} />
            {categories.map((item) => (
              <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="theme-grid">
          {filteredThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} onAdd={() => addTheme(theme)} />
          ))}
        </div>
      </section>

      <section className="orange-callout">
        <div>
          <span>Lifetime offer</span>
          <h2>Plug demo, live preview, and download into one theme marketplace.</h2>
        </div>
        <a href="/admin">Add your first theme <ArrowRight size={18} /></a>
      </section>

      <section className="features-section" id="features">
        <div className="section-title">
          <span>Designed to sell digital products</span>
          <h2>Organic commerce blocks without Shopify product clutter</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map(([title, body]) => (
            <article key={title}>
              <Code2 size={25} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="comparison-section" id="pricing">
        <div className="section-title">
          <span>One store, many licenses</span>
          <h2>Sell single themes or bundle plans</h2>
        </div>
        <div className="pricing-grid">
          {[
            ["Starter", "$29", "For one downloadable theme"],
            ["Pro Bundle", "$89", "For 5 premium theme files"],
            ["Agency", "$199", "For unlimited client projects"],
          ].map(([name, price, body]) => (
            <article key={name}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{body}</p>
              <ul>
                <li><Check size={17} /> Theme ZIP downloads</li>
                <li><Check size={17} /> Responsive preview gallery</li>
                <li><Check size={17} /> Demo and support links</li>
              </ul>
              <button>Choose plan</button>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="section-title">
          <span>Why a theme marketplace?</span>
          <h2>Buyers want previews, trust, and instant files</h2>
        </div>
        <div className="why-grid">
          {[
            ["Upload once", "Add theme ZIPs and preview images from the backend."],
            ["Show everywhere", "Cards adapt from wide desktop grids to tight mobile rows."],
            ["Sell clearly", "Pricing, badges, categories, and demo links stay visible."],
            ["Scale later", "Swap the file-backed store for Supabase, Neon, or Shopify checkout when ready."],
          ].map(([title, body]) => (
            <article key={title}>
              <MonitorSmartphone size={23} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cart-summary">
        <div>
          <span>Selected themes</span>
          <strong>{cart.length} item{cart.length === 1 ? "" : "s"} · {money(cartTotal)}</strong>
        </div>
        <button disabled={!cart.length}>Checkout demo</button>
      </section>

      <footer className="market-footer">
        <div>
          <a className="market-logo" href="#"><span>Theme</span>Forge</a>
          <p>A responsive Next.js website for selling theme files from your own backend.</p>
        </div>
        <div>
          <strong>Marketplace</strong>
          <a href="#themes">Themes</a>
          <a href="#features">Features</a>
          <a href="/admin">Backend</a>
        </div>
        <div>
          <strong>Support</strong>
          <a href="#">Documentation</a>
          <a href="#">Licensing</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}

function ThemeWall({ themes }) {
  const previews = themes.length ? themes.slice(0, 9) : [];
  return (
    <div className="theme-wall" aria-label="Theme preview collage">
      {previews.map((theme, index) => (
        <article key={theme.id} className={`wall-card card-${index + 1}`}>
          <img src={theme.previewImage} alt="" />
          <span>{theme.category}</span>
        </article>
      ))}
    </div>
  );
}

function ThemeCard({ theme, onAdd }) {
  return (
    <article className="theme-card">
      <div className="theme-preview">
        <img src={theme.previewImage} alt={`${theme.title} preview`} />
        <span>{theme.badge}</span>
      </div>
      <div className="theme-card-body">
        <div>
          <p>{theme.category} · v{theme.version}</p>
          <h3>{theme.title}</h3>
        </div>
        <strong>{money(theme.price)}</strong>
      </div>
      <p>{theme.description || "Premium responsive theme package ready for digital download."}</p>
      <div className="theme-actions">
        <button onClick={onAdd}>Add to cart</button>
        <a href={theme.demoUrl || "#"}><ExternalLink size={16} /> Demo</a>
        {theme.fileUrl && <a href={theme.fileUrl} download><Download size={16} /> File</a>}
      </div>
    </article>
  );
}
