import { createContext, useContext, type JSX, type ParentProps, createSignal } from "solid-js";

export type Lang = "it" | "en";

export interface Project {
    projectTitle: string;
    description: string;
    technologies: string[];
    projectLink: string;
}

export interface Dictionary {
    nav: {
        home: string;
        whoami: string;
        projects: string;
        misarum: string;
        cv: string;
    };
    hero: {
        name: string;
        role: string;
        why: string;
    };
    why: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
    };
    whoami: {
        headline: string;
        text: string;
        contactMe: string;
        viewProjects: string;
    };
    contact: {
        title: string;
        mail: string;
        personalMail: string;
        linkedin: string;
        github: string;
    };
    projects: {
        title: string;
        button: string;
        items: Project[];
    };
    misarum: {
        title: string;
        text: string;
        bullets: string[];
        link: string;
        officialLink: string;
    };
    footer: {
        links: string;
        social: string;
        cvLabel: string;
        homeLabel: string;
        whoamiLabel: string;
        projectsLabel: string;
        misarumLabel: string;
    };
}

const en: Dictionary = {
    nav: {
        home: "Home",
        whoami: "Who am I",
        projects: "Projects",
        misarum: "Misarum",
        cv: "CV",
    },
    hero: {
        name: "Loris Cuntreri",
        role: "Software Engineer",
        why: "Why choose me?",
    },
    why: {
        title: "Why choose me?",
        p1: "In the projects I work on, I like to prioritise logic and reasoning, ensuring that every design decision is well-considered and professional.",
        p2: "I make full use of linters and debuggers, ensuring that memory and code efficiency are at the heart of the code I write.",
        p3: "My passion for programming is what drives me forward. I can pick up new technologies very quickly, and I make every effort to keep up to date with the latest developments in the tech world.",
    },
    whoami: {
        headline: "Who am I?",
        text: "I am a software engineer with several years of experience. I started programming in C++ whilst at secondary school, and after a few months, I enrolled on a full-stack web development course called ‘Strive School’; upon completing the course, I worked as a volunteer developer for the Sea of Thieves Discord server, creating web dashboards and bots. I took a break to complete my studies; after graduating, I immediately began working for GoSport. There, I used both Node.js/Deno and Rust to create high-performance backend applications and manage the MongoDB database. I am now working as an AI Data Trainer for SME Careers, where I train AI models to recognise and generate efficient Rust code.",
        contactMe: "Contact Me",
        viewProjects: "View my projects",
    },
    contact: {
        title: "Contact me",
        mail: "By email",
        personalMail: "Personal email",
        linkedin: "On LinkedIn",
        github: "On Git server",
    },
    projects: {
        title: "Projects",
        button: "See the source",
        items: [
            {
                projectTitle: "AteBitEmu",
                description:
                    "MOS 6502 emulator built in Rust. It passed Klaus Normann's functional test and can run at both 1 MHz and unlimited speeds. This is one of the few pure Rust projects I completed.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/atebitemu",
            },
            {
                projectTitle: "SPUD",
                description:
                    "SPUD is a binary file format which I'd love to merge into LilDB's environment. Although it's not yet stable, the code works and gives good results. If developed further, it can and will be used in a more serious environment.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/spud_rs",
            },
            {
                projectTitle: "LilDB",
                description:
                    "LilDB has been a staple of my learning process in Rust. Thanks to this project, I learned CLI and gRPC development. The project is not completed yet, but it has been in the works for a long time now.",
                technologies: ["Rust", "Git", "gRPC", "Tokio"],
                projectLink: "https://git.loriscuntreri.com/marel/LilDB",
            },
            {
                projectTitle: "LilDBSh",
                description: "This is the shell for LilDB.",
                technologies: ["Rust", "Git", "gRPC", "Tokio"],
                projectLink: "https://git.loriscuntreri.com/marel/LilDBSh",
            },
            {
                projectTitle: "Jay",
                description:
                    "Jay is one of the first public projects I wrote in Rust. I started developing it while still in high school; it is the main project through which I learned the most about the Rust programming language. This project is also unfinished, but it will be completed, since I have a strong emotional attachment to it.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/Jay",
            },
            {
                projectTitle: "WebSpocket",
                description:
                    "WebSpocket is the only project written in Deno/TS. Everything started when I noticed that the standard Deno WebSocket library lacked support for basic features. Thus, WebSpocket was born. It was never published: shortly after I finished developing it, Deno released a stable, full-featured WebSocket library.",
                technologies: ["Deno", "TypeScript", "WebSocket", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/WebSpocket",
            },
        ],
    },
    misarum: {
        title: "MisarumAI",
        text: "Misarum is a local AI assistant built for Italian law. It runs entirely on your own infrastructure, indexing official Italian legislation so it can answer legal questions with precise citations — never inventing sources.",
        bullets: [
            "Runs locally on your dedicated server — no data leaves your systems",
            "Indexes official Italian law: codes, laws, decrees and regulations",
            "Semantic vector search over millions of chunks for real answers",
            "Every answer comes with exact citations: law, article and source",
            "If it can't find an answer, it says so instead of guessing",
        ],
        link: "Try the demo",
        officialLink: "Visit the official site",
    },
    footer: {
        links: "Direct links",
        social: "Social",
        cvLabel: "CV",
        homeLabel: "Home",
        whoamiLabel: "Who am I",
        projectsLabel: "Projects",
        misarumLabel: "Misarum",
    },
};

const it: Dictionary = {
    nav: {
        home: "Home",
        whoami: "Chi sono",
        projects: "Progetti",
        misarum: "Misarum",
        cv: "CV",
    },
    hero: {
        name: "Loris Cuntreri",
        role: "Software Engineer",
        why: "Perché scegliere me?",
    },
    why: {
        title: "Perché scegliere me?",
        p1: "Nei progetti su cui lavoro do priorità alla logica e al ragionamento, in modo da rendere ogni scelta di design accurata e professionale.",
        p2: "Mi concentro molto sulla scrittura di codice efficiente. Utilizzo linter e debugger a mio vantaggio, rendendo il codice efficiente sia in termini di memoria sia di processore.",
        p3: "La passione per il codice è ciò che mi spinge a migliorare; resto al passo con le tecnologie, e ho una grande capacità di apprendimento.",
    },
    whoami: {
        headline: "Chi sono?",
        text: "Sono un Software Engineer con diversi anni di esperienza. Ho iniziato a programmare in C++ quando frequentavo le scuole superiori e, dopo pochi mesi, mi sono iscritto a un corso di sviluppo web full-stack chiamato «Strive School»; una volta completato il corso, ho lavorato come sviluppatore volontario per il server Discord di Sea of Thieves, creando dashboard web e bot. Ho fatto una pausa per completare gli studi e, dopo aver conseguito il diploma, ho iniziato immediatamente a lavorare per GoSport. Lì ho utilizzato Node.js/Deno e Rust per creare applicazioni backend ad alte prestazioni e gestire il database MongoDB. Attualmente lavoro come AI Data Trainer per SME Careers, dove addestro modelli di intelligenza artificiale a riconoscere e generare codice Rust efficiente.",
        contactMe: "Contattami",
        viewProjects: "Vedi i miei progetti",
    },
    contact: {
        title: "Contattami",
        mail: "Via email",
        personalMail: "Email personale",
        linkedin: "Su LinkedIn",
        github: "Sul server Git",
    },
    projects: {
        title: "Progetti",
        button: "Guarda il codice sorgente",
        items: [
            {
                projectTitle: "AteBitEmu",
                description:
                    "Emulatore MOS 6502 scritto in Rust. Riesce a passare il test scritto da Klaus Normann e può girare sia a 1 MHz sia a velocità illimitate. Questo è uno dei pochi progetti in Rust puro che ho realizzato.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/atebitemu",
            },
            {
                projectTitle: "SPUD",
                description:
                    "SPUD è un formato di file binario che vorrei introdurre nell'ambiente di LilDB. Nonostante non sia ancora in una versione stabile, il codice funziona e dà dei risultati molto buoni. Sicuramente potrà essere usato in futuro insieme a un database più serio.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/spud_rs",
            },
            {
                projectTitle: "LilDB",
                description:
                    "LilDB è stato un punto fisso nel mio percorso con Rust. Grazie a questo progetto, ho imparato a scrivere codice per applicazioni da terminale e a utilizzare gRPC. Non è ancora completo, ma conto di completarlo in futuro, anche se è in sviluppo da anni.",
                technologies: ["Rust", "Git", "gRPC", "Tokio"],
                projectLink: "https://git.loriscuntreri.com/marel/LilDB",
            },
            {
                projectTitle: "LilDBSh",
                description: "Questa è la shell per LilDB.",
                technologies: ["Rust", "Git", "gRPC", "Tokio"],
                projectLink: "https://git.loriscuntreri.com/marel/LilDBSh",
            },
            {
                projectTitle: "Jay",
                description:
                    "Jay è uno dei primi progetti pubblici scritti in Rust. L'ho iniziato durante le scuole superiori e, scrivendolo, ho imparato gran parte di ciò che so oggi. Anche questo è un progetto incompleto; sicuramente verrà completato in futuro, essendo un progetto a cui sono molto legato.",
                technologies: ["Rust", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/Jay",
            },
            {
                projectTitle: "WebSpocket",
                description:
                    "WebSpocket è l'unico progetto completo in Deno/TS. Tutto è nato da una frustrazione verso la libreria di base per i WebSocket di Deno, che non supportava molte delle funzionalità di base. Da lì è nata WebSpocket, anche se non è mai stata pubblicata, visto che sulla stable release di Deno sono state aggiunte le funzionalità che prima mancavano.",
                technologies: ["Deno", "TypeScript", "WebSocket", "Git"],
                projectLink: "https://git.loriscuntreri.com/marel/WebSpocket",
            },
        ],
    },
    misarum: {
        title: "MisarumAI",
        text: "Misarum è un assistente AI locale pensato per il diritto italiano. Gira interamente sulla tua infrastruttura, indicizzando la normativa italiana ufficiale per rispondere alle domande legali con citazioni precise — senza mai inventare le fonti.",
        bullets: [
            "Gira in locale sul tuo server dedicato — nessun dato esce dai tuoi sistemi",
            "Indicizza il diritto italiano ufficiale: codici, leggi, decreti e regolamenti",
            "Ricerca semantica vettoriale su milioni di chunk per risposte reali",
            "Ogni risposta arriva con citazioni esatte: legge, articolo e fonte",
            "Se non trova una risposta, lo dice chiaramente invece di tirare a indovinare",
        ],
        link: "Prova la demo",
        officialLink: "Visita il sito ufficiale",
    },
    footer: {
        links: "Link diretti",
        social: "Social",
        cvLabel: "CV",
        homeLabel: "Home",
        whoamiLabel: "Chi sono",
        projectsLabel: "Progetti",
        misarumLabel: "Misarum",
    },
};

const dictionaries: Record<Lang, Dictionary> = { it, en };

interface LangContextValue {
    lang: () => Lang;
    toggle: () => void;
    t: () => Dictionary;
}

const LangContext = createContext<LangContextValue>();

export function LanguageProvider(props: ParentProps<{ children?: JSX.Element }>) {
    const [lang, setLang] = createSignal<Lang>("en");

    const toggle = () => setLang(lang() === "it" ? "en" : "it");

    const value: LangContextValue = {
        lang,
        toggle,
        t: () => dictionaries[lang()],
    };

    return <LangContext.Provider value={value}>{props.children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
    return ctx;
}