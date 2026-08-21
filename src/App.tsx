import { createEffect, Switch, Match } from "solid-js";
import { LanguageProvider, useLang } from "./i18n";
import { TabProvider, useTab } from "./tabs";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./sections/Hero";
import { WhyChooseMe } from "./sections/WhyChooseMe";
import { WhoAmI } from "./sections/WhoAmI";
import { Projects } from "./sections/Projects";
import { ContactMe } from "./sections/ContactMe";

function Shell() {
    const { lang } = useLang();
    const { tab } = useTab();

    createEffect(() => {
        document.documentElement.lang = lang();
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