import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function Index() {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <Text className="text-h1 text-lingua-purple text-center">lingua</Text>
        <Text className="text-body-lg text-text-secondary text-center">
          Design system implemented successfully!
        </Text>
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
          className="bg-error/10 border border-error py-3 px-8 rounded-2xl active:opacity-80 mt-4"
          onPress={handleLogout}
        >
          <Text className="text-error text-h4 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
