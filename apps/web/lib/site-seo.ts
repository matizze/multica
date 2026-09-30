import type { SupportedLocale } from "@multica/core/i18n";

const enTitle = "Multica — Project Management for Human + Agent Teams";
const enDescription =
  "Source-available platform that turns coding agents into real teammates. Assign tasks, track progress, compound skills.";
const enLandingOgDescription =
  "Manage your human + agent workforce in one place.";

export const SITE_TITLES: Record<SupportedLocale, string> = {
  en: enTitle,
  fr: enTitle,
  ja: enTitle,
  ko: enTitle,
  "zh-Hans": enTitle,
  "pt-BR": "Multica — Gestão de Projetos para Times de Humanos + Agentes",
};

export const SITE_DESCRIPTIONS: Record<SupportedLocale, string> = {
  en: enDescription,
  fr: enDescription,
  ja: enDescription,
  ko: enDescription,
  "zh-Hans": enDescription,
  "pt-BR":
    "Plataforma de código aberto que transforma agentes de código em colegas de equipe de verdade. Atribua tarefas, acompanhe o progresso, acumule skills.",
};

export const LANDING_OG_DESCRIPTIONS: Record<SupportedLocale, string> = {
  en: enLandingOgDescription,
  fr: enLandingOgDescription,
  ja: enLandingOgDescription,
  ko: enLandingOgDescription,
  "zh-Hans": enLandingOgDescription,
  "pt-BR": "Gerencie sua equipe de humanos + agentes em um só lugar.",
};

export const OG_LOCALES: Record<SupportedLocale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ja: "ja_JP",
  ko: "ko_KR",
  "zh-Hans": "zh_CN",
  "pt-BR": "pt_BR",
};
