import { create } from "zustand";
import type { Region, SubArea, Exercise, UserMastery } from "./types";
import { MOCK_REGIONS, MOCK_MASTERY } from "./mock-data";

interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

interface BuildoriaStore {
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;

  // Regions
  regions: Region[];
  setRegions: (regions: Region[]) => void;

  // Mastery
  masteryScores: UserMastery[];
  setMasteryScores: (scores: UserMastery[]) => void;
  updateMastery: (updated: UserMastery) => void;

  // Navigation
  currentRegion: Region | null;
  setCurrentRegion: (region: Region | null) => void;
  currentSubArea: SubArea | null;
  setCurrentSubArea: (subArea: SubArea | null) => void;

  // Exercise
  currentExercise: Exercise | null;
  setCurrentExercise: (exercise: Exercise | null) => void;
}

export const useBuildoriaStore = create<BuildoriaStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  regions: MOCK_REGIONS,
  setRegions: (regions) => set({ regions }),

  masteryScores: MOCK_MASTERY,
  setMasteryScores: (masteryScores) => set({ masteryScores }),
  updateMastery: (updated) =>
    set((state) => ({
      masteryScores: state.masteryScores.map((m) =>
        m.subAreaId === updated.subAreaId && m.conceptId === updated.conceptId ? updated : m
      ),
    })),

  currentRegion: null,
  setCurrentRegion: (currentRegion) => set({ currentRegion }),
  currentSubArea: null,
  setCurrentSubArea: (currentSubArea) => set({ currentSubArea }),

  currentExercise: null,
  setCurrentExercise: (currentExercise) => set({ currentExercise }),
}));
