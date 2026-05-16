import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VariantA } from "@/components/home/variants/VariantA";
import { VariantB } from "@/components/home/variants/VariantB";
import { VariantC } from "@/components/home/variants/VariantC";
import { VariantD } from "@/components/home/variants/VariantD";
import { VARIANT_META, isVariantId, type VariantId } from "@/components/home/variants/registry";
import { locales, type Locale } from "@/i18n/config";

interface PageParams {
  locale: string;
  id: string;
}

export async function generateStaticParams() {
  const variantIds: VariantId[] = ["a", "b", "c", "d"];
  return locales.flatMap((locale) =>
    variantIds.map((id) => ({ locale, id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  if (!isVariantId(params.id)) return {};
  const meta = VARIANT_META[params.id];
  return {
    title: `Variantă ${meta.label} | PRIMARISTICA®`,
    description: meta.description,
    robots: { index: false, follow: false },
  };
}

const VARIANT_COMPONENTS = {
  a: VariantA,
  b: VariantB,
  c: VariantC,
  d: VariantD,
} as const;

export default function VariantPage({ params }: { params: PageParams }) {
  if (!isVariantId(params.id)) notFound();
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) notFound();

  const VariantComponent = VARIANT_COMPONENTS[params.id];

  return <VariantComponent />;
}
