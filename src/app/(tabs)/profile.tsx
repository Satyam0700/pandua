import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileTabScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <View className="w-20 h-20 bg-warning/10 rounded-full items-center justify-center mb-2">
          <MaterialCommunityIcons name="account-outline" size={40} color="#FFC800" />
        </View>
        <Text className="text-h1 text-text-primary text-center">Profile</Text>
        <Text className="text-body-lg text-text-secondary text-center max-w-[280px]">
          Track your statistics, streak, achievements, and account settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}
