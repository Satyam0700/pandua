import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LearnTabScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <View className="w-20 h-20 bg-lingua-purple/10 rounded-full items-center justify-center mb-2">
          <MaterialCommunityIcons name="book-open-outline" size={40} color="#6C4EF5" />
        </View>
        <Text className="text-h1 text-text-primary text-center">Learn</Text>
        <Text className="text-body-lg text-text-secondary text-center max-w-[280px]">
          Interactive curriculum, grammar, and vocabulary building blocks.
        </Text>
      </View>
    </SafeAreaView>
  );
}
