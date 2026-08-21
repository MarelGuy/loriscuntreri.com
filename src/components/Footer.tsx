import { useLang } from "../i18n";
import { useTab } from "../tabs";
import { SOCIAL_LINKS } from "../consts";

const linkClasses =
    "text-lg text-gray-300 hover:text-cyan-300 transition-colors text-left cursor-pointer";

export function Footer() {
    const { lang, t } = useLang();
    const { setTab } = useTab();

    const cvHref = () => `/${lang()}/Loris_Cuntreri_CV.pdf`;

    return (
        <footer class="w-full bg-black text-white min-h-[50vh] flex flex-col justify-center py-20 px-6">
            <div class="max-w-4xl mx-auto w-full flex flex-col gap-16">
                <h2 class="text-2xl md:text-3xl font-bold text-cyan-600 tracking-wide">
                    Loris Cuntreri | Software Engineer
                </h2>

                <div class="flex flex-wrap gap-24 md:gap-40">
                    <div class="flex flex-col gap-4">
                        <h3 class="text-xl font-bold mb-2">{t().footer.links}</h3>
                        <button onClick={() => setTab("home")} class={linkClasses}>
                            {t().footer.homeLabel}
                        </button>
                        <button onClick={() => setTab("whoami")} class={linkClasses}>
                            {t().footer.whoamiLabel}
                        </button>
                        <button onClick={() => setTab("projects")} class={linkClasses}>
                            {t().footer.projectsLabel}
                        </button>
                        <a
                            href={cvHref()}
                            target="_blank"
                            rel="noopener noreferrer"
                            class={linkClasses}
                        >
                            {t().footer.cvLabel}
                        </a>
                    </div>

                    <div class="flex flex-col gap-4">
                        <h3 class="text-xl font-bold mb-2">{t().footer.social}</h3>
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            class={linkClasses}
                        >
                            Email
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class={linkClasses}
                        >
                            LinkedIn
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class={linkClasses}
                        >
                            {SOCIAL_LINKS.githubUsername}
                        </a>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-center pt-8 mt-4 gap-6">
                    <p class="text-lg text-gray-200">ver: 1.1/1.1</p>
                    <p class="text-lg text-gray-200">made with ❤️ by Loris Cuntreri</p>
                    <p class="text-lg text-gray-200">design (also made with ❤️) by Feni</p>
                </div>
            </div>
        </footer>
    );
}