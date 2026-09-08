import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
    plugins: [
        solid(),
        tailwindcss(),
        sitemap({
            hostname: "https://www.loriscuntreri.com",
        }),
    ],
});