// import { ArrowRight, Boxes, Code2, FlaskConical } from "lucide-react";
// import AboutPage from "./AboutPage";


// const industryCards = [
//     {
//         title: "Infi-ERP SaaS",
//         description: "A cloud-based Enterprise Resource Planning solution tailored for the Kenyan market, including accounting, inventory management, CRM, and compliance features.",
//         icon: Boxes,
//         iconClass: "bg-infitech-orange text-infitech-ink",
//     },
//     {
//         title: "Website Development",
//         description: "Professional, responsive web design and custom software development services ranging from corporate sites to digital applications.",
//         icon: Code2,
//         iconClass: "bg-infitech-cyan text-infitech-ink",
//     },
//     {
//         title: "Innovation and Research",
//         description: "Ongoing R&D initiatives via the Innovation Research Lab focused on bringing technology solutions to market.",
//         icon: FlaskConical,
//         iconClass: "bg-infitech-gold text-infitech-ink",
//     },
// ];


// export default function CapabilitiesPage() {
//     return (
//         <>
//             <section className="bg-background px-5 py-10 text-infitech-ink sm:px-6 lg:px-8">
//                 <div className="mx-auto max-w-[1400px]">
//                     {/* <h2 className="mb-6 text-3xl font-semibold leading-tight text-center text-infitech-ink sm:text-4xl"> */}
//                     {/* <h1 className="text-center text-[2.6rem] font-black leading-tight tracking-normal text-infitech-ink min-[390px]:text-[2.85rem] sm:text-[3.55rem] lg:mt-4 lg:mb-8 lg:text-[2.0rem] xl:text-[4.0rem]">
//                         Our Capabilities
//                     </h1> */}
//                     <h2 className="heading-rise mx-auto flex max-w-[18ch] justify-center gap-5 text-center font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.95] tracking-[-0.025em] text-balance lg:mb-8 lg:mt-4">
//                         <span className="block font-light text-fog">Our</span>
//                         <span className="block font-bold">Capabilities.</span>
//                     </h2>
//                     <div className="grid gap-6 lg:grid-cols-3">
//                         {industryCards.map((card) => {
//                             const Icon = card.icon;

//                             return (
//                                 <article
//                                     key={card.title}
//                                     className="infitech-industry-card relative flex min-h-[266px] gap-6 overflow-hidden rounded-[6px] border border-infitech-ink/50 bg-white px-6 py-6 transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(255,165,0,0.16)]"
//                                 >
//                                     <>
//                                         <div className={`grid h-[116px] w-[116px] shrink-0 place-items-center rounded-[8px] ${card.iconClass} shadow-[0_14px_28px_rgba(0,0,0,0.12)]`}>
//                                             <Icon className="h-12 w-12" strokeWidth={2} />
//                                         </div>
//                                         <div className="min-w-0 pr-8">
//                                             <h3 className="text-[1.45rem] font-bold leading-tight text-[#343a46]">{card.title}</h3>
//                                             <p className="mt-4 max-w-[290px] text-[1.2rem] font-normal leading-[1.18] text-infitech-ink">
//                                                 {card.description}
//                                             </p>
//                                         </div>
//                                         <ArrowRight
//                                             aria-hidden="true"
//                                             className="absolute bottom-6 right-6 h-7 w-7 text-infitech-orange"
//                                             strokeWidth={1.8}
//                                         />
//                                     </>
//                                 </article>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//             {/* About Page */}
//             <AboutPage />
//         </>
//     );
// }
