import { images } from "@/constants/images";
import VerificationModal from "@/VerificationModal";
import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleSignUp = () => {
    setShowVerification(true);
  };

  const handleVerificationComplete = () => {
    setShowVerification(false);
    router.push("/");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView className="flex-1 px-6">
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()} className="mb-6">
            <SymbolView name="chevron.left" size={24} tintColor="#0D132B" />
          </TouchableOpacity>

          {/* Heading */}
          <Text className="text-h1 text-text-primary font-bold mb-2">
            Create your account
          </Text>
          <Text className="text-body-lg text-text-secondary mb-8">
            Start your language journey today ✨
          </Text>

          {/* Mascot Image */}
          <View className="items-center mb-8">
            <Image
              source={images.mascotAuth}
              style={{ width: 200, height: 150 }}
              resizeMode="contain"
            />
          </View>

          {/* Email Input */}
          <View className="mb-6">
            <Text className="text-body-md text-text-secondary mb-2 ml-1">
              Email
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F6F7FB",
                borderRadius: 16,
                paddingHorizontal: 20,
                paddingVertical: 16,
                borderWidth: 1,
                borderColor: "#E5E7EB",
              }}
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              editable={!showVerification}
            />
          </View>

          {/* Password Input */}
          <View className="mb-8">
            <Text className="text-body-md text-text-secondary mb-2 ml-1">
              Password
            </Text>
            <View
              style={{
                backgroundColor: "#F6F7FB",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 16,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                }}
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                editable={!showVerification}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <SymbolView
                  name={passwordVisible ? "eye.fill" : "eye.slash.fill"}
                  size={20}
                  tintColor="#6B7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            onPress={handleSignUp}
            disabled={showVerification}
            className="bg-lingua-purple rounded-3xl py-4 mb-6"
            activeOpacity={0.8}
          >
            <Text className="text-h4 text-white font-semibold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-border" />
            <Text className="text-body-md text-text-secondary mx-4">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          {/* Social Auth Buttons */}
          <TouchableOpacity className="flex-row items-center gap-3 bg-surface px-4 py-4 rounded-2xl mb-4">
            <Image
              source={{
                uri: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNPCUJASGNQPQ0KPC9zdmc+Cjwvc3ZnPg==",
              }}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-body-md text-text-primary font-medium flex-1">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-3 bg-surface px-4 py-4 rounded-2xl mb-4">
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: "#1877F2",
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text className="text-white text-h4 font-bold">f</Text>
            </View>
            <Text className="text-body-md text-text-primary font-medium flex-1">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-3 bg-surface px-4 py-4 rounded-2xl mb-8">
            <SymbolView name="apple.logo" size={24} tintColor="#000000" />
            <Text className="text-body-md text-text-primary font-medium flex-1">
              Continue with Apple
            </Text>
          </TouchableOpacity>

          {/* Sign In Link */}
          <View className="flex-row items-center justify-center mb-8">
            <Text className="text-body-md text-text-secondary">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text className="text-body-md text-lingua-purple font-semibold">
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Verification Modal */}
        <VerificationModal
          visible={showVerification}
          onClose={() => setShowVerification(false)}
          onComplete={handleVerificationComplete}
          email={email}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
