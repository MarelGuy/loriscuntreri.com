import { createContext, createSignal, useContext, type ParentProps } from "solid-js";

export type Tab = "home" | "whoami" | "projects" | "misarum";

interface TabContextValue {
    tab: () => Tab;
    setTab: (tab: Tab) => void;
}

const TabContext = createContext<TabContextValue>();

export function TabProvider(props: ParentProps) {
    const [tab, setTab] = createSignal<Tab>("home");

    const value: TabContextValue = {
        tab,
        setTab,
    };

    return <TabContext.Provider value={value}>{props.children}</TabContext.Provider>;
}

export function useTab(): TabContextValue {
    const ctx = useContext(TabContext);
    if (!ctx) throw new Error("useTab must be used within a TabProvider");
    return ctx;
}