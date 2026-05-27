import { images } from "@/constants/images";
import { languages, learnerCounts } from "@/data/languages";
import type { Language } from "@/types/learning";
import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLanguageStore } from "../store/languageStore";

export default function LanguageSelection() {
  const router = useRouter();
  const { selectedLanguageCode: savedLanguageCode, setSelectedLanguageCode: saveLanguageToStore } = useLanguageStore();
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string | null>(savedLanguageCode);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return languages;
    const q = searchQuery.toLowerCase();
    return languages.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const renderLanguageItem = ({ item }: { item: Language }) => {
    const isSelected = selectedLanguageCode === item.code;

    return (
      <TouchableOpacity
        className={`flex-row items-center py-4 px-4 rounded-2xl ${isSelected ? "border-2 border-lingua-purple bg-lingua-purple/5" : "border border-border bg-surface"
          }`}
        style={styles.languageCard}
        onPress={() => setSelectedLanguageCode(item.code)}
      >
        {/* Circular flag */}
        <View className="w-12 h-12 rounded-full overflow-hidden bg-surface items-center justify-center mr-4">
          <Image
            source={{ uri: item.flag }}
            style={{ width: 48, height: 48 }}
            resizeMode="cover"
          />
        </View>

        {/* Language info */}
        <View className="flex-1">
          <Text className="text-h4 text-text-primary">{item.name}</Text>
          <Text className="text-body-sm text-text-secondary">
            {learnerCounts[item.code] ?? item.nativeName}
          </Text>
        </View>

        {/* Selection indicator */}
        {isSelected ? (
          <View className="w-7 h-7 rounded-full bg-lingua-purple items-center justify-center">
            <SymbolView name="checkmark" size={16} tintColor="#FFFFFF" />
          </View>
        ) : (
          <SymbolView name="chevron.right" size={18} tintColor="#9CA3AF" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1">
        {/* ---- Header ---- */}
        <View className="flex-row items-center px-6 pt-4 pb-4">
          {savedLanguageCode ? (
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center"
              onPress={() => router.back()}
            >
              <SymbolView name="chevron.left" size={24} tintColor="#0D132B" />
            </TouchableOpacity>
          ) : (
            <View className="w-10 h-10" />
          )}
          <Text className="flex-1 text-h3 text-text-primary text-center mr-10">
            Choose a language
          </Text>
        </View>

        {/* ---- Search Bar ---- */}
        <View className="px-6 mb-5">
          <View className="flex-row items-center bg-surface rounded-full px-4 py-3">
            <SymbolView name="magnifyingglass" size={20} tintColor="#9CA3AF" />
            <TextInput
              placeholder="Search languages"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* ---- Popular Label ---- */}
        <View className="px-6 mb-3">
          <Text className="text-h3 text-text-primary">Popular</Text>
        </View>

        {/* ---- Language List ---- */}
        <FlatList
          data={filteredLanguages}
          keyExtractor={(item) => item.code}
          renderItem={renderLanguageItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          ListFooterComponent={
            <View className="items-center mt-6 mb-4">
              <Image
                source={images.earth}
                style={{ width: 280, height: 160 }}
                resizeMode="contain"
              />
            </View>
          }
        />

        {/* ---- Continue Button (replaces "See all languages") ---- */}
        {selectedLanguageCode && (
          <View className="px-6 pb-8 pt-3 bg-white">
            <TouchableOpacity
              className="bg-lingua-purple py-4 rounded-3xl items-center"
              activeOpacity={0.8}
              onPress={() => {
                saveLanguageToStore(selectedLanguageCode);
                router.replace("/");
              }}
            >
              <Text className="text-white text-h4 font-semibold">Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  languageCard: {
    marginHorizontal: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D132B",
    paddingVertical: 0,
  },
  listContent: {
    paddingBottom: 24,
    paddingTop: 4,
  },
});
