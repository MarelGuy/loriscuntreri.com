import { useLang } from "../i18n";
import { Button } from "../components/Button";

export function Hero() {
    const { t } = useLang();

    const scrollToWhy = () => {
        document.getElementById("why-choose-me")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            class="min-h-screen flex flex-col items-center justify-center grow max-w-2xl mx-auto px-6 text-center pb-20"
        >
            <h1 class="text-6xl font-black text-cyan-600 tracking-wide mb-16">
                {t().hero.name}
            </h1>

            <p class="space-y-4 mb-20 w-full px-8">
                {t().hero.role}
            </p>

            <Button onClick={scrollToWhy}>{t().hero.why}</Button>
        </section>
    );
}