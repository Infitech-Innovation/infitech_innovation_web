import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations("HomePage");
    const services = [
        ["services.digital.accent", "services.digital.label"],
        ["services.erp.accent", "services.erp.label"],
        ["services.custom.accent", "services.custom.label"],
        ["services.ai.accent", "services.ai.label"],
    ] as const;

    return (
        <main className="flex flex-1 flex-col bg-infitech-surface text-infitech-ink">
            <section className="relative isolate overflow-hidden border-b border-infitech-olive/70">
                <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,var(--infitech-cyan),var(--infitech-turquoise),var(--infitech-gold),var(--infitech-orange))]" />
                <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
                    <div className="max-w-3xl">
                        <p className="mb-5 inline-flex border-l-4 border-infitech-cyan bg-infitech-olive/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-infitech-ink">
                            {t("eyebrow")}
                        </p>
                        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-infitech-ink sm:text-6xl lg:text-7xl">
                            {t("title")}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-infitech-ink/72 sm:text-xl">
                            {t("description")}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/digital-transform"
                                className="inline-flex items-center justify-center rounded-md bg-infitech-ink px-6 py-3 text-sm font-bold text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
                            >
                                {t("primaryCta")}
                            </Link>
                            <Link
                                href="/ai-automation-booking"
                                className="inline-flex items-center justify-center rounded-md border border-infitech-ink px-6 py-3 text-sm font-bold text-infitech-ink transition hover:border-infitech-turquoise hover:bg-infitech-cyan/20"
                            >
                                {t("secondaryCta")}
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex min-h-[360px] items-center justify-center">
                        <div className="absolute h-72 w-72 rounded-full bg-infitech-cyan/25 blur-3xl" />
                        <div className="absolute right-6 top-8 h-24 w-24 rounded-md bg-infitech-orange/80" />
                        <div className="absolute bottom-10 left-4 h-28 w-28 rounded-md bg-infitech-olive" />
                        <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center rounded-md border border-infitech-olive bg-infitech-surface p-8 shadow-2xl shadow-infitech-ink/10">
                            <Image
                                src="/icon0.svg"
                                alt={t("logoAlt")}
                                height={320}
                                width={320}
                                sizes="(max-width: 768px) 70vw, 320px"
                                className="h-auto w-full object-contain"
                                priority
                                unoptimized
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-infitech-ink px-4 py-10 text-infitech-surface sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map(([accent, label]) => (
                        <div key={label} className="border-l-4 border-infitech-gold bg-infitech-surface/5 px-5 py-4">
                            <p className="text-sm font-semibold text-infitech-cyan">{t(accent)}</p>
                            <p className="mt-1 text-xl font-bold">{t(label)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
