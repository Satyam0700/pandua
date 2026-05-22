import type { Lesson } from "@/types/learning";

// ---------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------
// Beginner-friendly sample lessons for each supported language.
// Each lesson has activities, vocabulary, phrases, goals, and an optional
// AI teacher prompt for future audio-based Vision Agent lessons.
// ---------------------------------------------------------------------------

export const lessons: Lesson[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // SPANISH
  // ══════════════════════════════════════════════════════════════════════════

  // ── es-greetings ────────────────────────────────────────────────────────
  {
    id: "es-greetings",
    unitId: "es-basics-1",
    languageCode: "es",
    title: "Greetings",
    description: "Learn how to say hello, goodbye, and more.",
    icon: "👋",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "es-v1", word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { id: "es-v2", word: "Adiós", translation: "Goodbye", pronunciation: "ah-dee-OHS" },
      { id: "es-v3", word: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
      { id: "es-v4", word: "Buenas noches", translation: "Good night", pronunciation: "BWEH-nahs NOH-chehs" },
      { id: "es-v5", word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
    ],
    phrases: [
      { id: "es-p1", phrase: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh ehs-TAHS", context: "Informal greeting" },
      { id: "es-p2", phrase: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-choh GOOS-toh", context: "When meeting someone" },
    ],
    activities: [
      { id: "es-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Hola' mean?", correctAnswer: "Hello", options: ["Hello", "Goodbye", "Thank you", "Please"], xp: 5 },
      { id: "es-a2", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Adiós' mean?", correctAnswer: "Goodbye", options: ["Hello", "Goodbye", "Good morning", "Good night"], xp: 5 },
      { id: "es-a3", type: "fillInTheBlank", instruction: "Complete the phrase", question: "Buenos _____ (Good morning)", correctAnswer: "días", xp: 5 },
      { id: "es-a4", type: "translate", instruction: "Translate to Spanish", question: "Good night", correctAnswer: "Buenas noches", xp: 5 },
    ],
    goals: [
      { id: "es-g1", description: "Learn 5 greeting words" },
      { id: "es-g2", description: "Complete all 4 activities" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are a friendly Spanish teacher named María. Speak slowly, use simple vocabulary, and encourage the student. Teach basic greetings.",
      greeting: "¡Hola! I'm María, your Spanish teacher. Let's learn some greetings today!",
      focusTopics: ["greetings", "polite expressions", "pronunciation"],
      targetLanguage: "es",
    },
  },

  // ── es-introductions ───────────────────────────────────────────────────
  {
    id: "es-introductions",
    unitId: "es-basics-1",
    languageCode: "es",
    title: "Introductions",
    description: "Introduce yourself and ask someone's name.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "es-v6", word: "Me llamo", translation: "My name is", pronunciation: "meh YAH-moh" },
      { id: "es-v7", word: "Soy", translation: "I am", pronunciation: "soy" },
      { id: "es-v8", word: "Sí", translation: "Yes", pronunciation: "see" },
      { id: "es-v9", word: "No", translation: "No", pronunciation: "noh" },
      { id: "es-v10", word: "Gracias", translation: "Thank you", pronunciation: "GRAH-see-ahs" },
    ],
    phrases: [
      { id: "es-p3", phrase: "¿Cómo te llamas?", translation: "What is your name?", pronunciation: "KOH-moh teh YAH-mahs", context: "Asking someone's name" },
      { id: "es-p4", phrase: "Soy de...", translation: "I am from...", pronunciation: "soy deh", context: "Saying where you're from" },
    ],
    activities: [
      { id: "es-a5", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Me llamo' mean?", correctAnswer: "My name is", options: ["My name is", "I like", "I want", "I have"], xp: 5 },
      { id: "es-a6", type: "matchPairs", instruction: "Match the pairs", question: "Match Spanish to English", correctAnswer: "Gracias=Thank you,Sí=Yes,No=No", options: ["Gracias", "Sí", "No", "Thank you", "Yes", "No"], xp: 5 },
      { id: "es-a7", type: "fillInTheBlank", instruction: "Complete the sentence", question: "¿Cómo te _____? (What is your name?)", correctAnswer: "llamas", xp: 5 },
      { id: "es-a8", type: "translate", instruction: "Translate to Spanish", question: "Thank you", correctAnswer: "Gracias", xp: 5 },
    ],
    goals: [
      { id: "es-g3", description: "Learn to introduce yourself" },
      { id: "es-g4", description: "Practice asking and answering names" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are María, a warm Spanish teacher. Role-play introductions with the student. Ask their name and where they are from.",
      greeting: "¡Hola de nuevo! Let's practice introducing ourselves today.",
      focusTopics: ["self-introduction", "names", "origins"],
      targetLanguage: "es",
    },
  },

  // ── es-food-basics ─────────────────────────────────────────────────────
  {
    id: "es-food-basics",
    unitId: "es-food-1",
    languageCode: "es",
    title: "Food Basics",
    description: "Common foods and how to order.",
    icon: "🍽️",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "es-v11", word: "Agua", translation: "Water", pronunciation: "AH-gwah" },
      { id: "es-v12", word: "Pan", translation: "Bread", pronunciation: "pahn" },
      { id: "es-v13", word: "Manzana", translation: "Apple", pronunciation: "mahn-SAH-nah" },
      { id: "es-v14", word: "Leche", translation: "Milk", pronunciation: "LEH-cheh" },
      { id: "es-v15", word: "Café", translation: "Coffee", pronunciation: "kah-FEH" },
    ],
    phrases: [
      { id: "es-p5", phrase: "Quiero agua, por favor", translation: "I want water, please", pronunciation: "kee-EH-roh AH-gwah por fah-VOR", context: "Ordering at a restaurant" },
      { id: "es-p6", phrase: "La cuenta, por favor", translation: "The check, please", pronunciation: "lah KWEN-tah por fah-VOR", context: "Asking for the bill" },
    ],
    activities: [
      { id: "es-a9", type: "multipleChoice", instruction: "Choose the correct translation", question: "What is 'Agua'?", correctAnswer: "Water", options: ["Water", "Bread", "Milk", "Coffee"], xp: 5 },
      { id: "es-a10", type: "fillInTheBlank", instruction: "Complete the phrase", question: "Quiero _____, por favor (I want coffee, please)", correctAnswer: "café", xp: 5 },
      { id: "es-a11", type: "translate", instruction: "Translate to Spanish", question: "Apple", correctAnswer: "Manzana", xp: 5 },
      { id: "es-a12", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'La cuenta, por favor' mean?", correctAnswer: "The check, please", options: ["The check, please", "The menu, please", "More water, please", "I'm hungry"], xp: 5 },
    ],
    goals: [
      { id: "es-g5", description: "Learn 5 food and drink words" },
      { id: "es-g6", description: "Practice ordering food" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are María. Role-play a café scene where the student orders food and drinks in Spanish. Keep it fun and encouraging.",
      greeting: "¡Bienvenido al café! Welcome to the café! Let's learn to order food and drinks.",
      focusTopics: ["food vocabulary", "ordering", "polite requests"],
      targetLanguage: "es",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FRENCH
  // ══════════════════════════════════════════════════════════════════════════

  // ── fr-greetings ───────────────────────────────────────────────────────
  {
    id: "fr-greetings",
    unitId: "fr-basics-1",
    languageCode: "fr",
    title: "Greetings",
    description: "Say hello and goodbye in French.",
    icon: "👋",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "fr-v1", word: "Bonjour", translation: "Hello / Good morning", pronunciation: "bon-ZHOOR" },
      { id: "fr-v2", word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
      { id: "fr-v3", word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
      { id: "fr-v4", word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo PLEH" },
      { id: "fr-v5", word: "Bonsoir", translation: "Good evening", pronunciation: "bon-SWAHR" },
    ],
    phrases: [
      { id: "fr-p1", phrase: "Comment allez-vous?", translation: "How are you? (formal)", pronunciation: "koh-MAHN tah-lay VOO", context: "Formal greeting" },
      { id: "fr-p2", phrase: "Ça va?", translation: "How's it going?", pronunciation: "sah VAH", context: "Informal greeting" },
    ],
    activities: [
      { id: "fr-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Bonjour' mean?", correctAnswer: "Hello / Good morning", options: ["Hello / Good morning", "Goodbye", "Good night", "Thank you"], xp: 5 },
      { id: "fr-a2", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Merci' mean?", correctAnswer: "Thank you", options: ["Please", "Sorry", "Thank you", "Hello"], xp: 5 },
      { id: "fr-a3", type: "fillInTheBlank", instruction: "Complete the phrase", question: "Au _____ (Goodbye)", correctAnswer: "revoir", xp: 5 },
      { id: "fr-a4", type: "translate", instruction: "Translate to French", question: "Please", correctAnswer: "S'il vous plaît", xp: 5 },
    ],
    goals: [
      { id: "fr-g1", description: "Learn 5 French greetings" },
      { id: "fr-g2", description: "Complete all activities" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Pierre, a cheerful French teacher. Teach basic greetings. Speak slowly and clearly.",
      greeting: "Bonjour! I'm Pierre. Let's learn to greet people in French!",
      focusTopics: ["greetings", "politeness", "pronunciation"],
      targetLanguage: "fr",
    },
  },

  // ── fr-introductions ──────────────────────────────────────────────────
  {
    id: "fr-introductions",
    unitId: "fr-basics-1",
    languageCode: "fr",
    title: "Introductions",
    description: "Introduce yourself in French.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "fr-v6", word: "Je m'appelle", translation: "My name is", pronunciation: "zhuh mah-PEL" },
      { id: "fr-v7", word: "Oui", translation: "Yes", pronunciation: "wee" },
      { id: "fr-v8", word: "Non", translation: "No", pronunciation: "nohn" },
      { id: "fr-v9", word: "Enchanté(e)", translation: "Nice to meet you", pronunciation: "ahn-shahn-TAY" },
    ],
    phrases: [
      { id: "fr-p3", phrase: "Comment tu t'appelles?", translation: "What's your name?", pronunciation: "koh-MAHN too tah-PEL", context: "Asking someone's name" },
    ],
    activities: [
      { id: "fr-a5", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Je m'appelle' mean?", correctAnswer: "My name is", options: ["My name is", "I like", "I have", "I want"], xp: 5 },
      { id: "fr-a6", type: "fillInTheBlank", instruction: "Complete the sentence", question: "Comment tu t'_____? (What's your name?)", correctAnswer: "appelles", xp: 5 },
      { id: "fr-a7", type: "translate", instruction: "Translate to French", question: "Nice to meet you", correctAnswer: "Enchanté", xp: 5 },
    ],
    goals: [
      { id: "fr-g3", description: "Introduce yourself in French" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Pierre. Practice introductions — ask the student their name and where they are from. Use simple French.",
      greeting: "Bonjour encore! Today we'll practice introducing ourselves. Comment tu t'appelles?",
      focusTopics: ["introductions", "names", "countries"],
      targetLanguage: "fr",
    },
  },

  // ── fr-travel-basics ──────────────────────────────────────────────────
  {
    id: "fr-travel-basics",
    unitId: "fr-travel-1",
    languageCode: "fr",
    title: "Travel Basics",
    description: "Essential phrases for traveling in France.",
    icon: "🗼",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "fr-v10", word: "L'hôtel", translation: "The hotel", pronunciation: "loh-TEL" },
      { id: "fr-v11", word: "La gare", translation: "The train station", pronunciation: "lah GAHR" },
      { id: "fr-v12", word: "L'aéroport", translation: "The airport", pronunciation: "lah-eh-roh-POR" },
      { id: "fr-v13", word: "Le taxi", translation: "The taxi", pronunciation: "luh tahk-SEE" },
    ],
    phrases: [
      { id: "fr-p4", phrase: "Où est la gare?", translation: "Where is the train station?", pronunciation: "oo eh lah GAHR", context: "Asking for directions" },
      { id: "fr-p5", phrase: "Je voudrais une chambre", translation: "I would like a room", pronunciation: "zhuh voo-DREH oon SHAHM-bruh", context: "At a hotel" },
    ],
    activities: [
      { id: "fr-a8", type: "multipleChoice", instruction: "Choose the correct translation", question: "What is 'La gare'?", correctAnswer: "The train station", options: ["The hotel", "The train station", "The airport", "The taxi"], xp: 5 },
      { id: "fr-a9", type: "fillInTheBlank", instruction: "Complete the question", question: "Où est _____? (Where is the airport?)", correctAnswer: "l'aéroport", xp: 5 },
      { id: "fr-a10", type: "translate", instruction: "Translate to French", question: "The hotel", correctAnswer: "L'hôtel", xp: 5 },
    ],
    goals: [
      { id: "fr-g4", description: "Learn 4 travel words" },
      { id: "fr-g5", description: "Ask for directions" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Pierre. Role-play a travel scenario — the student just arrived in Paris and needs directions. Keep it simple and fun.",
      greeting: "Bienvenue à Paris! Welcome to Paris! Let's learn some travel phrases.",
      focusTopics: ["travel", "directions", "hotels"],
      targetLanguage: "fr",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HINDI
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "hi-greetings",
    unitId: "hi-basics-1",
    languageCode: "hi",
    title: "Greetings",
    description: "Basic Hindi greetings and polite words.",
    icon: "🙏",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "hi-v1", word: "नमस्ते", translation: "Hello / Greetings", pronunciation: "nuh-MUS-tay" },
      { id: "hi-v2", word: "धन्यवाद", translation: "Thank you", pronunciation: "dhun-yuh-VAHD" },
      { id: "hi-v3", word: "हाँ", translation: "Yes", pronunciation: "haan" },
      { id: "hi-v4", word: "नहीं", translation: "No", pronunciation: "nuh-HEEN" },
      { id: "hi-v5", word: "कृपया", translation: "Please", pronunciation: "KRIP-yah" },
    ],
    phrases: [
      { id: "hi-p1", phrase: "आप कैसे हैं?", translation: "How are you? (formal)", pronunciation: "aap KAI-say HAIN", context: "Formal greeting" },
      { id: "hi-p2", phrase: "मेरा नाम... है", translation: "My name is...", pronunciation: "MEH-rah naam ... hai", context: "Self-introduction" },
    ],
    activities: [
      { id: "hi-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'नमस्ते' mean?", correctAnswer: "Hello / Greetings", options: ["Hello / Greetings", "Goodbye", "Thank you", "Sorry"], xp: 5 },
      { id: "hi-a2", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'धन्यवाद' mean?", correctAnswer: "Thank you", options: ["Please", "Yes", "Thank you", "No"], xp: 5 },
      { id: "hi-a3", type: "fillInTheBlank", instruction: "Complete the phrase", question: "आप _____ हैं? (How are you?)", correctAnswer: "कैसे", xp: 5 },
      { id: "hi-a4", type: "translate", instruction: "Translate to Hindi", question: "Please", correctAnswer: "कृपया", xp: 5 },
    ],
    goals: [
      { id: "hi-g1", description: "Learn 5 Hindi greetings" },
      { id: "hi-g2", description: "Complete all activities" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Priya, a warm Hindi teacher. Teach Namaste culture, basic greetings, and polite expressions. Use transliteration to help with pronunciation.",
      greeting: "नमस्ते! I'm Priya. Let's learn to greet people in Hindi!",
      focusTopics: ["greetings", "politeness", "Devanagari basics"],
      targetLanguage: "hi",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JAPANESE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "ja-greetings",
    unitId: "ja-basics-1",
    languageCode: "ja",
    title: "Greetings",
    description: "Essential Japanese greetings.",
    icon: "⛩️",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ja-v1", word: "こんにちは", translation: "Hello", pronunciation: "kon-NEE-chee-wah" },
      { id: "ja-v2", word: "さようなら", translation: "Goodbye", pronunciation: "sah-YOH-nah-rah" },
      { id: "ja-v3", word: "ありがとう", translation: "Thank you", pronunciation: "ah-ree-GAH-toh" },
      { id: "ja-v4", word: "はい", translation: "Yes", pronunciation: "hai" },
      { id: "ja-v5", word: "いいえ", translation: "No", pronunciation: "ee-eh" },
    ],
    phrases: [
      { id: "ja-p1", phrase: "お元気ですか？", translation: "How are you?", pronunciation: "oh-GEN-kee DES-kah", context: "Polite greeting" },
      { id: "ja-p2", phrase: "はじめまして", translation: "Nice to meet you", pronunciation: "hah-jee-meh-MASH-teh", context: "First meeting" },
    ],
    activities: [
      { id: "ja-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'こんにちは' mean?", correctAnswer: "Hello", options: ["Hello", "Goodbye", "Thank you", "Sorry"], xp: 5 },
      { id: "ja-a2", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'ありがとう' mean?", correctAnswer: "Thank you", options: ["Hello", "Please", "Thank you", "Yes"], xp: 5 },
      { id: "ja-a3", type: "fillInTheBlank", instruction: "Complete the phrase", question: "お元気_____か？ (How are you?)", correctAnswer: "です", xp: 5 },
      { id: "ja-a4", type: "translate", instruction: "Translate to Japanese", question: "Goodbye", correctAnswer: "さようなら", xp: 5 },
    ],
    goals: [
      { id: "ja-g1", description: "Learn 5 Japanese greetings" },
      { id: "ja-g2", description: "Complete all activities" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Yuki, a patient Japanese teacher. Teach basic greetings with correct politeness levels. Help with pronunciation.",
      greeting: "こんにちは! I'm Yuki. Let's learn Japanese greetings together!",
      focusTopics: ["greetings", "politeness levels", "pronunciation"],
      targetLanguage: "ja",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GERMAN
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "de-greetings",
    unitId: "de-basics-1",
    languageCode: "de",
    title: "Greetings",
    description: "Say hello and goodbye in German.",
    icon: "🍺",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "de-v1", word: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
      { id: "de-v2", word: "Tschüss", translation: "Bye", pronunciation: "chooss" },
      { id: "de-v3", word: "Danke", translation: "Thank you", pronunciation: "DAHN-kuh" },
      { id: "de-v4", word: "Bitte", translation: "Please / You're welcome", pronunciation: "BIT-uh" },
      { id: "de-v5", word: "Guten Morgen", translation: "Good morning", pronunciation: "GOO-ten MOR-gen" },
    ],
    phrases: [
      { id: "de-p1", phrase: "Wie geht es Ihnen?", translation: "How are you? (formal)", pronunciation: "vee gayt es EE-nen", context: "Formal greeting" },
      { id: "de-p2", phrase: "Ich heiße...", translation: "My name is...", pronunciation: "ikh HY-suh", context: "Self-introduction" },
    ],
    activities: [
      { id: "de-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Hallo' mean?", correctAnswer: "Hello", options: ["Hello", "Goodbye", "Thank you", "Please"], xp: 5 },
      { id: "de-a2", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Danke' mean?", correctAnswer: "Thank you", options: ["Sorry", "Thank you", "Hello", "Goodbye"], xp: 5 },
      { id: "de-a3", type: "fillInTheBlank", instruction: "Complete the phrase", question: "Guten _____ (Good morning)", correctAnswer: "Morgen", xp: 5 },
      { id: "de-a4", type: "translate", instruction: "Translate to German", question: "Please", correctAnswer: "Bitte", xp: 5 },
    ],
    goals: [
      { id: "de-g1", description: "Learn 5 German greetings" },
      { id: "de-g2", description: "Complete all activities" },
    ],
    aiTeacherPrompt: {
      systemPrompt: "You are Hans, an enthusiastic German teacher. Teach basic greetings and polite expressions. Be encouraging and patient.",
      greeting: "Hallo! I'm Hans. Let's learn German greetings!",
      focusTopics: ["greetings", "polite expressions", "pronunciation"],
      targetLanguage: "de",
    },
  },
];

// ---- Helpers ----------------------------------------------------------------

/** Get all lessons for a specific language. */
export function getLessonsByLanguage(languageCode: string): Lesson[] {
  return lessons.filter((l) => l.languageCode === languageCode);
}

/** Get all lessons belonging to a specific unit. */
export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId);
}

/** Get a single lesson by its ID. */
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

/** Get total XP available for a unit. */
export function getUnitTotalXP(unitId: string): number {
  return getLessonsByUnit(unitId).reduce((sum, l) => sum + l.xpReward, 0);
}
