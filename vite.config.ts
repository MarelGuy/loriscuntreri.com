import { defineConfig, type Plugin } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

function inlineCss(): Plugin {
    return {
        name: "inline-css",
        apply: "build",
        enforce: "post",
        transformIndexHtml: {
            order: "post",
            handler(html, ctx) {
                const css = Object.values(ctx.bundle ?? {}).filter(
                    (c): c is { type: "asset"; source: string; fileName: string } =>
                        c.type === "asset" && c.fileName.endsWith(".css"),
                );
                if (!css.length) return html;
                const style = css.map((c) => c.source).join("\n");
                return html.replace(
                    /<link rel="stylesheet"[^>]*>/,
                    `<style>\n${style}\n</style>`,
                );
            },
        },
        generateBundle(_options, bundle) {
            for (const name of Object.keys(bundle)) {
                if (name.endsWith(".css")) delete bundle[name];
            }
        },
    };
}

export default defineConfig({
    plugins: [
        solid(),
        tailwindcss(),
        sitemap({
            hostname: "https://www.loriscuntreri.com",
        }),
        inlineCss(),
    ],
});