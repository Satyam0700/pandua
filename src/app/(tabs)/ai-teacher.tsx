import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AiTeacherTabScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <View className="w-20 h-20 bg-success/10 rounded-full items-center justify-center mb-2">
          <MaterialCommunityIcons name="robot-outline" size={40} color="#21C16B" />
        </View>
        <Text className="text-h1 text-text-primary text-center">AI Teacher</Text>
        <Text className="text-body-lg text-text-secondary text-center max-w-[280px]">
          Live AI video lessons and pronunciation coaching.
        </Text>
      </View>
    </SafeAreaView>
  );
}
