// ---------------------------------------------------------------------------
// Learning Content Type Definitions
// ---------------------------------------------------------------------------
// These types define the shape of all hardcoded learning content used
// throughout the app — languages, units, lessons, activities, vocabulary,
// phrases, and AI teacher prompts.
// ---------------------------------------------------------------------------

/** Unique identifier for a language (e.g. "es", "fr", "hi"). */
export type LanguageCode = string;

/** Difficulty tier for lessons and activities. */
export type Difficulty = "beginner" | "intermediate" | "advanced";

// ---- Language ---------------------------------------------------------------

export interface Language {
  /** ISO‑style short code. */
  code: LanguageCode;
  /** Human‑readable name in English. */
  name: string;
  /** Native name of the language (e.g. "Español"). */
  nativeName: string;
  /** Emoji flag for quick visual identification. */
  flag: string;
}

// ---- Vocabulary & Phrases ---------------------------------------------------

export interface VocabularyItem {
  id: string;
  /** Word or short expression in the target language. */
  word: string;
  /** Translation in the learner's native language (English). */
  translation: string;
  /** Pronunciation hint (simple phonetic guide). */
  pronunciation: string;
  /** Optional example sentence using the word. */
  exampleSentence?: string;
  /** Audio file path – reserved for future use. */
  audioPath?: string;
}

export interface Phrase {
  id: string;
  /** Full phrase in the target language. */
  phrase: string;
  /** English translation. */
  translation: string;
  /** Pronunciation hint. */
  pronunciation: string;
  /** Contextual note (when to use this phrase). */
  context?: string;
}

// ---- Activities -------------------------------------------------------------

/**
 * The kinds of interactive exercises a lesson can contain.
 *
 * - multipleChoice  : Pick the correct translation from options.
 * - matchPairs      : Match words/phrases to their translations.
 * - fillInTheBlank  : Complete a sentence with the missing word.
 * - listenAndChoose : Listen to audio and pick the correct answer (future).
 * - translate       : Type the translation of a given sentence.
 * - speak           : Speak the word/phrase aloud (future).
 */
export type ActivityType =
  | "multipleChoice"
  | "matchPairs"
  | "fillInTheBlank"
  | "listenAndChoose"
  | "translate"
  | "speak";

/** A single interactive exercise within a lesson. */
export interface Activity {
  id: string;
  type: ActivityType;
  /** Instruction shown to the learner (e.g. "Choose the correct translation"). */
  instruction: string;
  /** The prompt / question text. */
  question: string;
  /** The correct answer string. */
  correctAnswer: string;
  /** All answer options (for multiple‑choice / matching). */
  options?: string[];
  /** XP reward for completing this activity correctly. */
  xp: number;
}

// ---- Lesson Goals -----------------------------------------------------------

export interface LessonGoal {
  id: string;
  /** Short description of the goal (e.g. "Learn 5 food words"). */
  description: string;
  /** Whether this goal is met — tracked at runtime via Zustand. */
  completed?: boolean;
}

// ---- AI Teacher Prompt ------------------------------------------------------

/**
 * Pre‑defined prompt metadata for a future audio/video AI teacher lesson
 * powered by Stream Vision Agents.
 */
export interface AITeacherPrompt {
  /** System prompt that sets up the AI teacher personality & behaviour. */
  systemPrompt: string;
  /** The opening message the AI teacher says to start the lesson. */
  greeting: string;
  /** Topics / vocabulary the AI should focus on during the session. */
  focusTopics: string[];
  /** Target language code the AI should teach in. */
  targetLanguage: LanguageCode;
}

// ---- Lesson -----------------------------------------------------------------

export interface Lesson {
  id: string;
  /** Which unit this lesson belongs to. */
  unitId: string;
  /** Language this lesson teaches. */
  languageCode: LanguageCode;
  /** Display title (e.g. "Greetings & Introductions"). */
  title: string;
  /** Short description shown on the lesson card. */
  description: string;
  /** Emoji icon for visual flair. */
  icon: string;
  difficulty: Difficulty;
  /** Estimated time in minutes. */
  estimatedMinutes: number;
  /** XP awarded on completion. */
  xpReward: number;
  /** Ordered list of interactive activities. */
  activities: Activity[];
  /** Vocabulary covered in this lesson. */
  vocabulary: VocabularyItem[];
  /** Useful phrases taught in this lesson. */
  phrases: Phrase[];
  /** Learning goals for the lesson. */
  goals: LessonGoal[];
  /** Optional AI teacher prompt for audio‑based Vision Agent lessons. */
  aiTeacherPrompt?: AITeacherPrompt;
}

// ---- Unit -------------------------------------------------------------------

export interface Unit {
  id: string;
  /** Language this unit belongs to. */
  languageCode: LanguageCode;
  /** Display title (e.g. "Basics 1"). */
  title: string;
  /** Short description of what the unit covers. */
  description: string;
  /** Emoji icon. */
  icon: string;
  /** Order index for sorting units in a path. */
  order: number;
  /** IDs of lessons that belong to this unit (ordered). */
  lessonIds: string[];
}
