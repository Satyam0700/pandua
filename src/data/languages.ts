import type { Language } from "@/types/learning";

// ---------------------------------------------------------------------------
// Supported Languages
// ---------------------------------------------------------------------------
// A small, beginner-friendly set of languages the app can teach.
// Easy to extend — just add a new entry to the array.
// ---------------------------------------------------------------------------

export const languages: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w80/es.png",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w80/fr.png",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w80/jp.png",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w80/kr.png",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w80/de.png",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w80/cn.png",
  },
];

// ---------------------------------------------------------------------------
// Learner counts — displayed on the language selection screen.
// Kept separate to avoid bloating the Language type.
// ---------------------------------------------------------------------------

export const learnerCounts: Record<string, string> = {
  es: "28.4M learners",
  fr: "19.4M learners",
  ja: "12.7M learners",
  ko: "9.3M learners",
  de: "8.1M learners",
  zh: "7.4M learners",
};

// ---- Helpers ----------------------------------------------------------------

/** Get a language object by its code. */
export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((l) => l.code === code);
}
