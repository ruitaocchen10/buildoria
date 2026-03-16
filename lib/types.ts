export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Topic {
  id: string;
  slug: string;
  name: string;
  description: string;
  accentColor: string;
  gridPosition: { x: number; z: number };
  concepts: string[];
}

export interface Exercise {
  id: string;
  topicId: string;
  conceptId: string;
  title: string;
  prompt: string;
  difficulty: Difficulty;
}

export interface UserMastery {
  userId: string;
  topicId: string;
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
