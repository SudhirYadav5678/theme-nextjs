import { NextResponse } from "next/server";
import { getThemes, saveThemes } from "../../../../lib/themeStore";

export const runtime = "nodejs";

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const themes = await getThemes();
  const nextThemes = themes.filter((theme) => theme.id !== id);

  if (themes.length === nextThemes.length) {
    return NextResponse.json({ error: "Theme not found." }, { status: 404 });
  }

  await saveThemes(nextThemes);
  return NextResponse.json({ ok: true });
}
