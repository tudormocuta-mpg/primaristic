import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

function getLocaleFromPathname(pathname: string): Locale | undefined {
  const segment = pathname.split("/")[1];
  return locales.find((l) => l === segment);
}

function getPreferredLocale(request: NextRequest): Locale {
  // 1. Check cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as
    | Locale
    | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // 2. Check Accept-Language header
  const acceptLang = request.headers.get("Accept-Language");
  if (acceptLang) {
    for (const locale of locales) {
      if (acceptLang.toLowerCase().includes(locale)) return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, API routes, _next
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(.*)$/.test(pathname)
  ) {
    return;
  }

  const pathnameLocale = getLocaleFromPathname(pathname);

  // Case 1: URL has /ro/ prefix — redirect to root (canonical RO has no prefix)
  if (pathnameLocale === defaultLocale) {
    const newPath = pathname.replace(`/${defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Case 2: URL has a non-default locale prefix (/en/, /de/, etc.) — let it through
  if (pathnameLocale) {
    return;
  }

  // Case 3: No locale prefix — determine which locale to serve
  const preferredLocale = getPreferredLocale(request);

  if (preferredLocale !== defaultLocale) {
    // User prefers a non-default locale, redirect to prefixed URL
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url)
    );
  }

  // Case 4: Default locale (ro), no prefix — rewrite internally to /ro/...
  return NextResponse.rewrite(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
