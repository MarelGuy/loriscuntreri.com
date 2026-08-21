import type { JSX } from "solid-js";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    external?: boolean;
    children: JSX.Element;
}

export function Button(props: ButtonProps) {
    const classes =
        "bg-cyan-50 text-cyan-600 font-bold text-xl px-10 py-4 rounded-full shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.7)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out";

    if (props.onClick) {
        return (
            <button onClick={props.onClick} class={classes}>
                {props.children}
            </button>
        );
    }

    return (
        <a
            href={props.href}
            target={props.external ? "_blank" : undefined}
            rel={props.external ? "noopener noreferrer" : undefined}
            class={classes}
        >
            {props.children}
        </a>
    );
}