export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface SubArea {
  id: string;           // e.g. "sa-react"
  regionId: string;
  name: string;
  description: string;
  gridOffset: { x: number; z: number }; // logical cells within the region
  concepts: string[];
}

export interface Region {
  id: string;           // e.g. "region-frontend"
  slug: string;
  name: string;         // e.g. "Frontend Fountain"
  description: string;
  accentColor: string;
  gridOrigin: { x: number; z: number }; // world units (pre-scaled)
  subAreas: SubArea[];
}

export interface Exercise {
  id: string;
  subAreaId: string;    // was topicId
  conceptId: string;
  title: string;
  prompt: string;
  difficulty: Difficulty;
}

export interface UserMastery {
  userId: string;
  regionId: string;
  subAreaId: string;    // was topicId
  conceptId: string;
  score: number; // 0–100
  lastActivityAt: string; // ISO timestamp
}

export interface Submission {
  id: string;
  userId: string;
  exerciseId: string;
  answer: string;
  submittedAt: string;
  status: "pending" | "evaluating" | "complete" | "error";
  evaluationResult?: EvaluationResult;
}

export interface EvaluationResult {
  score: number; // 0–100
  strengths: string[];
  improvements: string[];
  nextConcepts: string[];
  feedback: string;
}
