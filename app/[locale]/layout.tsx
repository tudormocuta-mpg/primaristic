import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: {
      default: dict.metadata.siteName,
      template: `%s | PRIMARISTICA®`,
    },
    description: dict.metadata.siteDescription,
    metadataBase: new URL("https://primaristic.ro"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  // Variant preview pages render their own complete navbar + footer as part
  // of the design. Detect them here and skip the global chrome so we don't
  // show two stacked navbars.
  const pathname = headers().get("x-pathname") ?? "";
  const isVariantPreview = /^\/(?:[a-z]{2}\/)?varianta\//.test(pathname);

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {isVariantPreview ? (
          children
        ) : (
          <div className="flex min-h-screen flex-col">
            <Navbar locale={locale} dict={dict} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} dict={dict} />
          </div>
        )}
      </body>
    </html>
  );
}
