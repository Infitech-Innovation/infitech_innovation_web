import PageUnderDevelopment from "@/components/common/comming-soon";
import { locales } from "@/i18n/routing";

const slugs = [
  "about-infitech",
  "our-story",
  "purpose-vision-mission",
  "leadership",
  "insights",
  "careers",
];

export async function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <PageUnderDevelopment title={title} />;
}
