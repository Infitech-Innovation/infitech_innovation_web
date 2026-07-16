import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What does Infitech Innovation build?",
        answer: "We build business websites, customer portals, ERP SaaS tools, dashboards, booking systems, APIs, and AI-powered workflows for teams that need practical digital systems.",
    },
    {
        question: "Can Infitech work with an existing business process?",
        answer: "Yes. We start by understanding how your team currently works, then shape the product around the workflows, approvals, data, and customer journey you already use.",
    },
    {
        question: "Do you only design websites, or do you build full systems?",
        answer: "We do both. A project can be a clean business website, a custom web app, an ERP module, a mobile-ready portal, or a full connected platform with backend services.",
    },
    {
        question: "Can you add AI automation to our operations?",
        answer: "Yes. We can help automate support, booking, reporting, data entry, internal notifications, and other repeat tasks where AI can reduce manual work.",
    },
    {
        question: "What happens after a product is launched?",
        answer: "We can support deployment, monitoring, fixes, new features, performance improvements, and ongoing product iteration as your business grows.",
    },
];

export default function FAQ() {
    return (
        <section className="relative isolate overflow-hidden bg-infitech-orange px-4 py-14 text-infitech-surface sm:px-6 sm:py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative mx-auto max-w-5xl text-center">
                    <h2 className="text-[2.15rem] font-black leading-[0.98] tracking-normal text-infitech-surface min-[390px]:text-4xl sm:text-5xl lg:text-[4rem]">
                        Questions? Answered
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm font-bold leading-6 text-infitech-surface/78 sm:text-base sm:leading-7">
                        Straight answers about working with Infitech, building custom systems, and keeping products useful after launch.
                    </p>
                </div>

                <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12">
                    {faqs.map((item, index) => (
                        <details
                            key={item.question}
                            className="group overflow-hidden rounded-[28px] bg-infitech-ink text-infitech-surface shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:rounded-[36px]"
                            open={index === 0}
                        >
                            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-5 px-6 py-6 text-left text-lg font-black leading-tight marker:hidden sm:px-8 sm:py-7 sm:text-xl lg:px-12 lg:py-8 lg:text-[1.35rem]">
                                {item.question}
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-infitech-surface/10 text-infitech-cyan transition group-open:rotate-180">
                                    <ChevronDown className="h-5 w-5" strokeWidth={3} />
                                </span>
                            </summary>
                            <div className="px-6 pb-7 pt-0 sm:px-8 sm:pb-9 lg:px-12">
                                <p className="max-w-4xl text-sm font-semibold leading-6 text-infitech-surface/72 sm:text-[0.95rem]">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
