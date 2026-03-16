import { create } from "zustand";
import type { Topic, Exercise, UserMastery } from "./types";
import { MOCK_TOPICS, MOCK_MASTERY } from "./mock-data";

interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

interface BuildoriaStore {
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;

  // Topics
  topics: Topic[];
  setTopics: (topics: Topic[]) => void;

  // Mastery
  masteryScores: UserMastery[];
  setMasteryScores: (scores: UserMastery[]) => void;
  updateMastery: (updated: UserMastery) => void;

  // Navigation
  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic | null) => void;

  // Exercise
  currentExercise: Exercise | null;
  setCurrentExercise: (exercise: Exercise | null) => void;
}

export const useBuildoriaStore = create<BuildoriaStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  topics: MOCK_TOPICS,
  setTopics: (topics) => set({ topics }),

  masteryScores: MOCK_MASTERY,
  setMasteryScores: (masteryScores) => set({ masteryScores }),
  updateMastery: (updated) =>
    set((state) => ({
      masteryScores: state.masteryScores.map((m) =>
        m.topicId === updated.topicId && m.conceptId === updated.conceptId ? updated : m
      ),
    })),

  currentTopic: null,
  setCurrentTopic: (currentTopic) => set({ currentTopic }),

  currentExercise: null,
  setCurrentExercise: (currentExercise) => set({ currentExercise }),
}));
