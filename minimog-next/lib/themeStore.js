import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "data");
const dataFile = path.join(dataDir, "themes.json");

export const seedThemes = [
  {
    id: "minimog-shopify",
    title: "Minimog Shopify Theme",
    category: "Shopify",
    price: 59,
    badge: "Best seller",
    previewImage: "/theme-previews/theme-minimog-home.png",
    demoUrl: "#",
    fileUrl: "",
    version: "2.0",
    description: "High-converting fashion ecommerce homepage with modern sections, product grids, and mobile-first storefront patterns.",
  },
  {
    id: "marketplace-grid",
    title: "Marketplace Grid Pack",
    category: "Ecommerce",
    price: 39,
    badge: "New",
    previewImage: "/theme-previews/theme-products.png",
    demoUrl: "#",
    fileUrl: "",
    version: "1.3",
    description: "A clean catalog layout for selling digital products, theme bundles, demos, and curated UI kits.",
  },
  {
    id: "mobile-commerce",
    title: "Mobile Commerce Theme",
    category: "Mobile",
    price: 49,
    badge: "Responsive",
    previewImage: "/theme-previews/theme-mobile.png",
    demoUrl: "#",
    fileUrl: "",
    version: "1.1",
    description: "Responsive storefront theme with compact header, bottom navigation, hero campaign, and conversion overlays.",
  },
  {
    id: "lookbook-landing",
    title: "Lookbook Landing",
    category: "Landing",
    price: 35,
    badge: "Landing",
    previewImage: "/theme-previews/theme-lookbook.png",
    demoUrl: "#",
    fileUrl: "",
    version: "1.0",
    description: "Editorial landing page template for premium launches, collection stories, and brand campaign pages.",
  },
  {
    id: "section-builder",
    title: "Section Builder Theme",
    category: "Shopify",
    price: 69,
    badge: "Sections",
    previewImage: "/theme-previews/theme-categories.png",
    demoUrl: "#",
    fileUrl: "",
    version: "2.4",
    description: "A flexible section-based theme with category cards, landing sections, product showcases, and promo blocks.",
  },
  {
    id: "editorial-store",
    title: "Editorial Storefront",
    category: "Fashion",
    price: 45,
    badge: "Premium",
    previewImage: "/theme-previews/theme-editorial.png",
    demoUrl: "#",
    fileUrl: "",
    version: "1.6",
    description: "Story-led storefront theme with editorial blocks, press sections, social proof, and modular footer.",
  },
];

async function ensureDataFile() {
  await mkdir(dataDir, { recursive: true });
  try {
    await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, JSON.stringify(seedThemes, null, 2));
  }
}

export async function getThemes() {
  await ensureDataFile();
  const raw = await readFile(dataFile, "utf8");
  return JSON.parse(raw);
}

export async function saveThemes(themes) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(themes, null, 2));
}

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 72);
}
