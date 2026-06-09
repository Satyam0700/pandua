import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  // ── Spanish ────────────────────────────────────────────────────────────
  {
    id: "es-basics-1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greetings, introductions, and simple phrases.",
    icon: "👋",
    order: 1,
    lessonIds: ["es-greetings", "es-introductions", "es-numbers"],
  },
  {
    id: "es-food-1",
    languageCode: "es",
    title: "Food & Drink",
    description: "Learn to talk about common foods and beverages.",
    icon: "🍎",
    order: 2,
    lessonIds: ["es-food-basics", "es-at-cafe", "es-restaurant"],
  },

  // ── French ─────────────────────────────────────────────────────────────
  {
    id: "fr-basics-1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Essential greetings and everyday expressions.",
    icon: "👋",
    order: 1,
    lessonIds: ["fr-greetings", "fr-introductions", "fr-numbers"],
  },
  {
    id: "fr-travel-1",
    languageCode: "fr",
    title: "Travel",
    description: "Useful phrases for getting around.",
    icon: "✈️",
    order: 2,
    lessonIds: ["fr-travel-basics", "fr-at-cafe", "fr-directions"],
  },

  // ── Japanese ───────────────────────────────────────────────────────────
  {
    id: "ja-basics-1",
    languageCode: "ja",
    title: "Basics 1",
    description: "Basic greetings and self‑introduction.",
    icon: "⛩️",
    order: 1,
    lessonIds: ["ja-greetings", "ja-introductions", "ja-numbers"],
  },
  {
    id: "ja-food-1",
    languageCode: "ja",
    title: "Food & Drink",
    description: "Learn to talk about Japanese foods and cafes.",
    icon: "🍣",
    order: 2,
    lessonIds: ["ja-food-basics", "ja-at-cafe", "ja-sushi"],
  },

  // ── German ─────────────────────────────────────────────────────────────
  {
    id: "de-basics-1",
    languageCode: "de",
    title: "Basics 1",
    description: "Greetings and simple conversations.",
    icon: "🇩🇪",
    order: 1,
    lessonIds: ["de-greetings", "de-introductions", "de-numbers"],
  },
  {
    id: "de-food-1",
    languageCode: "de",
    title: "Food & Drink",
    description: "Learn to talk about German food and cafe culture.",
    icon: "🥨",
    order: 2,
    lessonIds: ["de-food-basics", "de-at-cafe", "de-restaurant"],
  },

  // ── Korean ─────────────────────────────────────────────────────────────
  {
    id: "ko-basics-1",
    languageCode: "ko",
    title: "Basics 1",
    description: "Greetings and self‑introductions in Korean.",
    icon: "🇰🇷",
    order: 1,
    lessonIds: ["ko-greetings", "ko-introductions", "ko-numbers"],
  },
  {
    id: "ko-food-1",
    languageCode: "ko",
    title: "Food & Drink",
    description: "Learn to talk about Korean foods and cafe culture.",
    icon: "🍜",
    order: 2,
    lessonIds: ["ko-food-basics", "ko-at-cafe", "ko-kbbq"],
  },

  // ── Chinese ────────────────────────────────────────────────────────────
  {
    id: "zh-basics-1",
    languageCode: "zh",
    title: "Basics 1",
    description: "Greetings and self‑introductions in Mandarin.",
    icon: "🇨🇳",
    order: 1,
    lessonIds: ["zh-greetings", "zh-introductions", "zh-numbers"],
  },
  {
    id: "zh-food-1",
    languageCode: "zh",
    title: "Food & Drink",
    description: "Learn to talk about Chinese foods and dining out.",
    icon: "🥟",
    order: 2,
    lessonIds: ["zh-food-basics", "zh-at-cafe", "zh-restaurant"],
  },

  // ── Hindi ──────────────────────────────────────────────────────────────
  {
    id: "hi-basics-1",
    languageCode: "hi",
    title: "Basics 1",
    description: "Common greetings and polite expressions.",
    icon: "🙏",
    order: 1,
    lessonIds: ["hi-greetings"],
  },
];

/** Get all units for a specific language, sorted by order. */
export function getUnitsByLanguage(languageCode: string): Unit[] {
  return units
    .filter((u) => u.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);
}

/** Get a single unit by its ID. */
export function getUnitById(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}
