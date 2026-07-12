import PageUnderDevelopment from "@/components/common/comming-soon";
import { locales } from "@/i18n/routing";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function page() {
  return <PageUnderDevelopment titleKey="chatbot" />
}
