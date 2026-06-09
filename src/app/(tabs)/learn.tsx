import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "../../constants/images";
import { getLanguageByCode } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";
import { getLessonsByUnit } from "../../data/lessons";
import type { Lesson } from "../../types/learning";
import { useLanguageStore } from "../../store/languageStore";
import { useProgressStore } from "../../store/progressStore";

type TabType = "lessons" | "practice";

export default function LearnTabScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("lessons");
  const { selectedLanguageCode } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();

  const langCode = selectedLanguageCode || "es";
  const activeLanguage = getLanguageByCode(langCode);
  const units = getUnitsByLanguage(langCode);

  // Flatten all lessons across units for this language
  const allLessons: { lesson: Lesson; unitTitle: string; unitIndex: number }[] = [];
  units.forEach((unit, uIdx) => {
    const unitLessons = getLessonsByUnit(unit.id);
    unitLessons.forEach((l) => {
      allLessons.push({ lesson: l, unitTitle: unit.title, unitIndex: uIdx + 1 });
    });
  });

  // Calculate lesson status:
  // - Completed: if lesson.id in completedLessonIds
  // - In Progress: first lesson that is NOT completed
  // - Locked: all subsequent lessons
  let firstUncompletedIndex = allLessons.findIndex(
    (item) => !completedLessonIds.includes(item.lesson.id)
  );
  if (firstUncompletedIndex === -1 && allLessons.length > 0) {
    // If all lessons are completed, make the last one active or none
    firstUncompletedIndex = allLessons.length - 1;
  }

  const lessonsWithStatus = allLessons.map((item, index) => {
    let status: "completed" | "in_progress" | "locked" = "locked";
    if (completedLessonIds.includes(item.lesson.id)) {
      status = "completed";
    } else if (index === firstUncompletedIndex) {
      status = "in_progress";
    }
    return { ...item, status, index: index + 1 };
  });

  // Active Lesson & Unit for header display
  const activeItem = lessonsWithStatus.find((item) => item.status === "in_progress") || lessonsWithStatus[lessonsWithStatus.length - 1];
  const activeLessonTitle = activeItem ? activeItem.lesson.title : "Ready to Learn";
  const activeUnitTitle = activeItem ? activeItem.unitTitle : (units[0]?.title || "Basics 1");
  const activeUnitIndex = activeItem ? activeItem.unitIndex : 1;

  const totalLessonsInLanguage = allLessons.length;
  const completedLessonsInLanguage = lessonsWithStatus.filter(
    (item) => item.status === "completed"
  ).length;

  const getLessonIconName = (iconEmoji: string) => {
    const emojiMap: Record<string, string> = {
      "👋": "hand-wave",
      "🤝": "account-multiple",
      "🔢": "numeric-1-box-multiple",
      "🍽️": "silverware-fork-knife",
      "☕": "coffee",
      "🍝": "pasta",
      "🗼": "eiffel-tower",
      "🗺️": "map-legend",
      "✈️": "airplane",
      "🙏": "hands-pray",
      "⛩️": "torii-gate",
      "🍣": "food-sushi",
      "🥨": "pretzel",
      "🍜": "noodles",
      "🥩": "food-steak",
      "🥟": "dumpling",
      "🇩🇪": "flag",
      "🇰🇷": "flag",
      "🇨🇳": "flag",
    };
    return emojiMap[iconEmoji] || "book-open-variant";
  };

  const handleLessonPress = (lesson: Lesson) => {
    router.push(`/lesson/${lesson.id}` as any);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Scrollable Container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ---- Hero / Header Illustration Area ---- */}
        <View className="bg-[#EBF3FF] pt-2 pb-6 px-5 relative overflow-hidden" style={{ minHeight: 250 }}>
          {/* Header Controls overlay */}
          <View className="flex-row items-center justify-between z-[10] mt-1">
            <TouchableOpacity
              onPress={() => router.replace("/" as any)}
              className="w-10 h-10 rounded-full bg-white/80 items-center justify-center"
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons name="chevron-left" size={26} color="#0D132B" />
            </TouchableOpacity>

            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-white/80 items-center justify-center"
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons name="bookmark-outline" size={22} color="#0D132B" />
            </TouchableOpacity>
          </View>

          {/* Dynamic Header Titles */}
          <View className="z-[10] mt-4 max-w-[65%]">
            <Text className="text-[28px] font-poppins-bold text-text-primary leading-tight">
              {activeLessonTitle}
            </Text>
            <Text className="text-body-sm font-poppins-semibold text-text-secondary mt-1">
              {`Unit ${activeUnitIndex} • ${completedLessonsInLanguage} / ${totalLessonsInLanguage} lessons`}
            </Text>
          </View>

          {/* Fox Café Illustration Mascot */}
          <Image
            source={images.cafeMascot}
            className="w-[180px] h-[180px] absolute bottom-[-15] right-[-10] z-[5]"
            resizeMode="contain"
          />
        </View>

        {/* ---- Tab Bar (Lessons / Practice) ---- */}
        <View className="px-5 mt-6 mb-5">
          <View className="flex-row bg-[#F3F4F6] p-1.5 rounded-[20px] shadow-sm">
            <TouchableOpacity
              onPress={() => setActiveTab("lessons")}
              className={`flex-1 py-3 rounded-[16px] items-center justify-center ${
                activeTab === "lessons" ? "bg-white shadow-sm" : ""
              }`}
              activeOpacity={0.8}
            >
              <Text
                className={`font-poppins-semibold text-[15px] ${
                  activeTab === "lessons" ? "text-lingua-purple font-poppins-bold" : "text-text-secondary"
                }`}
              >
                Lessons
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("practice")}
              className={`flex-1 py-3 rounded-[16px] items-center justify-center ${
                activeTab === "practice" ? "bg-white shadow-sm" : ""
              }`}
              activeOpacity={0.8}
            >
              <Text
                className={`font-poppins-semibold text-[15px] ${
                  activeTab === "practice" ? "text-lingua-purple font-poppins-bold" : "text-text-secondary"
                }`}
              >
                Practice
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---- Lessons Mode Content ---- */}
        {activeTab === "lessons" && (
          <View className="px-5 gap-4">
            {lessonsWithStatus.map(({ lesson, status, index, unitTitle }) => {
              const isCompleted = status === "completed";
              const isInProgress = status === "in_progress";
              const isLocked = status === "locked";

              return (
                <View key={lesson.id} className="w-full">
                  {/* Unit Divider if first lesson of unit */}
                  {index === 1 || lessonsWithStatus[index - 2]?.unitTitle !== unitTitle ? (
                    <View className="flex-row items-center mt-2 mb-3">
                      <Text className="text-body-sm font-poppins-bold text-text-secondary tracking-wider uppercase mr-3">
                        {unitTitle}
                      </Text>
                      <View className="flex-1 h-[1px] bg-border" />
                    </View>
                  ) : null}

                  <TouchableOpacity
                    onPress={() => handleLessonPress(lesson)}
                    activeOpacity={0.7}
                    className={`flex-row items-center bg-white rounded-[24px] p-5 border ${
                      isInProgress
                        ? "border-lingua-purple shadow-sm shadow-lingua-purple/10"
                        : "border-[#E5E7EB]"
                    }`}
                  >
                    {/* Left details */}
                    <View className="flex-1 mr-4">
                      <Text
                        className={`text-caption font-poppins-bold uppercase tracking-wider ${
                          isInProgress
                            ? "text-lingua-purple"
                            : isCompleted
                            ? "text-text-secondary"
                            : "text-[#9CA3AF]"
                        }`}
                      >
                        {`Lesson ${index}`}
                      </Text>
                      <Text
                        className={`text-h4 mt-1 font-poppins-bold ${
                          isLocked ? "text-text-primary/60" : "text-text-primary"
                        }`}
                      >
                        {lesson.title}
                      </Text>
                      {isInProgress && (
                        <Text className="text-caption font-poppins-semibold text-lingua-purple mt-1">
                          In progress
                        </Text>
                      )}
                      {isLocked && (
                        <Text className="text-caption font-poppins text-text-secondary mt-1">
                          {`${lesson.vocabulary.length} words • ${lesson.xpReward} XP`}
                        </Text>
                      )}
                    </View>

                    {/* Right indicator */}
                    <View>
                      {isCompleted ? (
                        <View className="w-8 h-8 rounded-full bg-lingua-green items-center justify-center">
                          <MaterialCommunityIcons name="check" size={18} color="#FFFFFF" />
                        </View>
                      ) : isInProgress ? (
                        <View className="w-12 h-12 rounded-2xl bg-[#F5F3FF] items-center justify-center border border-purple-100">
                          <MaterialCommunityIcons
                            name={getLessonIconName(lesson.icon) as any}
                            size={24}
                            color="#6C4EF5"
                          />
                        </View>
                      ) : (
                        <View className="w-8 h-8 rounded-full bg-surface items-center justify-center border border-border">
                          <MaterialCommunityIcons name="lock-outline" size={16} color="#9CA3AF" />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}

        {/* ---- Practice Mode Content ---- */}
        {activeTab === "practice" && (
          <View className="flex-1 items-center justify-center px-10 py-12 gap-5">
            <View className="w-20 h-20 bg-orange-100 rounded-full items-center justify-center">
              <MaterialCommunityIcons name="trophy-outline" size={40} color="#FF8A00" />
            </View>
            <Text className="text-h3 text-text-primary text-center">
              Review & Practice
            </Text>
            <Text className="text-body-md text-text-secondary text-center max-w-[280px]">
              Review your vocabulary and practice mistakes to keep your streak going!
            </Text>

            {completedLessonsInLanguage === 0 ? (
              <View className="bg-surface rounded-2xl p-4 w-full border border-border items-center">
                <Text className="text-body-sm font-poppins-medium text-text-secondary text-center">
                  Complete at least one lesson to unlock custom practice activities.
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => router.push(`/lesson/${allLessons[0].lesson.id}` as any)}
                className="bg-lingua-purple px-6 py-3 rounded-2xl w-full items-center"
                activeOpacity={0.8}
              >
                <Text className="text-white font-poppins-semibold">
                  Start Quick Review (+15 XP)
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ScrollView contentContainerStyle requires StyleSheet per AGENTS.md rules
  scrollContent: {
    paddingBottom: 40,
  },
});
