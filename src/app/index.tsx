import { Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/expo";
import { useLanguageStore } from "../store/languageStore";
import { getLanguageByCode } from "../data/languages";

export default function Index() {
  const router = useRouter();
  const { signOut } = useAuth();
  const { selectedLanguageCode, clearSelectedLanguage } = useLanguageStore();

  const activeLanguage = selectedLanguageCode ? getLanguageByCode(selectedLanguageCode) : undefined;

  const handleLogout = async () => {
    await signOut();
  };

  const handleClearLanguage = async () => {
    await clearSelectedLanguage();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <Text className="text-h1 text-lingua-purple text-center">lingua</Text>
        <Text className="text-body-lg text-text-secondary text-center">
          Design system implemented successfully!
        </Text>

        {activeLanguage && (
          <View className="bg-surface border border-border rounded-2xl p-4 flex-row items-center gap-3 w-full max-w-[280px] my-2">
            <View className="w-10 h-10 rounded-full overflow-hidden bg-surface-hover items-center justify-center">
              <Image
                source={{ uri: activeLanguage.flag }}
                style={{ width: 40, height: 40 }}
                resizeMode="cover"
              />
            </View>
            <View className="flex-1">
              <Text className="text-body-xs text-text-secondary uppercase tracking-wider font-semibold">Learning</Text>
              <Text className="text-h4 text-text-primary font-semibold">
                {activeLanguage.name} ({activeLanguage.nativeName})
              </Text>
            </View>
          </View>
        )}

        <View className="flex-row gap-2 mb-8">
          <View className="h-10 w-10 rounded-full bg-lingua-purple" />
          <View className="h-10 w-10 rounded-full bg-success" />
          <View className="h-10 w-10 rounded-full bg-warning" />
          <View className="h-10 w-10 rounded-full bg-error" />
        </View>

        <TouchableOpacity
          className="bg-lingua-purple py-3 px-8 rounded-2xl active:opacity-80"
          onPress={() => router.push("/onboarding")}
        >
          <Text className="text-white text-h4">Open Onboarding</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-lingua-purple py-3 px-8 rounded-2xl active:opacity-80 mt-4"
          onPress={() => router.push("/language-selection")}
        >
          <Text className="text-white text-h4">Select Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-warning/10 border border-warning py-3 px-8 rounded-2xl active:opacity-80 mt-4"
          onPress={handleClearLanguage}
        >
          <Text className="text-warning text-h4 font-semibold">Clear Language (Test)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-error/10 border border-error py-3 px-8 rounded-2xl active:opacity-80 mt-4"
          onPress={handleLogout}
        >
          <Text className="text-error text-h4 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
