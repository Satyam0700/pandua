import type { Unit } from "@/types/learning";

// ---------------------------------------------------------------------------
// Units
// ---------------------------------------------------------------------------
// Each unit groups a set of lessons under a theme. Units are ordered so the
// learning path can render them top‑to‑bottom like Duolingo's skill tree.
//
// Currently we have beginner units for Spanish, French, and Hindi.
// ---------------------------------------------------------------------------

export const units: Unit[] = [
  // ── Spanish ────────────────────────────────────────────────────────────
  {
    id: "es-basics-1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greetings, introductions, and simple phrases.",
    icon: "👋",
    order: 1,
    lessonIds: ["es-greetings", "es-introductions"],
  },
  {
    id: "es-food-1",
    languageCode: "es",
    title: "Food & Drink",
    description: "Learn to talk about common foods and beverages.",
    icon: "🍎",
    order: 2,
    lessonIds: ["es-food-basics"],
  },

  // ── French ─────────────────────────────────────────────────────────────
  {
    id: "fr-basics-1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Essential greetings and everyday expressions.",
    icon: "👋",
    order: 1,
    lessonIds: ["fr-greetings", "fr-introductions"],
  },
  {
    id: "fr-travel-1",
    languageCode: "fr",
    title: "Travel",
    description: "Useful phrases for getting around.",
    icon: "✈️",
    order: 2,
    lessonIds: ["fr-travel-basics"],
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

  // ── Japanese ───────────────────────────────────────────────────────────
  {
    id: "ja-basics-1",
    languageCode: "ja",
    title: "Basics 1",
    description: "Basic greetings and self‑introduction.",
    icon: "⛩️",
    order: 1,
    lessonIds: ["ja-greetings"],
  },

  // ── German ─────────────────────────────────────────────────────────────
  {
    id: "de-basics-1",
    languageCode: "de",
    title: "Basics 1",
    description: "Greetings and simple conversations.",
    icon: "🍺",
    order: 1,
    lessonIds: ["de-greetings"],
  },
];

// ---- Helpers ----------------------------------------------------------------

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
