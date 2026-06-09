import type { Lesson } from "@/types/learning";

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

  // ── es-numbers ─────────────────────────────────────────────────────────
  {
    id: "es-numbers",
    unitId: "es-basics-1",
    languageCode: "es",
    title: "Numbers 1-10",
    description: "Learn to count to ten in Spanish.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "es-v-n1", word: "Uno", translation: "One", pronunciation: "OO-noh" },
      { id: "es-v-n2", word: "Dos", translation: "Two", pronunciation: "dohs" },
      { id: "es-v-n3", word: "Tres", translation: "Three", pronunciation: "trehs" },
      { id: "es-v-n4", word: "Cuatro", translation: "Four", pronunciation: "KWAH-troh" },
      { id: "es-v-n5", word: "Cinco", translation: "Five", pronunciation: "SEEN-coh" },
    ],
    phrases: [
      { id: "es-p-n1", phrase: "Tengo un hermano", translation: "I have one brother", pronunciation: "TEN-goh oon ehr-MAH-noh" },
    ],
    activities: [
      { id: "es-a-n1", type: "multipleChoice", instruction: "Translate 'Uno'", question: "Uno", correctAnswer: "One", options: ["One", "Two", "Three", "Four"], xp: 5 },
    ],
    goals: [
      { id: "es-g-n1", description: "Count up to 5" },
    ],
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
  },

  // ── es-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "es-at-cafe",
    unitId: "es-food-1",
    languageCode: "es",
    title: "At the Café",
    description: "Order coffee and pastries like a local.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "es-v-c1", word: "Té", translation: "Tea", pronunciation: "teh" },
      { id: "es-v-c2", word: "Azúcar", translation: "Sugar", pronunciation: "ah-SOO-car" },
      { id: "es-v-c3", word: "Pastel", translation: "Cake", pronunciation: "pahs-TEL" },
    ],
    phrases: [
      { id: "es-p-c1", phrase: "Un café con leche", translation: "A coffee with milk", pronunciation: "oon kah-FEH con LEH-cheh" },
    ],
    activities: [
      { id: "es-a-c1", type: "multipleChoice", instruction: "Translate 'Té'", question: "Té", correctAnswer: "Tea", options: ["Tea", "Coffee", "Milk"], xp: 5 },
    ],
    goals: [
      { id: "es-g-c1", description: "Order coffee with milk" },
    ],
  },

  // ── es-restaurant ──────────────────────────────────────────────────────
  {
    id: "es-restaurant",
    unitId: "es-food-1",
    languageCode: "es",
    title: "At the Restaurant",
    description: "Request a table and order dishes.",
    icon: "🍝",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "es-v-r1", word: "Mesa", translation: "Table", pronunciation: "MEH-sah" },
      { id: "es-v-r2", word: "Menú", translation: "Menu", pronunciation: "meh-NOO" },
      { id: "es-v-r3", word: "Comida", translation: "Food / Meal", pronunciation: "coh-MEE-dah" },
    ],
    phrases: [
      { id: "es-p-r1", phrase: "Una mesa para dos", translation: "A table for two", pronunciation: "OO-nah MEH-sah PAH-rah dohs" },
    ],
    activities: [
      { id: "es-a-r1", type: "multipleChoice", instruction: "Translate 'Mesa'", question: "Mesa", correctAnswer: "Table", options: ["Table", "Chair", "Menu"], xp: 5 },
    ],
    goals: [
      { id: "es-g-r1", description: "Ask for a table" },
    ],
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
    ],
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
  },

  // ── fr-numbers ─────────────────────────────────────────────────────────
  {
    id: "fr-numbers",
    unitId: "fr-basics-1",
    languageCode: "fr",
    title: "Numbers 1-10",
    description: "Learn to count in French.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "fr-v-n1", word: "Un", translation: "One", pronunciation: "uhn" },
      { id: "fr-v-n2", word: "Deux", translation: "Two", pronunciation: "duh" },
      { id: "fr-v-n3", word: "Trois", translation: "Three", pronunciation: "trwah" },
      { id: "fr-v-n4", word: "Quatre", translation: "Four", pronunciation: "katr" },
      { id: "fr-v-n5", word: "Cinq", translation: "Five", pronunciation: "sank" },
    ],
    phrases: [
      { id: "fr-p-n1", phrase: "J'ai trois chats", translation: "I have three cats", pronunciation: "zhay trwah shah" },
    ],
    activities: [
      { id: "fr-a-n1", type: "multipleChoice", instruction: "Translate 'Deux'", question: "Deux", correctAnswer: "Two", options: ["One", "Two", "Three"], xp: 5 },
    ],
    goals: [
      { id: "fr-g-n1", description: "Learn numbers 1 to 5" },
    ],
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
    ],
    goals: [
      { id: "fr-g4", description: "Learn 4 travel words" },
    ],
  },

  // ── fr-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "fr-at-cafe",
    unitId: "fr-travel-1",
    languageCode: "fr",
    title: "At the Café",
    description: "Order coffee and croissants like a Parisienne.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "fr-v-c1", word: "Le café", translation: "The coffee", pronunciation: "luh kah-fay" },
      { id: "fr-v-c2", word: "Le croissant", translation: "The croissant", pronunciation: "luh krwa-sahn" },
      { id: "fr-v-c3", word: "L'addition", translation: "The bill / check", pronunciation: "lah-dee-syohn" },
    ],
    phrases: [
      { id: "fr-p-c1", phrase: "Un café s'il vous plaît", translation: "A coffee please", pronunciation: "uhn kah-fay seel voo play" },
    ],
    activities: [
      { id: "fr-a-c1", type: "multipleChoice", instruction: "Translate 'Croissant'", question: "Croissant", correctAnswer: "Croissant", options: ["Croissant", "Coffee", "Tea"], xp: 5 },
    ],
    goals: [
      { id: "fr-g-c1", description: "Order coffee at a French cafe" },
    ],
  },

  // ── fr-directions ──────────────────────────────────────────────────────
  {
    id: "fr-directions",
    unitId: "fr-travel-1",
    languageCode: "fr",
    title: "Asking Directions",
    description: "Navigate around French cities.",
    icon: "🗺️",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 20,
    vocabulary: [
      { id: "fr-v-d1", word: "À gauche", translation: "On the left", pronunciation: "ah gohsh" },
      { id: "fr-v-d2", word: "À droite", translation: "On the right", pronunciation: "ah drwaht" },
      { id: "fr-v-d3", word: "Tout droit", translation: "Straight ahead", pronunciation: "too drwah" },
    ],
    phrases: [
      { id: "fr-p-d1", phrase: "Tournez à gauche", translation: "Turn left", pronunciation: "toor-nay ah gohsh" },
    ],
    activities: [
      { id: "fr-a-d1", type: "multipleChoice", instruction: "Translate 'À gauche'", question: "À gauche", correctAnswer: "On the left", options: ["On the left", "On the right", "Straight ahead"], xp: 5 },
    ],
    goals: [
      { id: "fr-g-d1", description: "Learn directional words" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JAPANESE
  // ══════════════════════════════════════════════════════════════════════════

  // ── ja-greetings ───────────────────────────────────────────────────────
  {
    id: "ja-greetings",
    unitId: "ja-basics-1",
    languageCode: "ja",
    title: "Greetings",
    description: "Essential Japanese greetings.",
    icon: "👋",
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
    ],
    goals: [
      { id: "ja-g1", description: "Learn 5 Japanese greetings" },
    ],
  },

  // ── ja-introductions ───────────────────────────────────────────────────
  {
    id: "ja-introductions",
    unitId: "ja-basics-1",
    languageCode: "ja",
    title: "Introductions",
    description: "Introduce yourself in Japanese.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ja-v6", word: "わたし", translation: "I / Me", pronunciation: "wah-tah-shee" },
      { id: "ja-v7", word: "なまえ", translation: "Name", pronunciation: "nah-mah-eh" },
      { id: "ja-v8", word: "ともだち", translation: "Friend", pronunciation: "toh-moh-dah-chee" },
    ],
    phrases: [
      { id: "ja-p3", phrase: "名前は何ですか？", translation: "What is your name?", pronunciation: "nah-mah-eh wah nan des kah" },
    ],
    activities: [
      { id: "ja-a2", type: "multipleChoice", instruction: "Translate 'わたし'", question: "わたし", correctAnswer: "I / Me", options: ["I / Me", "Friend", "Teacher"], xp: 5 },
    ],
    goals: [
      { id: "ja-g2", description: "Say your name" },
    ],
  },

  // ── ja-numbers ─────────────────────────────────────────────────────────
  {
    id: "ja-numbers",
    unitId: "ja-basics-1",
    languageCode: "ja",
    title: "Numbers 1-10",
    description: "Learn to count in Japanese.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ja-v-n1", word: "いち", translation: "One", pronunciation: "ee-chee" },
      { id: "ja-v-n2", word: "に", translation: "Two", pronunciation: "nee" },
      { id: "ja-v-n3", word: "さん", translation: "Three", pronunciation: "sahn" },
      { id: "ja-v-n4", word: "よん", translation: "Four", pronunciation: "yohn" },
      { id: "ja-v-n5", word: "ご", translation: "Five", pronunciation: "goh" },
    ],
    phrases: [
      { id: "ja-p-n1", phrase: "りんごが三個あります", translation: "There are three apples", pronunciation: "rin-goh gah san-koh ah-ri-mas" },
    ],
    activities: [
      { id: "ja-a-n1", type: "multipleChoice", instruction: "Translate 'さん'", question: "さん", correctAnswer: "Three", options: ["One", "Three", "Five"], xp: 5 },
    ],
    goals: [
      { id: "ja-g-n1", description: "Count 1 to 5" },
    ],
  },

  // ── ja-food-basics ─────────────────────────────────────────────────────
  {
    id: "ja-food-basics",
    unitId: "ja-food-1",
    languageCode: "ja",
    title: "Food Basics",
    description: "Common foods and beverages in Japan.",
    icon: "🍽️",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ja-v-f1", word: "みず", translation: "Water", pronunciation: "mee-zoo" },
      { id: "ja-v-f2", word: "ごはん", translation: "Rice / Meal", pronunciation: "goh-hahn" },
      { id: "ja-v-f3", word: "おちゃ", translation: "Green tea", pronunciation: "oh-chah" },
    ],
    phrases: [
      { id: "ja-p-f1", phrase: "お茶をください", translation: "Green tea please", pronunciation: "oh-chah oh koo-dah-sy-ee" },
    ],
    activities: [
      { id: "ja-a-f1", type: "multipleChoice", instruction: "Translate 'みず'", question: "みず", correctAnswer: "Water", options: ["Water", "Rice", "Tea"], xp: 5 },
    ],
    goals: [
      { id: "ja-g-f1", description: "Learn 3 food words" },
    ],
  },

  // ── ja-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "ja-at-cafe",
    unitId: "ja-food-1",
    languageCode: "ja",
    title: "At the Café",
    description: "Order drinks and cakes in Japanese.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ja-v-c1", word: "コーヒー", translation: "Coffee", pronunciation: "koh-hee" },
      { id: "ja-v-c2", word: "ケーキ", translation: "Cake", pronunciation: "keh-kee" },
      { id: "ja-v-c3", word: "メニュー", translation: "Menu", pronunciation: "meh-nyoo" },
    ],
    phrases: [
      { id: "ja-p-c1", phrase: "コーヒーを二つください", translation: "Two coffees, please", pronunciation: "koh-hee oh foo-tah-tsu koo-dah-sy-ee" },
    ],
    activities: [
      { id: "ja-a-c1", type: "multipleChoice", instruction: "Translate 'コーヒー'", question: "コーヒー", correctAnswer: "Coffee", options: ["Coffee", "Cake", "Tea"], xp: 5 },
    ],
    goals: [
      { id: "ja-g-c1", description: "Order coffee" },
    ],
  },

  // ── ja-sushi ───────────────────────────────────────────────────────────
  {
    id: "ja-sushi",
    unitId: "ja-food-1",
    languageCode: "ja",
    title: "At the Sushi Bar",
    description: "Learn names of popular sushi items and how to order.",
    icon: "🍣",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "ja-v-s1", word: "すし", translation: "Sushi", pronunciation: "soo-shee" },
      { id: "ja-v-s2", word: "わさび", translation: "Wasabi", pronunciation: "wah-sah-bee" },
      { id: "ja-v-s3", word: "お会計", translation: "The bill", pronunciation: "oh-kye-kay" },
    ],
    phrases: [
      { id: "ja-p-s1", phrase: "わさびは抜きでお願いします", translation: "Without wasabi, please", pronunciation: "wah-sah-bee wah noo-kee deh oh-neh-guy-shee-mas" },
    ],
    activities: [
      { id: "ja-a-s1", type: "multipleChoice", instruction: "Translate 'すし'", question: "すし", correctAnswer: "Sushi", options: ["Sushi", "Wasabi", "Bill"], xp: 5 },
    ],
    goals: [
      { id: "ja-g-s1", description: "Order sushi without wasabi" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GERMAN
  // ══════════════════════════════════════════════════════════════════════════

  // ── de-greetings ───────────────────────────────────────────────────────
  {
    id: "de-greetings",
    unitId: "de-basics-1",
    languageCode: "de",
    title: "Greetings",
    description: "Say hello and goodbye in German.",
    icon: "👋",
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
    ],
    activities: [
      { id: "de-a1", type: "multipleChoice", instruction: "Choose the correct translation", question: "What does 'Hallo' mean?", correctAnswer: "Hello", options: ["Hello", "Goodbye", "Thank you", "Please"], xp: 5 },
    ],
    goals: [
      { id: "de-g1", description: "Learn basic German greetings" },
    ],
  },

  // ── de-introductions ───────────────────────────────────────────────────
  {
    id: "de-introductions",
    unitId: "de-basics-1",
    languageCode: "de",
    title: "Introductions",
    description: "Introduce yourself in German.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "de-v6", word: "Ich", translation: "I", pronunciation: "ikh" },
      { id: "de-v7", word: "Heiße", translation: "Am named", pronunciation: "HY-suh" },
      { id: "de-v8", word: "Name", translation: "Name", pronunciation: "NAH-muh" },
    ],
    phrases: [
      { id: "de-p2", phrase: "Ich heiße John", translation: "My name is John", pronunciation: "ikh hy-suh John" },
    ],
    activities: [
      { id: "de-a2", type: "multipleChoice", instruction: "Translate 'Ich'", question: "Ich", correctAnswer: "I", options: ["I", "You", "He"], xp: 5 },
    ],
    goals: [
      { id: "de-g2", description: "Introduce yourself" },
    ],
  },

  // ── de-numbers ─────────────────────────────────────────────────────────
  {
    id: "de-numbers",
    unitId: "de-basics-1",
    languageCode: "de",
    title: "Numbers 1-10",
    description: "Count from one to ten in German.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "de-v-n1", word: "Eins", translation: "One", pronunciation: "yns" },
      { id: "de-v-n2", word: "Zwei", translation: "Two", pronunciation: "tsvy" },
      { id: "de-v-n3", word: "Drei", translation: "Three", pronunciation: "dry" },
      { id: "de-v-n4", word: "Vier", translation: "Four", pronunciation: "feer" },
      { id: "de-v-n5", word: "Fünf", translation: "Five", pronunciation: "fewnf" },
    ],
    phrases: [
      { id: "de-p-n1", phrase: "Ich habe zwei Hunde", translation: "I have two dogs", pronunciation: "ikh HAH-buh tsvy HOON-duh" },
    ],
    activities: [
      { id: "de-a-n1", type: "multipleChoice", instruction: "Translate 'Drei'", question: "Drei", correctAnswer: "Three", options: ["One", "Three", "Five"], xp: 5 },
    ],
    goals: [
      { id: "de-g-n1", description: "Count to 5 in German" },
    ],
  },

  // ── de-food-basics ─────────────────────────────────────────────────────
  {
    id: "de-food-basics",
    unitId: "de-food-1",
    languageCode: "de",
    title: "Food Basics",
    description: "Learn everyday German food terms.",
    icon: "🍽️",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "de-v-f1", word: "Wasser", translation: "Water", pronunciation: "VAHS-er" },
      { id: "de-v-f2", word: "Brot", translation: "Bread", pronunciation: "broht" },
      { id: "de-v-f3", word: "Apfel", translation: "Apple", pronunciation: "AHP-fel" },
    ],
    phrases: [
      { id: "de-p-f1", phrase: "Brot und Wasser", translation: "Bread and water", pronunciation: "broht oont VAHS-er" },
    ],
    activities: [
      { id: "de-a-f1", type: "multipleChoice", instruction: "Translate 'Brot'", question: "Brot", correctAnswer: "Bread", options: ["Bread", "Apple", "Water"], xp: 5 },
    ],
    goals: [
      { id: "de-g-f1", description: "Learn basic foods" },
    ],
  },

  // ── de-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "de-at-cafe",
    unitId: "de-food-1",
    languageCode: "de",
    title: "At the Café",
    description: "Order coffee and German pastries.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "de-v-c1", word: "Kaffee", translation: "Coffee", pronunciation: "KAH-fay" },
      { id: "de-v-c2", word: "Kuchen", translation: "Cake", pronunciation: "KOO-khen" },
      { id: "de-v-c3", word: "Milch", translation: "Milk", pronunciation: "milkh" },
    ],
    phrases: [
      { id: "de-p-c1", phrase: "Einen Kaffee bitte", translation: "A coffee please", pronunciation: "EYE-nen KAH-fay BIT-uh" },
    ],
    activities: [
      { id: "de-a-c1", type: "multipleChoice", instruction: "Translate 'Kaffee'", question: "Kaffee", correctAnswer: "Coffee", options: ["Coffee", "Tea", "Cake"], xp: 5 },
    ],
    goals: [
      { id: "de-g-c1", description: "Order coffee in German" },
    ],
  },

  // ── de-restaurant ──────────────────────────────────────────────────────
  {
    id: "de-restaurant",
    unitId: "de-food-1",
    languageCode: "de",
    title: "At the Restaurant",
    description: "Request the menu and pay the bill.",
    icon: "🍻",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "de-v-r1", word: "Bier", translation: "Beer", pronunciation: "beer" },
      { id: "de-v-r2", word: "Speisekarte", translation: "Menu", pronunciation: "SHPY-zuh-kar-tuh" },
      { id: "de-v-r3", word: "Rechnung", translation: "Bill / Check", pronunciation: "REKH-noong" },
    ],
    phrases: [
      { id: "de-p-r1", phrase: "Die Rechnung bitte", translation: "The bill please", pronunciation: "dee REKH-noong BIT-uh" },
    ],
    activities: [
      { id: "de-a-r1", type: "multipleChoice", instruction: "Translate 'Bier'", question: "Bier", correctAnswer: "Beer", options: ["Beer", "Water", "Wine"], xp: 5 },
    ],
    goals: [
      { id: "de-g-r1", description: "Ask for the bill" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KOREAN
  // ══════════════════════════════════════════════════════════════════════════

  // ── ko-greetings ───────────────────────────────────────────────────────
  {
    id: "ko-greetings",
    unitId: "ko-basics-1",
    languageCode: "ko",
    title: "Greetings",
    description: "Say hello and thank you in Korean.",
    icon: "👋",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ko-v1", word: "안녕하세요", translation: "Hello / How are you?", pronunciation: "an-nyeong-ha-se-yo" },
      { id: "ko-v2", word: "감사합니다", translation: "Thank you", pronunciation: "gam-sa-ham-ni-da" },
      { id: "ko-v3", word: "네", translation: "Yes", pronunciation: "ne" },
      { id: "ko-v4", word: "아니요", translation: "No", pronunciation: "a-ni-yo" },
      { id: "ko-v5", word: "잘 가요", translation: "Goodbye", pronunciation: "jal ga-yo" },
    ],
    phrases: [
      { id: "ko-p1", phrase: "만나서 반갑습니다", translation: "Nice to meet you", pronunciation: "man-na-seo ban-gap-seum-ni-da" },
    ],
    activities: [
      { id: "ko-a1", type: "multipleChoice", instruction: "Translate '안녕하세요'", question: "안녕하세요", correctAnswer: "Hello / How are you?", options: ["Hello / How are you?", "Thank you", "Goodbye"], xp: 5 },
    ],
    goals: [
      { id: "ko-g1", description: "Learn 5 basic greetings" },
    ],
  },

  // ── ko-introductions ───────────────────────────────────────────────────
  {
    id: "ko-introductions",
    unitId: "ko-basics-1",
    languageCode: "ko",
    title: "Introductions",
    description: "Say your name and nationality.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ko-v6", word: "저", translation: "I / Me (polite)", pronunciation: "jeo" },
      { id: "ko-v7", word: "이름", translation: "Name", pronunciation: "i-reum" },
      { id: "ko-v8", word: "사람", translation: "Person / Nationality", pronunciation: "sa-ram" },
    ],
    phrases: [
      { id: "ko-p2", phrase: "제 이름은... 입니다", translation: "My name is...", pronunciation: "je i-reum-eun ... im-ni-da" },
    ],
    activities: [
      { id: "ko-a2", type: "multipleChoice", instruction: "Translate '이름'", question: "이름", correctAnswer: "Name", options: ["Name", "I", "Friend"], xp: 5 },
    ],
    goals: [
      { id: "ko-g2", description: "Introduce yourself in Korean" },
    ],
  },

  // ── ko-numbers ─────────────────────────────────────────────────────────
  {
    id: "ko-numbers",
    unitId: "ko-basics-1",
    languageCode: "ko",
    title: "Numbers 1-10",
    description: "Learn Native Korean numbers.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ko-v-n1", word: "하나", translation: "One", pronunciation: "ha-na" },
      { id: "ko-v-n2", word: "둘", translation: "Two", pronunciation: "dul" },
      { id: "ko-v-n3", word: "셋", translation: "Three", pronunciation: "set" },
      { id: "ko-v-n4", word: "넷", translation: "Four", pronunciation: "net" },
      { id: "ko-v-n5", word: "다섯", translation: "Five", pronunciation: "da-seot" },
    ],
    phrases: [
      { id: "ko-p-n1", phrase: "커피 한 잔", translation: "One cup of coffee", pronunciation: "keo-pi han jan" },
    ],
    activities: [
      { id: "ko-a-n1", type: "multipleChoice", instruction: "Translate '셋'", question: "셋", correctAnswer: "Three", options: ["One", "Three", "Five"], xp: 5 },
    ],
    goals: [
      { id: "ko-g-n1", description: "Count to 5 in Korean" },
    ],
  },

  // ── ko-food-basics ─────────────────────────────────────────────────────
  {
    id: "ko-food-basics",
    unitId: "ko-food-1",
    languageCode: "ko",
    title: "Food Basics",
    description: "Common foods in South Korea.",
    icon: "🍽️",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ko-v-f1", word: "물", translation: "Water", pronunciation: "mul" },
      { id: "ko-v-f2", word: "밥", translation: "Rice / Meal", pronunciation: "bap" },
      { id: "ko-v-f3", word: "김치", translation: "Kimchi", pronunciation: "gim-chi" },
    ],
    phrases: [
      { id: "ko-p-f1", phrase: "물 좀 주세요", translation: "Please give me some water", pronunciation: "mul jom ju-se-yo" },
    ],
    activities: [
      { id: "ko-a-f1", type: "multipleChoice", instruction: "Translate '밥'", question: "밥", correctAnswer: "Rice / Meal", options: ["Rice / Meal", "Water", "Kimchi"], xp: 5 },
    ],
    goals: [
      { id: "ko-g-f1", description: "Ask for water politely" },
    ],
  },

  // ── ko-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "ko-at-cafe",
    unitId: "ko-food-1",
    languageCode: "ko",
    title: "At the Café",
    description: "Order iced americano and sweets.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "ko-v-c1", word: "커피", translation: "Coffee", pronunciation: "keo-pi" },
      { id: "ko-v-c2", word: "차", translation: "Tea", pronunciation: "cha" },
      { id: "ko-v-c3", word: "아이스 아메리카노", translation: "Iced Americano", pronunciation: "a-i-seu a-me-ri-ka-no" },
    ],
    phrases: [
      { id: "ko-p-c1", phrase: "아아 한 잔 주세요", translation: "One Iced Americano, please", pronunciation: "a-a han jan ju-se-yo" },
    ],
    activities: [
      { id: "ko-a-c1", type: "multipleChoice", instruction: "Translate '커피'", question: "커피", correctAnswer: "Coffee", options: ["Coffee", "Tea", "Water"], xp: 5 },
    ],
    goals: [
      { id: "ko-g-c1", description: "Order Iced Americano" },
    ],
  },

  // ── ko-kbbq ────────────────────────────────────────────────────────────
  {
    id: "ko-kbbq",
    unitId: "ko-food-1",
    languageCode: "ko",
    title: "At the K-BBQ",
    description: "Order delicious grilled meats.",
    icon: "🥩",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "ko-v-s1", word: "고기", translation: "Meat", pronunciation: "go-gi" },
      { id: "ko-v-s2", word: "삼겹살", translation: "Pork belly", pronunciation: "sam-gyeop-sal" },
      { id: "ko-v-s3", word: "소주", translation: "Soju", pronunciation: "so-ju" },
    ],
    phrases: [
      { id: "ko-p-s1", phrase: "삼겹살 2인분 주세요", translation: "Two portions of pork belly, please", pronunciation: "sam-gyeop-sal i-in-bun ju-se-yo" },
    ],
    activities: [
      { id: "ko-a-s1", type: "multipleChoice", instruction: "Translate '고기'", question: "고기", correctAnswer: "Meat", options: ["Meat", "Rice", "Soju"], xp: 5 },
    ],
    goals: [
      { id: "ko-g-s1", description: "Order K-BBQ meat" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CHINESE
  // ══════════════════════════════════════════════════════════════════════════

  // ── zh-greetings ───────────────────────────────────────────────────────
  {
    id: "zh-greetings",
    unitId: "zh-basics-1",
    languageCode: "zh",
    title: "Greetings",
    description: "Say hello and goodbye in Mandarin.",
    icon: "👋",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "zh-v1", word: "你好", translation: "Hello", pronunciation: "nǐ hǎo" },
      { id: "zh-v2", word: "再见", translation: "Goodbye", pronunciation: "zài jiàn" },
      { id: "zh-v3", word: "谢谢", translation: "Thank you", pronunciation: "xièxie" },
      { id: "zh-v4", word: "不客气", translation: "You're welcome", pronunciation: "bú kèqi" },
      { id: "zh-v5", word: "请", translation: "Please", pronunciation: "qǐng" },
    ],
    phrases: [
      { id: "zh-p1", phrase: "你好吗？", translation: "How are you?", pronunciation: "nǐ hǎo ma" },
    ],
    activities: [
      { id: "zh-a1", type: "multipleChoice", instruction: "Translate '你好'", question: "你好", correctAnswer: "Hello", options: ["Hello", "Goodbye", "Thank you"], xp: 5 },
    ],
    goals: [
      { id: "zh-g1", description: "Learn 5 basic Chinese greetings" },
    ],
  },

  // ── zh-introductions ───────────────────────────────────────────────────
  {
    id: "zh-introductions",
    unitId: "zh-basics-1",
    languageCode: "zh",
    title: "Introductions",
    description: "Say your name and ask someone's name.",
    icon: "🤝",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "zh-v6", word: "我", translation: "I / Me", pronunciation: "wǒ" },
      { id: "zh-v7", word: "叫", translation: "Call / Named", pronunciation: "jiào" },
      { id: "zh-v8", word: "名字", translation: "Name", pronunciation: "míngzi" },
    ],
    phrases: [
      { id: "zh-p2", phrase: "我叫李明", translation: "My name is Li Ming", pronunciation: "wǒ jiào lǐ míng" },
    ],
    activities: [
      { id: "zh-a2", type: "multipleChoice", instruction: "Translate '我'", question: "我", correctAnswer: "I / Me", options: ["I / Me", "You", "He"], xp: 5 },
    ],
    goals: [
      { id: "zh-g2", description: "Introduce yourself in Chinese" },
    ],
  },

  // ── zh-numbers ─────────────────────────────────────────────────────────
  {
    id: "zh-numbers",
    unitId: "zh-basics-1",
    languageCode: "zh",
    title: "Numbers 1-10",
    description: "Learn to count in Mandarin Chinese.",
    icon: "🔢",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "zh-v-n1", word: "一", translation: "One", pronunciation: "yī" },
      { id: "zh-v-n2", word: "二", translation: "Two", pronunciation: "èr" },
      { id: "zh-v-n3", word: "三", translation: "Three", pronunciation: "sān" },
      { id: "zh-v-n4", word: "四", translation: "Four", pronunciation: "sì" },
      { id: "zh-v-n5", word: "五", translation: "Five", pronunciation: "wǔ" },
    ],
    phrases: [
      { id: "zh-p-n1", phrase: "三个苹果", translation: "Three apples", pronunciation: "sān gè píngguǒ" },
    ],
    activities: [
      { id: "zh-a-n1", type: "multipleChoice", instruction: "Translate '三'", question: "三", correctAnswer: "Three", options: ["One", "Three", "Five"], xp: 5 },
    ],
    goals: [
      { id: "zh-g-n1", description: "Count 1 to 5 in Mandarin" },
    ],
  },

  // ── zh-food-basics ─────────────────────────────────────────────────────
  {
    id: "zh-food-basics",
    unitId: "zh-food-1",
    languageCode: "zh",
    title: "Food Basics",
    description: "Learn Chinese food and drink terms.",
    icon: "🍽️",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "zh-v-f1", word: "水", translation: "Water", pronunciation: "shuǐ" },
      { id: "zh-v-f2", word: "米饭", translation: "Rice", pronunciation: "mǐfàn" },
      { id: "zh-v-f3", word: "茶", translation: "Tea", pronunciation: "chá" },
    ],
    phrases: [
      { id: "zh-p-f1", phrase: "我要喝水", translation: "I want to drink water", pronunciation: "wǒ yào hē shuǐ" },
    ],
    activities: [
      { id: "zh-a-f1", type: "multipleChoice", instruction: "Translate '茶'", question: "茶", correctAnswer: "Tea", options: ["Water", "Rice", "Tea"], xp: 5 },
    ],
    goals: [
      { id: "zh-g-f1", description: "Learn water and tea in Chinese" },
    ],
  },

  // ── zh-at-cafe ─────────────────────────────────────────────────────────
  {
    id: "zh-at-cafe",
    unitId: "zh-food-1",
    languageCode: "zh",
    title: "At the Café",
    description: "Order coffee and pastries in Chinese.",
    icon: "☕",
    difficulty: "beginner",
    estimatedMinutes: 5,
    xpReward: 20,
    vocabulary: [
      { id: "zh-v-c1", word: "咖啡", translation: "Coffee", pronunciation: "kāfēi" },
      { id: "zh-v-c2", word: "蛋糕", translation: "Cake", pronunciation: "dàngāo" },
      { id: "zh-v-c3", word: "冰水", translation: "Ice water", pronunciation: "bīngshuǐ" },
    ],
    phrases: [
      { id: "zh-p-c1", phrase: "一杯咖啡，谢谢", translation: "A cup of coffee, thank you", pronunciation: "yī bēi kāfēi, xièxie" },
    ],
    activities: [
      { id: "zh-a-c1", type: "multipleChoice", instruction: "Translate '咖啡'", question: "咖啡", correctAnswer: "Coffee", options: ["Coffee", "Tea", "Cake"], xp: 5 },
    ],
    goals: [
      { id: "zh-g-c1", description: "Order coffee in Mandarin" },
    ],
  },

  // ── zh-restaurant ──────────────────────────────────────────────────────
  {
    id: "zh-restaurant",
    unitId: "zh-food-1",
    languageCode: "zh",
    title: "At the Restaurant",
    description: "Request the menu and order delicious dumplings.",
    icon: "🥟",
    difficulty: "beginner",
    estimatedMinutes: 6,
    xpReward: 25,
    vocabulary: [
      { id: "zh-v-r1", word: "饺子", translation: "Dumplings", pronunciation: "jiǎozi" },
      { id: "zh-v-r2", word: "菜单", translation: "Menu", pronunciation: "càidān" },
      { id: "zh-v-r3", word: "买单", translation: "The bill", pronunciation: "mǎidān" },
    ],
    phrases: [
      { id: "zh-p-r1", phrase: "服务员，买单", translation: "Waiter, bill please", pronunciation: "fúwùyuán, mǎidān" },
    ],
    activities: [
      { id: "zh-a-r1", type: "multipleChoice", instruction: "Translate '饺子'", question: "饺子", correctAnswer: "Dumplings", options: ["Dumplings", "Menu", "Bill"], xp: 5 },
    ],
    goals: [
      { id: "zh-g-r1", description: "Order dumplings" },
    ],
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
    icon: "👋",
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
    ],
    goals: [
      { id: "hi-g1", description: "Learn 5 Hindi greetings" },
    ],
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
