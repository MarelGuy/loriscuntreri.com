import { For } from "solid-js";
import { useLang } from "../i18n";
import { Button } from "../components/Button";

export function Misarum() {
    const { t } = useLang();

    return (
        <section
            id="misarum"
            class="min-h-screen flex flex-col items-center justify-center grow w-full max-w-5xl mx-auto px-6 pt-24 pb-20"
        >
            <h1 class="text-5xl md:text-7xl font-black text-cyan-600 tracking-wide text-center mb-10">
                {t().misarum.title}
            </h1>

            <p class="text-lg md:text-xl text-gray-200 font-light max-w-3xl text-center leading-relaxed mb-12">
                {t().misarum.text}
            </p>

            <ul class="w-full max-w-2xl mx-auto flex flex-col gap-4 mb-12">
                <For each={t().misarum.bullets}>
                    {(bullet) => (
                        <li class="flex items-center gap-4 text-base md:text-lg text-gray-200 font-light">
                            <span class="w-2 h-2 bg-cyan-500 rounded-full shrink-0"></span>
                            {bullet}
                        </li>
                    )}
                </For>
            </ul>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button href="https://app.misarum.it" external>
                    {t().misarum.link}
                </Button>
                <a
                    href="https://misarum.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-transparent border border-cyan-600 text-cyan-600 font-bold text-xl px-10 py-4 rounded-full hover:bg-cyan-600/10 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out text-center"
                >
                    {t().misarum.officialLink}
                </a>
            </div>
        </section>
    );
}