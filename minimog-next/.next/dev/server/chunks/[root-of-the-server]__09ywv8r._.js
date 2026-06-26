module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/themeStore.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemes",
    ()=>getThemes,
    "saveThemes",
    ()=>saveThemes,
    "seedThemes",
    ()=>seedThemes,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const root = process.cwd();
const dataDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(root, "data");
const dataFile = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dataDir, "themes.json");
const seedThemes = [
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
        description: "High-converting fashion ecommerce homepage with modern sections, product grids, and mobile-first storefront patterns."
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
        description: "A clean catalog layout for selling digital products, theme bundles, demos, and curated UI kits."
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
        description: "Responsive storefront theme with compact header, bottom navigation, hero campaign, and conversion overlays."
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
        description: "Editorial landing page template for premium launches, collection stories, and brand campaign pages."
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
        description: "A flexible section-based theme with category cards, landing sections, product showcases, and promo blocks."
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
        description: "Story-led storefront theme with editorial blocks, press sections, social proof, and modular footer."
    }
];
async function ensureDataFile() {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dataDir, {
        recursive: true
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(dataFile, "utf8");
    } catch  {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(dataFile, JSON.stringify(seedThemes, null, 2));
    }
}
async function getThemes() {
    await ensureDataFile();
    const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(dataFile, "utf8");
    return JSON.parse(raw);
}
async function saveThemes(themes) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dataDir, {
        recursive: true
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(dataFile, JSON.stringify(themes, null, 2));
}
function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 72);
}
}),
"[project]/app/api/themes/[id]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$themeStore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/themeStore.js [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
async function DELETE(_request, { params }) {
    const { id } = await params;
    const themes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$themeStore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getThemes"])();
    const nextThemes = themes.filter((theme)=>theme.id !== id);
    if (themes.length === nextThemes.length) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Theme not found."
        }, {
            status: 404
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$themeStore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveThemes"])(nextThemes);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09ywv8r._.js.map