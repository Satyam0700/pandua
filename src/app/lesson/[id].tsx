import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants/images";
import { getLanguageByCode } from "../../data/languages";
import { getLessonById } from "../../data/lessons";
import { useProgressStore } from "../../store/progressStore";

interface PracticeItem {
  type: "vocab" | "phrase";
  text: string;
  translation: string;
  pronunciation: string;
  context?: string;
}

export default function AudioLessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const lessonId = typeof id === "string" ? id : "";
  const lesson = getLessonById(lessonId);

  const { completeLesson } = useProgressStore();

  // Screen settings & states
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "online" | "offline"
  >("connecting");
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 = connecting/pre-start, 0 = intro, 1..N = practice items, N+1 = completed
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState<boolean>(true);
  const [isTeacherSpeaking, setIsTeacherSpeaking] = useState<boolean>(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState<boolean>(false);
  const [userSpeechResult, setUserSpeechResult] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  // Stats State (starts empty, gets populated as the user practices)
  const [stats, setStats] = useState({
    speaking: "--",
    pronunciation: "--",
    grammar: "--",
  });

  // Calculate dynamic dimensions
  const { height: screenHeight } = Dimensions.get("window");
  const mainCardHeight = screenHeight * 0.58; // 58% of screen height to fit stats and header comfortably

  // Animated values for mascot and waves
  const mascotScale = useSharedValue(1);
  const waveScale1 = useSharedValue(1);
  const waveOpacity1 = useSharedValue(1);
  const waveScale2 = useSharedValue(1);
  const waveOpacity2 = useSharedValue(1);

  // Setup animated styles
  useEffect(() => {
    // Mascot breathing animation
    mascotScale.value = withRepeat(
      withSequence(
        withTiming(1.04, { duration: 1600 }),
        withTiming(1, { duration: 1600 })
      ),
      -1,
      true
    );
  }, []);

  useEffect(() => {
    if (isUserSpeaking) {
      waveScale1.value = withRepeat(
        withTiming(2.2, { duration: 1200 }),
        -1,
        false
      );
      waveOpacity1.value = withRepeat(
        withTiming(0, { duration: 1200 }),
        -1,
        false
      );

      // Staggered second wave
      const timer = setTimeout(() => {
        waveScale2.value = withRepeat(
          withTiming(2.2, { duration: 1200 }),
          -1,
          false
        );
        waveOpacity2.value = withRepeat(
          withTiming(0, { duration: 1200 }),
          -1,
          false
        );
      }, 600);

      return () => clearTimeout(timer);
    } else {
      waveScale1.value = 1;
      waveOpacity1.value = 0;
      waveScale2.value = 1;
      waveOpacity2.value = 0;
    }
  }, [isUserSpeaking]);

  const animatedMascotStyle = useAnimatedStyle(() => ({
    transform: [{ scale: mascotScale.value }],
  }));

  const animatedWave1 = useAnimatedStyle(() => ({
    transform: [{ scale: waveScale1.value }],
    opacity: waveOpacity1.value,
  }));

  const animatedWave2 = useAnimatedStyle(() => ({
    transform: [{ scale: waveScale2.value }],
    opacity: waveOpacity2.value,
  }));

  // Auto-connect on mount
  useEffect(() => {
    const connectTimer = setTimeout(() => {
      setConnectionStatus("online");
      setCurrentStep(0); // Transition to intro
      setIsTeacherSpeaking(true);

      // Turn off speaking indicator after 3 seconds
      const speechTimer = setTimeout(() => {
        setIsTeacherSpeaking(false);
      }, 3200);

      return () => clearTimeout(speechTimer);
    }, 1200);

    return () => clearTimeout(connectTimer);
  }, []);

  // Retrieve Language metadata
  const language = useMemo(() => {
    if (!lesson) return undefined;
    return getLanguageByCode(lesson.languageCode);
  }, [lesson]);

  // Retrieve Teacher metadata based on language
  const teacherDetails = useMemo(() => {
    if (!lesson) return { name: "Maria", greeting: "Hello! Let's learn." };
    if (lesson.aiTeacherPrompt) {
      const name = lesson.aiTeacherPrompt.systemPrompt.includes("María")
        ? "María"
        : lesson.aiTeacherPrompt.systemPrompt.includes("Marie")
          ? "Marie"
          : "María";
      return {
        name,
        greeting: lesson.aiTeacherPrompt.greeting,
      };
    }

    // Default fallbacks for each language code
    const defaults: Record<string, { name: string; greeting: string }> = {
      es: {
        name: "María",
        greeting: "¡Hola! I'm María, your Spanish teacher. Let's practice greetings and basic expressions today!",
      },
      fr: {
        name: "Marie",
        greeting: "Bonjour! I'm Marie, your French teacher. Let's practice French greetings today!",
      },
      ja: {
        name: "Yuki",
        greeting: "こんにちは! I'm Yuki, your Japanese teacher. Let's practice greetings and basic words today!",
      },
      de: {
        name: "Hans",
        greeting: "Hallo! I'm Hans, your German teacher. Let's practice German greetings today!",
      },
      ko: {
        name: "Ji-won",
        greeting: "안녕하세요! I'm Ji-won, your Korean teacher. Let's practice Korean greetings today!",
      },
      zh: {
        name: "Mei",
        greeting: "你好! I'm Mei, your Chinese teacher. Let's practice Chinese greetings today!",
      },
      hi: {
        name: "Rohan",
        greeting: "नमस्ते! I'm Rohan, your Hindi teacher. Let's practice Hindi greetings today!",
      },
    };

    return (
      defaults[lesson.languageCode] || {
        name: "AI Teacher",
        greeting: "Hello! I am your AI teacher. Let's get started!",
      }
    );
  }, [lesson]);

  // Practice items combining phrases and vocabulary
  const practiceItems = useMemo(() => {
    if (!lesson) return [];
    const items: PracticeItem[] = [];

    // Add phrases first
    lesson.phrases.forEach((p) => {
      items.push({
        type: "phrase",
        text: p.phrase,
        translation: p.translation,
        pronunciation: p.pronunciation,
        context: p.context,
      });
    });

    // Add vocabulary items next (avoiding duplicates)
    lesson.vocabulary.forEach((v) => {
      if (!items.some((item) => item.text.toLowerCase() === v.word.toLowerCase())) {
        items.push({
          type: "vocab",
          text: v.word,
          translation: v.translation,
          pronunciation: v.pronunciation,
        });
      }
    });

    // Limit to 5 items to keep lesson focused and not exhaust the user
    return items.slice(0, 5);
  }, [lesson]);

  // Dynamic Dialog Values depending on currentStep
  const dialogData = useMemo(() => {
    if (currentStep === -1) {
      return {
        text: "Connecting...",
        translation: "Connecting to AI server...",
        pronunciation: "",
      };
    }
    if (currentStep === 0) {
      return {
        text: teacherDetails.greeting,
        translation: "Welcome! Tap the button below when you are ready to begin.",
        pronunciation: "",
      };
    }
    if (currentStep > practiceItems.length) {
      return {
        text: `¡Excelente trabajo! You've successfully completed today's lesson.`,
        translation: "Excellent work! You have finished the session. Let's claim your rewards!",
        pronunciation: "",
      };
    }

    const item = practiceItems[currentStep - 1];
    if (feedbackMessage) {
      return {
        text: feedbackMessage,
        translation: "Awesome pronunciation! You are making great progress.",
        pronunciation: "",
      };
    }

    return {
      text: item.text,
      translation: item.translation,
      pronunciation: `Pronunciation: ${item.pronunciation}`,
    };
  }, [currentStep, practiceItems, teacherDetails, feedbackMessage]);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 items-center justify-center p-6">
          <Text className="text-h2 text-text-primary text-center">Lesson not found</Text>
          <TouchableOpacity
            className="mt-4 bg-lingua-purple px-6 py-3 rounded-2xl"
            onPress={() => router.back()}
          >
            <Text className="text-white font-poppins-semibold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Handle playing audio simulated feedback
  const triggerAudioSpeech = () => {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    // Simulate audio playback finishing
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 1800);
  };

  // Start practicing the first item
  const handleStartPractice = () => {
    setCurrentStep(1);
    setIsTeacherSpeaking(true);
    // Teacher speaks the phrase for 2 seconds
    setTimeout(() => {
      setIsTeacherSpeaking(false);
    }, 2000);
  };

  // Simulate speaking and receiving feedback
  const handleSpeakInput = () => {
    if (isTeacherSpeaking || isUserSpeaking || isMuted) return;

    setIsUserSpeaking(true);
    setUserSpeechResult(null);
    setFeedbackMessage(null);

    // Mock speech recognition timer
    setTimeout(() => {
      setIsUserSpeaking(false);
      const currentItem = practiceItems[currentStep - 1];
      setUserSpeechResult(`"${currentItem.text}"`);

      // Mock feedback messages in the target language
      const feedbackPhrases: Record<string, string> = {
        es: "¡Muy bien! Perfect pronunciation! 👏",
        fr: "Très bien! Perfect! 👏",
        ja: "素晴らしい! Excellent! 👏",
        de: "Sehr gut! Great job! 👏",
        ko: "아주 잘했어요! Perfect! 👏",
        zh: "非常好! Excellent! 👏",
        hi: "बहुत बढ़िया! Superb! 👏",
      };

      setFeedbackMessage(
        feedbackPhrases[lesson.languageCode] || "Excellent job! 👏"
      );

      // Update progress stats dynamically
      const stepRatio = currentStep / practiceItems.length;
      if (stepRatio <= 0.3) {
        setStats({
          speaking: "Good",
          pronunciation: "Good",
          grammar: "Good",
        });
      } else if (stepRatio <= 0.6) {
        setStats({
          speaking: "Excellent",
          pronunciation: "Great",
          grammar: "Good",
        });
      } else {
        setStats({
          speaking: "Excellent",
          pronunciation: "Great",
          grammar: "Excellent",
        });
      }
    }, 2000);
  };

  // Advance to next practice item
  const handleContinue = () => {
    setUserSpeechResult(null);
    setFeedbackMessage(null);

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep <= practiceItems.length) {
      setIsTeacherSpeaking(true);
      setTimeout(() => {
        setIsTeacherSpeaking(false);
      }, 2000);
    } else {
      // Outro finished message
      setIsTeacherSpeaking(true);
      setTimeout(() => {
        setIsTeacherSpeaking(false);
      }, 2500);
    }
  };

  // Finish lesson and claim rewards
  const handleFinishLesson = () => {
    completeLesson(lesson.id, lesson.xpReward);
    router.replace("/(tabs)/learn" as any);
  };

  // End Call or Go Back
  const handleCancelCall = () => {
    if (currentStep > 0 && currentStep <= practiceItems.length) {
      setShowExitConfirm(true);
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      {/* 1. Header Area */}
      <View className="flex-row items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#F8F9FA]">
        {/* Left Back Button */}
        <TouchableOpacity
          onPress={handleCancelCall}
          className="w-10 h-10 rounded-full bg-white border border-gray-200/80 items-center justify-center shadow-sm"
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="chevron-left" size={28} color="#0D132B" />
        </TouchableOpacity>

        {/* Center Title & Status */}
        <View className="flex-1 items-center">
          <Text className="text-h4 text-text-primary font-poppins-bold">AI Teacher</Text>
          <View className="flex-row items-center mt-0.5">
            <View
              className={`w-2.5 h-2.5 rounded-full mr-1.5 ${connectionStatus === "online" ? "bg-success" : "bg-orange-400"
                }`}
            />
            <Text className="text-caption font-poppins-medium text-text-secondary">
              {connectionStatus === "online"
                ? "Online"
                : connectionStatus === "connecting"
                  ? "Connecting..."
                  : "Offline"}
            </Text>
          </View>
        </View>

        {/* Right Action Buttons */}
        <View className="flex-row items-center gap-2">
          {/* Mock Camera Toggle Indicator */}
          <TouchableOpacity
            onPress={() => setIsCameraOn(!isCameraOn)}
            className="w-10 h-10 rounded-full border border-gray-200/80 items-center justify-center bg-white shadow-sm"
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name={isCameraOn ? "video-outline" : "video-off-outline"}
              size={18}
              color="#0D132B"
            />
          </TouchableOpacity>

          {/* XP Badge */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full border border-gray-200/80 items-center justify-center bg-white shadow-sm"
            activeOpacity={0.7}
          >
            <Text className="font-poppins-bold text-lingua-purple text-[13px]">
              {`+${lesson.xpReward}`}
            </Text>
          </TouchableOpacity>

          {/* Profile Badge */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full border border-gray-200/80 items-center justify-center bg-white shadow-sm relative"
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons name="account-outline" size={18} color="#0D132B" />
            <View className="w-2.5 h-2.5 rounded-full bg-success border-2 border-white absolute right-0 bottom-0" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. Main Lesson Card */}
      <View className="px-5 mt-3 flex-1">
        <View
          style={styles.mainCardShadow}
          className="bg-slate-800 rounded-[32px] overflow-hidden relative w-full flex-1"
        >
          {/* Blurred Classroom Background */}
          <Image
            source={images.cafeTable}
            style={StyleSheet.absoluteFill}
            blurRadius={12}
            resizeMode="cover"
          />
          {/* Dark Overlay for visual contrast */}
          <View className="absolute inset-0 bg-black/25 z-0" />

          {/* Card Layout Container */}
          <View className="flex-1 justify-between p-4.5 z-10">
            {/* Top Row: Language details & User PIP */}
            <View className="flex-row justify-between items-start">
              {/* Language Name Tag */}
              <View className="flex-row items-center bg-black/40 px-3 py-1.5 rounded-full border border-white/10 mt-1">
                <Text className="text-white text-caption font-poppins-semibold tracking-wide uppercase">
                  {`${language?.flag ? "🌐 " : ""}${language?.name || "Spanish"}`}
                </Text>
              </View>

              {/* Floating User PIP (Camera Preview Placeholder) */}
              <View style={styles.pipShadow} className="w-[72px] h-[92px] rounded-2xl border-4 border-white bg-slate-900 overflow-hidden">
                {isCameraOn ? (
                  <View className="flex-1 bg-teal-800 items-center justify-center">
                    <MaterialCommunityIcons name="face-recognition" size={26} color="#FFFFFF" />
                    <Text className="text-white text-[8px] font-poppins-semibold mt-0.5">You</Text>
                  </View>
                ) : (
                  <View className="flex-1 bg-slate-800 items-center justify-center">
                    <MaterialCommunityIcons name="video-off" size={18} color="#9CA3AF" />
                    <Text className="text-gray-400 text-[7px] font-poppins-medium mt-0.5">Camera Off</Text>
                  </View>
                )}
              </View>
            </View>

            {/* Middle Mascot Container */}
            <View className="items-center justify-center z-0" style={{ marginTop: -25, marginBottom: -35 }}>
              <Animated.View style={animatedMascotStyle}>
                <Image
                  source={images.mascotWelcome}
                  className="w-[210px] h-[210px]"
                  resizeMode="contain"
                />
              </Animated.View>
            </View>

            {/* Speech Bubble Container */}
            <View className="w-full relative bg-white rounded-2xl p-3.5 shadow-lg mb-1.5 z-10">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-3">
                  {/* Status Indicator inside speech bubble */}
                  {isTeacherSpeaking && (
                    <Text className="text-[10px] font-poppins-bold text-lingua-purple uppercase tracking-wider mb-0.5">
                      {`${teacherDetails.name} is speaking...`}
                    </Text>
                  )}

                  {/* Main Speech Dialog */}
                  <Text className="font-poppins-bold text-[17px] text-text-primary leading-tight">
                    {dialogData.text}
                  </Text>

                  {/* Optional translation & pronunciation subtitles */}
                  {subtitlesEnabled && (
                    <View className="mt-1.5 pt-1.5 border-t border-gray-100">
                      {dialogData.pronunciation ? (
                        <Text className="text-[12px] font-poppins-medium text-text-secondary italic">
                          {dialogData.pronunciation}
                        </Text>
                      ) : null}
                      <Text className="font-poppins-medium text-body-sm text-lingua-purple mt-0.5">
                        {dialogData.translation}
                      </Text>
                    </View>
                  )}
                </View>

                {/* Simulated Volume Speaker Button */}
                <TouchableOpacity
                  onPress={triggerAudioSpeech}
                  className={`w-10 h-10 rounded-full items-center justify-center ${isPlayingAudio ? "bg-lingua-purple" : "bg-gray-100"
                    }`}
                  activeOpacity={0.7}
                >
                  {isPlayingAudio ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <MaterialCommunityIcons
                      name="volume-high"
                      size={20}
                      color={isPlayingAudio ? "#FFFFFF" : "#6C4EF5"}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {/* Triangle Arrow below the white speech bubble */}
              <View style={styles.bubbleArrow} />
            </View>

            {/* Interaction Action Row (Speech prompt buttons) */}
            <View className="h-16 justify-center items-center">
              {currentStep === 0 && (
                <TouchableOpacity
                  onPress={handleStartPractice}
                  className="bg-success px-6 py-2.5 rounded-full flex-row items-center gap-1.5 shadow-md"
                  activeOpacity={0.8}
                >
                  <MaterialCommunityIcons name="play-circle-outline" size={20} color="#FFFFFF" />
                  <Text className="text-white font-poppins-bold text-[14px]">Start Practice</Text>
                </TouchableOpacity>
              )}

              {currentStep > 0 && currentStep <= practiceItems.length && !userSpeechResult && (
                <View className="items-center justify-center w-full relative">
                  {isTeacherSpeaking ? (
                    <View className="flex-row items-center gap-1.5 bg-white/20 px-4 py-2 rounded-full border border-white/10">
                      <ActivityIndicator size="small" color="#FFFFFF" />
                      <Text className="text-white text-body-sm font-poppins-semibold">
                        Listening to teacher...
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={handleSpeakInput}
                      className="items-center justify-center"
                      activeOpacity={0.8}
                    >
                      {/* Concentric soundwaves for speech animation */}
                      {isUserSpeaking && (
                        <>
                          <Animated.View
                            style={[
                              {
                                position: "absolute",
                                width: 52,
                                height: 52,
                                borderRadius: 26,
                                backgroundColor: "#22C55E",
                              },
                              animatedWave1,
                            ]}
                          />
                          <Animated.View
                            style={[
                              {
                                position: "absolute",
                                width: 52,
                                height: 52,
                                borderRadius: 26,
                                backgroundColor: "#22C55E",
                              },
                              animatedWave2,
                            ]}
                          />
                        </>
                      )}

                      {/* Microphone Pulse Button */}
                      <View
                        className={`w-14 h-14 rounded-full items-center justify-center shadow-lg ${isUserSpeaking ? "bg-success" : isMuted ? "bg-gray-400" : "bg-lingua-purple"
                          }`}
                      >
                        <MaterialCommunityIcons
                          name={isUserSpeaking ? "microphone" : "microphone-outline"}
                          size={28}
                          color="#FFFFFF"
                        />
                      </View>
                      <Text className="text-[12px] font-poppins-bold text-white mt-1.5 shadow">
                        {isUserSpeaking ? "Listening..." : isMuted ? "Unmute Mic to Speak" : "Tap to Speak"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}

              {userSpeechResult && (
                <View className="items-center w-full">
                  <View className="flex-row items-center gap-1.5 bg-black/40 px-4 py-1.5 rounded-full mb-1 border border-white/10">
                    <Text className="text-gray-300 text-caption font-poppins-medium">You said:</Text>
                    <Text className="text-success text-body-sm font-poppins-bold">{userSpeechResult}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={handleContinue}
                    className="bg-success px-6 py-2 rounded-full flex-row items-center gap-1.5 shadow-md mt-1"
                    activeOpacity={0.8}
                  >
                    <Text className="text-white font-poppins-bold text-[14px]">
                      {currentStep === practiceItems.length ? "Finish Lesson" : "Continue"}
                    </Text>
                    <MaterialCommunityIcons name="arrow-right" size={16} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              )}

              {currentStep > practiceItems.length && (
                <TouchableOpacity
                  onPress={handleFinishLesson}
                  className="bg-lingua-purple px-8 py-3 rounded-full shadow-lg"
                  activeOpacity={0.8}
                >
                  <Text className="text-white font-poppins-bold text-[15px]">
                    Claim Rewards & Finish
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Bottom Call Controls Row */}
            <View className="flex-row justify-around items-center pt-4 border-t border-white/15">
              {/* Camera Toggle */}
              <View className="items-center">
                <TouchableOpacity
                  onPress={() => setIsCameraOn(!isCameraOn)}
                  className={`w-12 h-12 rounded-full items-center justify-center shadow-sm ${isCameraOn ? "bg-white" : "bg-white/20"
                    }`}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons
                    name={isCameraOn ? "video-outline" : "video-off-outline"}
                    size={22}
                    color={isCameraOn ? "#0D132B" : "#FFFFFF"}
                  />
                </TouchableOpacity>
                <Text className="text-[11px] font-poppins-semibold text-white mt-1">Camera</Text>
              </View>

              {/* Mic Mute Toggle */}
              <View className="items-center">
                <TouchableOpacity
                  onPress={() => setIsMuted(!isMuted)}
                  className={`w-12 h-12 rounded-full items-center justify-center shadow-sm ${!isMuted ? "bg-white" : "bg-error"
                    }`}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons
                    name={!isMuted ? "microphone" : "microphone-off"}
                    size={22}
                    color={!isMuted ? "#0D132B" : "#FFFFFF"}
                  />
                </TouchableOpacity>
                <Text className="text-[11px] font-poppins-semibold text-white mt-1">Mic</Text>
              </View>

              {/* Subtitles Toggle */}
              <View className="items-center">
                <TouchableOpacity
                  onPress={() => setSubtitlesEnabled(!subtitlesEnabled)}
                  className={`w-12 h-12 rounded-full items-center justify-center shadow-sm ${subtitlesEnabled ? "bg-white" : "bg-white/20"
                    }`}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons
                    name="translate"
                    size={22}
                    color={subtitlesEnabled ? "#0D132B" : "#FFFFFF"}
                  />
                </TouchableOpacity>
                <Text className="text-[11px] font-poppins-semibold text-white mt-1">Subtitles</Text>
              </View>

              {/* End Call Button */}
              <View className="items-center">
                <TouchableOpacity
                  onPress={handleCancelCall}
                  className="w-12 h-12 rounded-full items-center justify-center bg-error shadow-sm"
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons name="phone-hangup" size={22} color="#FFFFFF" />
                </TouchableOpacity>
                <Text className="text-[11px] font-poppins-semibold text-white mt-1">End Call</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 3. Stats / Feedback Score Card */}
      <View className="px-5 my-4 pb-4">
        <View style={styles.statsCardShadow} className="bg-white rounded-2xl py-4 px-3 flex-row items-center justify-around border border-gray-100">
          {/* Column 1: Speaking */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] font-poppins-medium text-text-secondary uppercase tracking-wider">
              Speaking
            </Text>
            <Text
              className={`text-body-lg font-poppins-bold mt-0.5 ${stats.speaking === "Excellent"
                ? "text-success"
                : stats.speaking === "Good"
                  ? "text-lingua-blue"
                  : "text-text-primary/40"
                }`}
            >
              {stats.speaking}
            </Text>
          </View>

          {/* Thin Vertical line divider */}
          <View className="w-[1px] h-8 bg-gray-200" />

          {/* Column 2: Pronunciation */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] font-poppins-medium text-text-secondary uppercase tracking-wider">
              Pronunciation
            </Text>
            <Text
              className={`text-body-lg font-poppins-bold mt-0.5 ${stats.pronunciation === "Great"
                ? "text-lingua-blue"
                : stats.pronunciation === "Good"
                  ? "text-lingua-purple"
                  : "text-text-primary/40"
                }`}
            >
              {stats.pronunciation}
            </Text>
          </View>

          {/* Thin Vertical line divider */}
          <View className="w-[1px] h-8 bg-gray-200" />

          {/* Column 3: Grammar */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] font-poppins-medium text-text-secondary uppercase tracking-wider">
              Grammar
            </Text>
            <Text
              className={`text-body-lg font-poppins-bold mt-0.5 ${stats.grammar === "Excellent"
                ? "text-success"
                : stats.grammar === "Good"
                  ? "text-lingua-purple"
                  : "text-text-primary/40"
                }`}
            >
              {stats.grammar}
            </Text>
          </View>
        </View>
      </View>

      {/* 4. Exit Confirmation Modal Overlay */}
      {showExitConfirm && (
        <View className="absolute inset-0 bg-black/60 z-50 items-center justify-center px-6">
          <View className="bg-white rounded-3xl p-6 w-full max-w-sm items-center shadow-2xl">
            <View className="w-14 h-14 bg-error/10 rounded-full items-center justify-center mb-4">
              <MaterialCommunityIcons name="phone-hangup" size={28} color="#FF4D4F" />
            </View>
            <Text className="text-h3 text-text-primary font-poppins-bold text-center">
              End Lesson Session?
            </Text>
            <Text className="text-body-md text-text-secondary text-center mt-2 px-2">
              Are you sure you want to end this audio session? Your current progress for this lesson won't be saved.
            </Text>

            <View className="flex-row gap-3 mt-6 w-full">
              <TouchableOpacity
                onPress={() => setShowExitConfirm(false)}
                className="flex-1 border border-gray-200 py-3 rounded-2xl items-center"
                activeOpacity={0.8}
              >
                <Text className="text-text-secondary font-poppins-semibold">Resume</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowExitConfirm(false);
                  router.back();
                }}
                className="flex-1 bg-error py-3 rounded-2xl items-center"
                activeOpacity={0.8}
              >
                <Text className="text-white font-poppins-semibold">End Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  statsCardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#0D132B",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  pipShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  bubbleArrow: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FFFFFF",
    alignSelf: "center",
    position: "absolute",
    bottom: -9,
    left: "50%",
    marginLeft: -10,
  },
});
