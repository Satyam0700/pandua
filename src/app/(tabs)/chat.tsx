import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatTabScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center p-6 gap-4">
        <View className="w-20 h-20 bg-info/10 rounded-full items-center justify-center mb-2">
          <MaterialCommunityIcons name="message-outline" size={40} color="#4D8BFF" />
        </View>
        <Text className="text-h1 text-text-primary text-center">Chat</Text>
        <Text className="text-body-lg text-text-secondary text-center max-w-[280px]">
          Practice conversational skills with your personal AI language partner.
        </Text>
      </View>
    </SafeAreaView>
  );
}
