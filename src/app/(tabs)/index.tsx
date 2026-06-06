import { useUser } from "@clerk/expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";
import { getLanguageByCode } from "../../data/languages";
import { getLessonsByUnit } from "../../data/lessons";
import { getUnitsByLanguage } from "../../data/units";
import { useLanguageStore } from "../../store/languageStore";

export default function HomeTabScreen() {
  const router = useRouter();
  const { user } = useUser();
  const { selectedLanguageCode } = useLanguageStore();

  const activeLanguage = selectedLanguageCode
    ? getLanguageByCode(selectedLanguageCode)
    : undefined;

  const units = selectedLanguageCode
    ? getUnitsByLanguage(selectedLanguageCode)
    : [];

  const currentUnit = units[0];
  const currentLessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];
  const nextLesson = currentLessons[0];

  // Mock XP progress
  const currentXP = 15;
  const dailyGoalXP = 20;
  const xpProgress = currentXP / dailyGoalXP;
  const streakCount = 12;

  const firstName = user?.firstName || "Learner";

  // Localized greeting based on selected language
  const getGreeting = () => {
    if (!activeLanguage) return "Hello";
    const greetings: Record<string, string> = {
      es: "Hola", fr: "Bonjour", ja: "こんにちは",
      ko: "안녕", de: "Hallo", zh: "你好",
    };
    return greetings[activeLanguage.code] || "Hello";
  };

  // Today's plan items
  const todayPlan = [
    {
      id: "1",
      icon: "book-open-variant" as const,
      iconBg: "#6C4EF5",
      title: "Lesson",
      subtitle: nextLesson ? nextLesson.description : "At the café",
      completed: true,
    },
    {
      id: "2",
      icon: "headphones" as const,
      iconBg: "#FF8A00",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: "3",
      icon: "message-text" as const,
      iconBg: "#FF4D4F",
      title: "New words",
      subtitle: nextLesson
        ? `${nextLesson.vocabulary.length} words`
        : "10 words",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ---- Header Row ---- */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          <View className="flex-row items-center gap-3">
            {activeLanguage && (
              <View className="w-10 h-10 rounded-full overflow-hidden bg-surface items-center justify-center">
                <Image
                  source={{ uri: activeLanguage.flag }}
                  className="w-10 h-10"
                  resizeMode="cover"
                />
              </View>
            )}
            <Text className="text-h3 text-text-primary">
              {getGreeting()}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                className="w-10 h-10"
                resizeMode="contain"
              />
              <Text className="font-poppins-semibold text-[20px] text-text-primary">
                {streakCount}
              </Text>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={22}
                color="#0D132B"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ---- Daily Goal Card ---- */}
        <View className="mx-5 mb-5">
          <View className="flex-row items-center bg-[#FFF8EE] rounded-[20px] px-5 py-[18px]">
            <View className="flex-1">
              <Text className="font-poppins-medium text-[14px] text-text-secondary">
                Daily goal
              </Text>
              <View className="flex-row items-baseline mt-1">
                <Text className="text-h1 text-text-primary">{currentXP}</Text>
                <Text className="text-body-lg text-text-secondary">
                  {" "}/ {dailyGoalXP} XP
                </Text>
              </View>
              {/* Progress Bar */}
              <View className="h-2 bg-[#F3E8D4] rounded mt-[10px] overflow-hidden">
                <View
                  className="h-2 bg-streak rounded"
                  style={{ width: `${xpProgress * 100}%` }}
                />
              </View>
            </View>
            <Image
              source={images.treasure}
              className="w-[80px] h-[80px]"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* ---- Continue Learning Card ---- */}
        {activeLanguage && (
          <View className="mx-5 mb-6">
            <View className="flex-row bg-lingua-purple rounded-3xl overflow-hidden min-h-[180px] relative">
              {/* Text Content */}
              <View className="flex-1 px-6 py-[22px] z-[2]">
                <Text className="font-poppins text-[14px] text-white/80">
                  Continue learning
                </Text>
                <Text className="font-poppins-bold text-[28px] text-white mt-[2px]">
                  {activeLanguage.name}
                </Text>
                <Text className="font-poppins text-[14px] text-white/80 mt-[2px]">
                  A1 • {currentUnit ? currentUnit.title : "Unit 1"}
                </Text>
                <TouchableOpacity
                  className="bg-white rounded-[20px] px-6 py-[10px] self-start mt-[14px]"
                  activeOpacity={0.8}
                  onPress={() => router.push("/(tabs)/learn")}
                >
                  <Text className="font-poppins-semibold text-[14px] text-lingua-purple">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Palace Illustration */}
              <Image
                source={images.palace}
                className="w-[160px] h-[180px] absolute bottom-0 z-[1]"
                style={{ right: -10 }}
                resizeMode="contain"
              />
            </View>
          </View>
        )}

        {/* ---- Today's Plan Section ---- */}
        <View className="px-5 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-h3 text-text-primary">Today's plan</Text>
            <TouchableOpacity>
              <Text className="font-poppins-medium text-[14px] text-lingua-purple">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Plan Items */}
          {todayPlan.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity
                className="flex-row items-center py-4"
                activeOpacity={0.7}
              >
                {/* Icon Circle */}
                <View
                  className="w-[44px] h-[44px] rounded-[14px] items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={20}
                    color="#FFFFFF"
                  />
                </View>

                {/* Text */}
                <View className="flex-1 ml-4">
                  <Text className="font-poppins-semibold text-[16px] text-text-primary">
                    {item.title}
                  </Text>
                  <Text className="text-body-sm text-text-secondary mt-[1px]">
                    {item.subtitle}
                  </Text>
                </View>

                {/* Completion indicator */}
                {item.completed ? (
                  <View className="w-7 h-7 rounded-full bg-lingua-purple items-center justify-center">
                    <MaterialCommunityIcons
                      name="check"
                      size={16}
                      color="#FFFFFF"
                    />
                  </View>
                ) : (
                  <View className="w-7 h-7 rounded-full border-2 border-[#D1D5DB]" />
                )}
              </TouchableOpacity>

              {/* Separator */}
              {index < todayPlan.length - 1 && (
                <View className="h-[1px] bg-[#F3F4F6] ml-[58px]" />
              )}
            </View>
          ))}
        </View>

        {/* ---- Next Up Card (AI Video Call) ---- */}
        <View className="mx-5 mb-8">
          <View className="flex-row items-center bg-[#ECFCE5] rounded-[20px] px-5 py-[18px]">
            <View className="flex-1">
              <Text className="text-body-sm text-text-secondary">Next up</Text>
              <Text className="font-poppins-bold text-[18px] text-text-primary mt-[2px]">
                AI Video Call
              </Text>
              <Text className="text-body-sm text-text-secondary mt-[2px]">
                Practice speaking
              </Text>
            </View>
            {/* Avatar + Camera Icon */}
            <View className="flex-row items-end">
              <View className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-white">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                  }}
                  className="w-[52px] h-[52px] rounded-[26px]"
                />
              </View>
              <View
                className="w-10 h-10 rounded-full bg-[#21C16B] items-center justify-center"
                style={{ marginLeft: -14, marginBottom: -2 }}
              >
                <MaterialCommunityIcons
                  name="video"
                  size={22}
                  color="#FFFFFF"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Only styles that MUST use StyleSheet per AGENTS.md rules
const styles = StyleSheet.create({
  // ScrollView contentContainerStyle requires StyleSheet
  scrollContent: {
    paddingBottom: 24,
  },
});
