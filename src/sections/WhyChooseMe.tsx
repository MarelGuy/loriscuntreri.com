import { useLang } from "../i18n";
import { Star } from "../components/Star";

export function WhyChooseMe() {
    const { t } = useLang();

    return (
        <section
            id="why-choose-me"
            class="w-full min-h-screen bg-[#d2e4e4] py-24 px-6 flex flex-col justify-center"
        >
            <div class="max-w-3xl mx-auto w-full">
                <h2 class="text-4xl font-black text-center text-cyan-800 mb-20 tracking-wide">
                    {t().why.title}
                </h2>

                <div class="flex flex-col gap-16">
                    <div class="flex text-black items-center justify-center gap-10">
                        <Star />

                        <div class="space-y-4 w-full max-w-sm">
                            {t().why.p1}
                        </div>
                    </div>

                    <div class="flex text-black items-center justify-center gap-10">
                        <div class="space-y-4 w-full max-w-sm">
                            {t().why.p2}
                        </div>

                        <Star />
                    </div>

                    <div class="flex text-black items-center justify-center gap-10">
                        <Star />

                        <div class="space-y-4 w-full max-w-sm">
                            {t().why.p3}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}