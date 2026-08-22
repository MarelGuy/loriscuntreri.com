import { For } from "solid-js";
import { useLang } from "../i18n";
import { useTab, type Tab } from "../tabs";

export function Navbar() {
    const { lang, t } = useLang();
    const { tab, setTab } = useTab();

    const cvHref = () => `/${lang()}/Loris_Cuntreri_CV.pdf`;

    const tabs = () => [
        { id: "home", label: t().nav.home },
        { id: "whoami", label: t().nav.whoami },
        { id: "projects", label: t().nav.projects },
        { id: "misarum", label: t().nav.misarum },
    ] as { id: Tab; label: string }[];

    return (
        <nav class="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-center items-center gap-3 sm:gap-6 md:gap-12 pt-4 md:pt-8 pb-4 px-2 flex-wrap">
            <For each={tabs()}>
                {(link) => (
                    <button
                        onClick={() => setTab(link.id)}
                        class={
                            tab() === link.id
                                ? "bg-cyan-50 px-4 py-2 md:px-8 font-bold text-sm md:text-base text-cyan-700 rounded-full shadow-md text-center"
                                : "bg-black px-4 py-2 md:px-8 font-bold text-sm md:text-lg hover:text-cyan-300 transition-colors rounded-full drop-shadow-md text-center"
                        }
                    >
                        {link.label}
                    </button>
                )}
            </For>
            <a
                href={cvHref()}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-black px-4 py-2 md:px-8 font-bold text-sm md:text-lg hover:text-cyan-300 transition-colors rounded-full drop-shadow-md text-center"
            >
                {t().nav.cv}
            </a>
        </nav>
    );
}