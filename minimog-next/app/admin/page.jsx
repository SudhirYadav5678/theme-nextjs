"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ImagePlus, Loader2, Trash2, UploadCloud } from "lucide-react";

export default function AdminPage() {
  const [themes, setThemes] = useState([]);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  const loadThemes = () => {
    fetch("/api/themes")
      .then((response) => response.json())
      .then(setThemes)
      .catch(() => setThemes([]));
  };

  useEffect(loadThemes, []);

  async function submitTheme(event) {
    event.preventDefault();
    setSaving(true);
    setStatus("");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/themes", { method: "POST", body: form });
    const result = await response.json();

    setSaving(false);
    if (!response.ok) {
      setStatus(result.error || "Could not save theme.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Theme added to frontend catalog.");
    loadThemes();
  }

  async function deleteTheme(id) {
    await fetch(`/api/themes/${id}`, { method: "DELETE" });
    loadThemes();
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <a href="/"><ArrowLeft size={18} /> Back to store</a>
        <div>
          <span>Backend</span>
          <h1>Add theme files</h1>
          <p>Upload preview images and theme ZIP files. New listings are stored locally and shown on the frontend catalog.</p>
        </div>
      </header>

      <section className="admin-layout">
        <form className="theme-form" onSubmit={submitTheme}>
          <div className="form-grid">
            <label>Theme title<input name="title" required placeholder="Minimal Shopify Theme" /></label>
            <label>Category<input name="category" defaultValue="Shopify" /></label>
            <label>Price<input name="price" type="number" min="0" defaultValue="49" /></label>
            <label>Version<input name="version" defaultValue="1.0" /></label>
            <label>Badge<input name="badge" defaultValue="New" /></label>
            <label>Demo URL<input name="demoUrl" placeholder="https://demo.example.com" /></label>
          </div>
          <label>Description<textarea name="description" rows="4" placeholder="Describe what makes this theme useful for buyers." /></label>
          <div className="upload-grid">
            <label><ImagePlus size={22} /> Preview image<input name="previewImage" type="file" accept="image/*" /></label>
            <label><UploadCloud size={22} /> Theme file<input name="themeFile" type="file" accept=".zip,.rar,.7z,.tar,.gz" /></label>
          </div>
          <button disabled={saving}>{saving ? <Loader2 className="spin" size={18} /> : <UploadCloud size={18} />} Save theme</button>
          {status && <p className="form-status">{status}</p>}
        </form>

        <aside className="admin-list">
          <h2>Current frontend themes</h2>
          <div>
            {themes.map((theme) => (
              <article key={theme.id}>
                <img src={theme.previewImage} alt="" />
                <div>
                  <h3>{theme.title}</h3>
                  <p>{theme.category} · ${theme.price}</p>
                  {theme.fileUrl ? <span>File uploaded</span> : <span>No file yet</span>}
                </div>
                <button aria-label={`Delete ${theme.title}`} onClick={() => deleteTheme(theme.id)}><Trash2 size={17} /></button>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
