import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6">
        {/* Top Logo Section */}
        <View className="flex-row items-center justify-center mt-6 mb-8 gap-3">
          <Image
            source={images.mascotLogo}
            style={{ width: 48, height: 48 }}
            resizeMode="contain"
          />
          <Text className="text-h2 font-bold text-text-primary tracking-tight">
            pandua
          </Text>
        </View>

        {/* Text Content */}
        <View className="mt-4">
          <Text className="text-h1 text-text-primary">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="text-body-lg text-text-secondary mt-4 pr-8">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Center Illustration */}
        <View className="flex-1 items-center justify-center py-8">
          <View className="relative w-full max-w-[380px] aspect-square items-center justify-center">
            <Image
              source={images.mascotWelcome}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />

            {/* Speech Bubbles */}
            <View className="absolute top-12 left-2 bg-[#EBF3FF] px-5 py-3 rounded-3xl rounded-br-md -rotate-6 shadow-sm">
              <Text className="text-[#0D132B] text-h4">Hello!</Text>
            </View>

            <View className="absolute top-4 right-10 bg-[#F4F0FF] px-5 py-3 rounded-3xl rounded-bl-md rotate-3 shadow-sm">
              <Text className="text-lingua-purple text-h4">¡Hola!</Text>
            </View>

            <View className="absolute top-36 right-0 bg-[#FFF0EB] px-5 py-3 rounded-3xl rounded-bl-md rotate-6 shadow-sm">
              <Text className="text-[#FF4D4F] text-h4">你好!</Text>
            </View>
          </View>
        </View>

        {/* Bottom Button Section */}
        <View className="mb-8 mt-auto">
          <TouchableOpacity
            className="w-full bg-lingua-purple rounded-3xl flex-row items-center justify-center py-4 px-6"
            activeOpacity={0.8}
            onPress={() => router.push("/sign-up" as any)}
          >
            <View className="flex-1 items-center pl-6">
              <Text className="text-h4 text-white font-semibold">
                Get Started
              </Text>
            </View>
            <SymbolView name="chevron.right" size={24} tintColor="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
