import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/shared/PageHeader";
import ContactPageClient from "./ContactPageClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale as Locale);
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader title={dict.contact.header.title} subtitle={dict.contact.header.subtitle} />
      <ContactPageClient
        dict={dict.contact}
        commonDict={dict.common}
      />
    </>
  );
}
