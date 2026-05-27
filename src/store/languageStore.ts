import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LanguageState {
  selectedLanguageCode: string | null;
  setSelectedLanguageCode: (code: string | null) => void;
  clearSelectedLanguage: () => Promise<void>;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageCode: null,
      setSelectedLanguageCode: (code) => set({ selectedLanguageCode: code }),
      clearSelectedLanguage: async () => {
        set({ selectedLanguageCode: null });
        await AsyncStorage.removeItem("language-storage");
      },
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (!error && state) {
            state.setHasHydrated(true);
          }
        };
      },
    }
  )
);
