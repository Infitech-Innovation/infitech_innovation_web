import {
    BarChart3,
    Building2,
    Lightbulb,
    Settings,
    type LucideIcon,
} from "lucide-react";
import {
    type AppPathname,
} from "@/i18n/routing";
export type MegaMenuId = "what-we-do" | "who-we-are";
export type MegaMenuCategory = {
    label: string;
    icon: LucideIcon;
};
export type MegaMenuLink = {
    label: string;
    description: string;
    href: AppPathname;
};

export const navLinks = [
    { label: "What We Do", href: "/we-do", menu: "what-we-do" },
    { label: "Who We Are", href: "/we-are", menu: "who-we-are" },
    { label: "Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
] satisfies Array<{ label: string; href: AppPathname; menu?: MegaMenuId }>;

export const whatWeDoCategories = [
    {
        label: "Capabilities",
        icon: Settings,
    },
    {
        label: "Industries",
        icon: Building2,
    },
    {
        label: "Innovation",
        icon: Lightbulb,
    },
] satisfies MegaMenuCategory[];


export const whoWeAreCategories = [
    {
        label: "Who We Are",
        icon: BarChart3,
    },
] satisfies MegaMenuCategory[];


export const whoWeAreLinks = [
    {
        label: "About Infitech",
        description: "Learn who we are and how we build",
        href: "/we-are/about-infitech",
    },
    {
        label: "Our Story",
        description: "Follow the journey behind Infitech Innovation",
        href: "/we-are/our-story",
    },
    {
        label: "Purpose, Vision & Mission",
        description: "See the principles that guide our work",
        href: "/we-are/purpose-vision-mission",
    },
    {
        label: "Leadership",
        description: "Meet the team shaping our direction",
        href: "/we-are/leadership",
    },
    {
        label: "Insights",
        description: "Read thinking from our team and practice",
        href: "/we-are/insights",
    },
    {
        label: "Careers",
        description: "Explore opportunities to build with us",
        href: "/we-are/careers",
    },
] satisfies MegaMenuLink[];


export const whatWeDoCapabilityLinks = [
    {
        label: "Digital Transformation",
        description: "Modernize how your business works",
        href: "/we-do/capability/digital-transform",
    },
    {
        label: "AI & Intelligent Automation",
        description: "Automate processes with AI and intelligent workflows",
        href: "/we-do/capability/ai-intelligent-automation",
    },
    {
        label: "Business Systems",
        description: "Connect operations, teams, data, and reporting",
        href: "/we-do/capability/business-systems",
    },
    {
        label: "Digital Experiences",
        description: "Create engaging web, mobile, and customer experiences",
        href: "/we-do/capability/digital-experiences",
    },
    {
        label: "Technology Consulting",
        description: "Turn technology into a practical business advantage",
        href: "/we-do/capability/technology-consulting",
    },
] satisfies MegaMenuLink[];


export const whatWeDoIndustryLinks = [
    {
        label: "Manufacturing",
        slug: "manufacturing",
        description: "Streamline production, operations, and business processes",
        href: "/we-do/industry/manufacturing",
    },
    {
        label: "Financial Services",
        slug: "financial-services",
        description: "Modernize financial operations, services, and customer experiences",
        href: "/we-do/industry/financial-services",
    },
    {
        label: "Logistics & Supply Chain",
        slug: "logistics-supply-chain",
        description: "Optimize logistics, inventory, distribution, and supply operations",
        href: "/we-do/industry/logistics-supply-chain",
    },
    {
        label: "Hospitality & Tourism",
        slug: "hospitality-tourism",
        description: "Enhance guest experiences, bookings, and hospitality operations",
        href: "/we-do/industry/hospitality-tourism",
    },
    {
        label: "Healthcare",
        slug: "healthcare",
        description: "Improve healthcare operations, services, and digital experiences",
        href: "/we-do/industry/healthcare",
    },
    {
        label: "Real Estate & Construction",
        slug: "real-estate-construction",
        description: "Digitize property, project, and construction management",
        href: "/we-do/industry/real-estate-construction",
    },
    {
        label: "NGOs & Development Organizations",
        slug: "ngos-development-organizations",
        description: "Enable efficient programs, operations, reporting, and impact",
        href: "/we-do/industry/ngos-development-organizations",
    },
    {
        label: "Legal & Professional Services",
        slug: "legal-professional-services",
        description: "Simplify workflows, client services, and professional operations",
        href: "/we-do/industry/legal-professional-services",
    },
    {
        label: "Government & Public Sector",
        slug: "government-public-sector",
        description: "Modernize public services, systems, and administrative processes",
        href: "/we-do/industry/government-public-sector",
    },
    {
        label: "View All Industries",
        description: "Explore all industries we serve",
        href: "/we-do/industry",
    },
] satisfies Array<MegaMenuLink & { slug?: string }>;


export const whatWeDoInnovationLinks = [
    {
        label: "Innovation Lab",
        description: "Experiment with emerging technologies and new digital solutions",
        href: "/we-do/innovation/innovation-lab",
    },
    {
        label: "Research & Development",
        description: "Explore research, experimentation, and technology development",
        href: "/we-do/innovation/research-development",
    },
    {
        label: "Explore Innovation",
        description: "Discover how we turn emerging ideas into practical solutions",
        href: "/we-do/innovation",
    },
] satisfies MegaMenuLink[];
