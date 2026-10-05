import { createEffect, Switch, Match, onCleanup } from "solid-js";
import { LanguageProvider, useLang } from "./i18n";
import { TabProvider, useTab } from "./tabs";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./sections/Hero";
import { WhyChooseMe } from "./sections/WhyChooseMe";
import { WhoAmI } from "./sections/WhoAmI";
import { Projects } from "./sections/Projects";
import { Misarum } from "./sections/Misarum";
import { ContactMe } from "./sections/ContactMe";

function Shell() {
    const { lang } = useLang();
    const { tab } = useTab();

    createEffect(() => {
        const current = lang();
        document.documentElement.lang = current;

        // Keep the Keep Android Open banner in sync with the site language.
        const slot = document.getElementById("kao-banner");
        if (!slot) return;

        slot.innerHTML = "";

        const script = document.createElement("script");
        script.src = `https://keepandroidopen.org/banner.js?id=kao-banner&lang=${current}&size=minimal&animation=off`;
        document.body.appendChild(script);

        onCleanup(() => script.remove());
    });

    createEffect(() => {
        tab();
        window.scrollTo(0, 0);
    });

    return (
        <div class="min-h-screen flex flex-col">
            <Navbar />
            <LanguageToggle />

            <main class="flex flex-col grow">
                <Switch>
                    <Match when={tab() === "whoami"}>
                        <WhoAmI />
                        <ContactMe />
                    </Match>
                    <Match when={tab() === "projects"}>
                        <Projects />
                    </Match>
                    <Match when={tab() === "misarum"}>
                        <Misarum />
                    </Match>
                    <Match when={tab() === "home"}>
                        <Hero />
                        <WhyChooseMe />
                    </Match>
                </Switch>
            </main>

            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <TabProvider>
                <Shell />
            </TabProvider>
        </LanguageProvider>
    );
}