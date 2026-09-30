import type { Metadata } from "next";
import { MulticaLanding } from "@/features/landing/components/multica-landing";
import { RedirectIfAuthenticated } from "@/features/landing/components/redirect-if-authenticated";
import { getRequestLocale } from "@/lib/request-locale";
import {
  LANDING_OG_DESCRIPTIONS,
  OG_LOCALES,
  SITE_DESCRIPTIONS,
  SITE_TITLES,
} from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: {
      absolute: SITE_TITLES[locale],
    },
    description: SITE_DESCRIPTIONS[locale],
    openGraph: {
      title: SITE_TITLES[locale],
      description: LANDING_OG_DESCRIPTIONS[locale],
      url: "/",
      locale: OG_LOCALES[locale],
    },
    alternates: {
      canonical: "/",
    },
  };
}

export default function LandingPage() {
  return (
    <>
      <RedirectIfAuthenticated />
      <MulticaLanding />
    </>
  );
}
