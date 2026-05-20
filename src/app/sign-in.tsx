import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { images } from "../constants/images";

export default function SignInScreen() {
  const router = useRouter();

  // Form State
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Verification Modal State
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState("");
  const [codeFocused, setCodeFocused] = useState(false);

  const codeInputRef = useRef<TextInput>(null);

  // Focus the input when modal opens
  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        codeInputRef.current?.focus();
      }, 300);
    } else {
      setCode("");
    }
  }, [modalVisible]);

  // Form Validation
  const validateForm = () => {
    let isValid = true;
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      setModalVisible(true);
    }
  };

  const handleCodeChange = (text: string) => {
    // Only allow numbers
    const cleanText = text.replace(/[^0-9]/g, "");
    setCode(cleanText);

    if (cleanText.length === 6) {
      // Auto-submit code and navigate to home
      setModalVisible(false);
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 pb-8">
            {/* Header / Back Button */}
            <View className="mt-2 flex-row items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-10 h-10 items-center justify-center rounded-full bg-slate-50 border border-slate-100"
                activeOpacity={0.7}
              >
                <SymbolView name="chevron.left" size={20} tintColor="#0D132B" />
              </TouchableOpacity>
            </View>

            {/* Title & Subtitle */}
            <View className="mt-5">
              <Text className="text-h1 text-text-primary tracking-tight">
                Welcome back
              </Text>
              <Text className="text-body-lg text-text-secondary mt-1">
                Log in to continue your progress 🌟
              </Text>
            </View>

            {/* Mascot Illustration */}
            <View className="items-center justify-center mt-4 mb-2 z-10 relative">
              <Image
                source={images.mascotAuth}
                style={{ width: 160, height: 160 }}
                resizeMode="contain"
              />
            </View>

            {/* Form Fields Section */}
            <View className="gap-4 mt-[-10px] relative z-0">
              {/* Email Card Input */}
              <View
                className={`h-[72px] bg-white border rounded-2xl px-4 py-3 justify-center ${
                  emailError ? "border-error" : "border-slate-200 focus-within:border-lingua-purple"
                }`}
              >
                <Text className="text-[12px] font-medium text-slate-400">Email</Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="alex@gmail.com"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="text-base text-slate-800 font-poppins mt-0.5 p-0"
                  style={{ includeFontPadding: false, textAlignVertical: "center" }}
                />
              </View>
              {emailError ? (
                <Text className="text-error text-body-sm px-1 mt-[-8px]">
                  {emailError}
                </Text>
              ) : null}
            </View>

            {/* Primary Sign In CTA Button */}
            <TouchableOpacity
              onPress={handleSignIn}
              className="w-full bg-lingua-purple h-14 rounded-2xl items-center justify-center mt-6 shadow-sm shadow-lingua-purple/20 active:opacity-90"
              activeOpacity={0.8}
            >
              <Text className="text-white text-h4 font-semibold">Sign In</Text>
            </TouchableOpacity>

            {/* "or continue with" Divider */}
            <View className="flex-row items-center my-8">
              <View className="flex-1 h-[1px] bg-slate-200" />
              <Text className="mx-4 text-slate-400 text-body-sm font-medium">
                or continue with
              </Text>
              <View className="flex-1 h-[1px] bg-slate-200" />
            </View>

            {/* Social Logins Stack */}
            <View className="gap-3">
              {/* Google Button */}
              <TouchableOpacity
                className="w-full h-14 bg-white border border-slate-200 rounded-2xl flex-row items-center px-6 active:bg-slate-50"
                activeOpacity={0.8}
              >
                <View className="absolute left-6 w-6 h-6 items-center justify-center">
                  <View className="w-5 h-5 rounded-full border-2 border-[#4285F4] items-center justify-center">
                    <Text className="text-[#4285F4] font-bold text-xs mt-[-1px]">G</Text>
                  </View>
                </View>
                <View className="flex-1 items-center justify-center">
                  <Text className="text-slate-800 font-semibold text-body-lg">
                    Continue with Google
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Facebook Button */}
              <TouchableOpacity
                className="w-full h-14 bg-white border border-slate-200 rounded-2xl flex-row items-center px-6 active:bg-slate-50"
                activeOpacity={0.8}
              >
                <View className="absolute left-6 w-6 h-6 items-center justify-center">
                  <View className="w-6 h-6 rounded-full bg-[#1877F2] items-center justify-center">
                    <Text className="text-white font-bold text-sm mt-[-1px]">f</Text>
                  </View>
                </View>
                <View className="flex-1 items-center justify-center">
                  <Text className="text-slate-800 font-semibold text-body-lg">
                    Continue with Facebook
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Apple Button */}
              <TouchableOpacity
                className="w-full h-14 bg-white border border-slate-200 rounded-2xl flex-row items-center px-6 active:bg-slate-50"
                activeOpacity={0.8}
              >
                <View className="absolute left-6 w-6 h-6 items-center justify-center">
                  <Text className="text-slate-900 text-lg font-bold"></Text>
                </View>
                <View className="flex-1 items-center justify-center">
                  <Text className="text-slate-800 font-semibold text-body-lg">
                    Continue with Apple
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Bottom Navigation Link */}
            <View className="flex-row justify-center items-center mt-12 mb-4">
              <Text className="text-slate-500 text-body-lg">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/sign-up" as any)}>
                <Text className="text-lingua-purple font-semibold text-body-lg">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Verification Code Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          className="flex-1 bg-black/40 justify-end"
          onPress={() => setModalVisible(false)}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ width: "100%" }}
          >
            {/* Modal Card Content */}
            <Pressable
              className="bg-white rounded-t-[32px] px-6 pt-8 pb-12 w-full border-t border-slate-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 20,
              }}
              onPress={(e) => e.stopPropagation()} // Prevent closing when tapping card itself
            >
              {/* Header inside Modal */}
              <View className="flex-row justify-between items-center mb-6">
                <Text className="text-h2 text-text-primary">
                  Enter verification code
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center"
                >
                  <Text className="text-slate-500 font-bold text-sm">✕</Text>
                </TouchableOpacity>
              </View>

              {/* Subtext */}
              <Text className="text-body-lg text-text-secondary pr-6 leading-relaxed">
                We've sent a 6-digit verification code to{"\n"}
                <Text className="text-text-primary font-semibold">{email}</Text>
              </Text>

              {/* Secret hidden TextInput */}
              <TextInput
                ref={codeInputRef}
                value={code}
                onChangeText={handleCodeChange}
                maxLength={6}
                keyboardType="number-pad"
                autoFocus={false}
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />

              {/* Custom Display Grid of Code Inputs */}
              <Pressable
                onPress={() => codeInputRef.current?.focus()}
                className="flex-row justify-between w-full my-8"
              >
                {Array.from({ length: 6 }).map((_, i) => {
                  const isDigitEntered = code.length > i;
                  const isActiveCell = code.length === i;

                  return (
                    <View
                      key={i}
                      className={`w-[48px] h-[56px] bg-slate-50 border rounded-xl items-center justify-center ${
                        isActiveCell
                          ? "border-lingua-purple border-[2px] bg-white"
                          : "border-slate-200"
                      }`}
                    >
                      <Text className="text-h2 font-bold text-slate-800">
                        {isDigitEntered ? code[i] : ""}
                      </Text>
                      {isActiveCell && (
                        <View className="w-[2px] h-6 bg-lingua-purple absolute rounded animate-pulse" />
                      )}
                    </View>
                  );
                })}
              </Pressable>

              {/* Resend and Helper Text */}
              <View className="flex-row justify-center items-center mt-2">
                <Text className="text-slate-400 text-body-sm">
                  Didn't receive the code?{" "}
                </Text>
                <TouchableOpacity onPress={() => setCode("")}>
                  <Text className="text-lingua-purple font-semibold text-body-sm">
                    Resend Code
                  </Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </KeyboardAvoidingView>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
