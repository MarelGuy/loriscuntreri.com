import type { JSX } from "solid-js";

interface ContactCardProps {
    href: string;
    ariaLabel: string;
    title: string;
    linkText: string;
    children: JSX.Element;
}

export function ContactCard(props: ContactCardProps) {
    const isEmail = props.href.startsWith("mailto:");

    return (
        <div class="flex flex-col items-center text-center gap-4 flex-1">
            <a
                href={props.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={props.ariaLabel}
                class="w-16 h-16 bg-[#333333] rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(51,51,51,0.5)]"
            >
                {props.children}
            </a>
            <div>
                <p class="font-bold text-[#5ab4c5] text-lg tracking-wide uppercase">
                    {props.title}
                </p>
                <a
                    href={props.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    class="text-black text-lg mt-1 underline hover:text-cyan-600 transition-colors block"
                >
                    {props.linkText}
                </a>
            </div>
        </div>
    );
}