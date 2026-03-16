import type { Topic, Exercise, UserMastery } from "./types";

export const MOCK_TOPICS: Topic[] = [
  {
    id: "topic-apis",
    slug: "rest-apis",
    name: "REST APIs",
    description: "Design and build HTTP APIs: resources, verbs, status codes, authentication.",
    accentColor: "#00d4ff",
    gridPosition: { x: 0, z: 0 },
    concepts: ["http-basics", "rest-principles", "auth-tokens", "pagination", "error-handling"],
  },
  {
    id: "topic-databases",
    slug: "databases",
    name: "Databases",
    description: "Relational and non-relational data modeling, indexing, and query optimization.",
    accentColor: "#a855f7",
    gridPosition: { x: 2, z: 0 },
    concepts: ["sql-basics", "indexing", "normalization", "transactions", "nosql-patterns"],
  },
  {
    id: "topic-system-design",
    slug: "system-design",
    name: "System Design",
    description: "Scalable architectures: load balancing, caching, message queues, microservices.",
    accentColor: "#f59e0b",
    gridPosition: { x: 0, z: 2 },
    concepts: ["load-balancing", "caching", "message-queues", "microservices", "cap-theorem"],
  },
  {
    id: "topic-devops",
    slug: "devops",
    name: "DevOps",
    description: "CI/CD pipelines, containers, Kubernetes, infrastructure as code.",
    accentColor: "#4ade80",
    gridPosition: { x: 2, z: 2 },
    concepts: ["docker", "kubernetes", "ci-cd", "terraform", "monitoring"],
  },
  {
    id: "topic-frontend",
    slug: "frontend",
    name: "Frontend",
    description: "React, state management, performance optimization, accessibility.",
    accentColor: "#22d3ee",
    gridPosition: { x: 1, z: 1 },
    concepts: ["react-fundamentals", "state-management", "performance", "accessibility", "testing"],
  },
  {
    id: "topic-security",
    slug: "security",
    name: "Security",
    description: "OWASP top 10, auth patterns, threat modeling, secure coding.",
    accentColor: "#f87171",
    gridPosition: { x: 4, z: 0 },
    concepts: ["owasp-top-10", "auth-patterns", "threat-modeling", "encryption", "secure-coding"],
  },
];

export const MOCK_MASTERY: UserMastery[] = [
  { userId: "user-1", topicId: "topic-apis", conceptId: "http-basics", score: 85, lastActivityAt: "2026-03-15T10:00:00Z" },
  { userId: "user-1", topicId: "topic-apis", conceptId: "rest-principles", score: 70, lastActivityAt: "2026-03-14T09:00:00Z" },
  { userId: "user-1", topicId: "topic-apis", conceptId: "auth-tokens", score: 50, lastActivityAt: "2026-03-10T08:00:00Z" },
  { userId: "user-1", topicId: "topic-databases", conceptId: "sql-basics", score: 90, lastActivityAt: "2026-03-16T07:00:00Z" },
  { userId: "user-1", topicId: "topic-databases", conceptId: "indexing", score: 60, lastActivityAt: "2026-03-12T06:00:00Z" },
  { userId: "user-1", topicId: "topic-system-design", conceptId: "load-balancing", score: 30, lastActivityAt: "2026-03-01T05:00:00Z" },
  { userId: "user-1", topicId: "topic-devops", conceptId: "docker", score: 75, lastActivityAt: "2026-03-13T04:00:00Z" },
  { userId: "user-1", topicId: "topic-frontend", conceptId: "react-fundamentals", score: 95, lastActivityAt: "2026-03-16T03:00:00Z" },
  { userId: "user-1", topicId: "topic-security", conceptId: "owasp-top-10", score: 20, lastActivityAt: "2026-02-20T02:00:00Z" },
];

export const MOCK_EXERCISES: Exercise[] = [
  {
    id: "ex-1",
    topicId: "topic-apis",
    conceptId: "rest-principles",
    title: "Design a REST API for a blog",
    prompt: "Design the REST API endpoints for a blog platform with posts, comments, and authors. List the endpoints, HTTP methods, and expected response codes for each.",
    difficulty: "beginner",
  },
  {
    id: "ex-2",
    topicId: "topic-databases",
    conceptId: "indexing",
    title: "Explain database indexing",
    prompt: "A table with 10 million rows is experiencing slow queries on a column used in WHERE clauses. Describe how you would diagnose and fix this with indexing.",
    difficulty: "intermediate",
  },
  {
    id: "ex-3",
    topicId: "topic-system-design",
    conceptId: "caching",
    title: "Design a caching layer",
    prompt: "Your application is hitting the database on every page load. Design a caching strategy including what to cache, where (client, CDN, server), and cache invalidation.",
    difficulty: "intermediate",
  },
];

/** Returns the average mastery score for a topic (0–100) */
export function topicMasteryScore(topicId: string, mastery: UserMastery[]): number {
  const scores = mastery.filter((m) => m.topicId === topicId).map((m) => m.score);
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
