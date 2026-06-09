import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProgressState {
  completedLessonIds: string[];
  xp: number;
  streak: number;
  completeLesson: (lessonId: string, xpReward: number) => void;
  resetProgress: () => Promise<void>;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedLessonIds: [],
      xp: 0,
      streak: 1,
      completeLesson: (lessonId, xpReward) =>
        set((state) => {
          if (state.completedLessonIds.includes(lessonId)) {
            return state;
          }
          return {
            completedLessonIds: [...state.completedLessonIds, lessonId],
            xp: state.xp + xpReward,
          };
        }),
      resetProgress: async () => {
        set({ completedLessonIds: [], xp: 0, streak: 1 });
        await AsyncStorage.removeItem("progress-storage");
      },
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "progress-storage",
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
