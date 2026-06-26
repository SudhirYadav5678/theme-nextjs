import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getThemes, saveThemes, slugify } from "../../../lib/themeStore";

export const runtime = "nodejs";

async function saveUpload(file, folder, fallbackName) {
  if (!file || typeof file === "string" || file.size === 0) return "";

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name || "") || path.extname(fallbackName);
  const safeName = `${Date.now()}-${slugify(path.basename(file.name || fallbackName, ext))}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", folder);
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, safeName), bytes);
  return `/${folder}/${safeName}`;
}

export async function GET() {
  return NextResponse.json(await getThemes());
}

export async function POST(request) {
  const form = await request.formData();
  const title = String(form.get("title") || "").trim();
  const price = Number(form.get("price") || 0);

  if (!title) {
    return NextResponse.json({ error: "Theme title is required." }, { status: 400 });
  }

  const themes = await getThemes();
  const id = `${slugify(title)}-${Date.now()}`;
  const previewImage =
    (await saveUpload(form.get("previewImage"), "uploads/previews", "theme-preview.png")) ||
    "/theme-previews/theme-products.png";
  const fileUrl = await saveUpload(form.get("themeFile"), "uploads/themes", "theme.zip");

  const theme = {
    id,
    title,
    category: String(form.get("category") || "Shopify").trim(),
    price,
    badge: String(form.get("badge") || "New").trim(),
    previewImage,
    demoUrl: String(form.get("demoUrl") || "#").trim(),
    fileUrl,
    version: String(form.get("version") || "1.0").trim(),
    description: String(form.get("description") || "").trim(),
  };

  await saveThemes([theme, ...themes]);
  return NextResponse.json(theme, { status: 201 });
}
