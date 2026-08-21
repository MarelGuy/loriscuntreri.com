import { useLang } from "../i18n";

export function LanguageToggle() {
    const { lang, toggle } = useLang();

    const handleToggle = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const percentage = maxScroll > 0 ? window.scrollY / maxScroll : 0;

        toggle();

        requestAnimationFrame(() => {
            const newMax = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            window.scrollTo(0, percentage * newMax);
        });
    };

    return (
        <button
            id="lang-switch-btn"
            onClick={handleToggle}
            class="fixed bottom-6 left-6 z-50 flex items-center justify-center gap-2 bg-[#111] text-white border border-gray-700 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all duration-300"
            title="Swap Language"
        >
            <span
                class={`text-xl transition-all duration-300 ${lang() === "it" ? "drop-shadow-md" : "opacity-40 grayscale"}`}
            >
                🇮🇹
            </span>

            <span class="text-sm font-bold text-gray-500">/</span>

            <span
                class={`text-xl transition-all duration-300 ${lang() !== "it" ? "drop-shadow-md" : "opacity-40 grayscale"}`}
            >
                🇬🇧
            </span>
        </button>
    );
}