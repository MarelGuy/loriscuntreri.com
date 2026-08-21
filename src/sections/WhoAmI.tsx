import { useLang } from "../i18n";
import { useTab } from "../tabs";
import { Button } from "../components/Button";

export function WhoAmI() {
    const { t } = useLang();
    const { setTab } = useTab();

    const scrollToContact = () => {
        document.getElementById("contact-me")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="who-am-i"
            class="min-h-screen flex flex-col items-center justify-center grow w-full max-w-5xl mx-auto px-6 pt-24 pb-20"
        >
            <div
                class="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-12 md:gap-20 mb-20"
            >
                <div
                    class="w-full md:w-1/2 flex justify-center md:justify-end text-center md:text-right"
                >
                    <h1
                        class="text-5xl md:text-7xl font-black text-cyan-600 tracking-wide leading-tight"
                    >
                        {t().whoami.headline}
                    </h1>
                </div>
                <div
                    class="w-full md:w-1/2 space-y-6 text-lg md:text-xl text-gray-200 font-light flex flex-col justify-center text-left"
                >
                    <p>
                        {t().whoami.text}
                    </p>
                </div>
            </div>

            <div
                class="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-12 md:gap-20 mb-20"
            >
                <Button onClick={scrollToContact}>{t().whoami.contactMe}</Button>
                <Button onClick={() => setTab("projects")}>{t().whoami.viewProjects}</Button>
            </div>
        </section>
    );
}