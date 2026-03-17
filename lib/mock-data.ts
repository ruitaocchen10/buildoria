import type { Region, Exercise, UserMastery } from "./types";

export const MOCK_REGIONS: Region[] = [
  {
    id: "region-frontend",
    slug: "frontend-fountain",
    name: "Frontend Fountain",
    description: "React, JavaScript, CSS, and performance.",
    accentColor: "#22d3ee",
    gridOrigin: { x: 0, z: 0 },
    subAreas: [
      { id: "sa-react", regionId: "region-frontend", name: "React Realms", description: "React fundamentals and state management.", gridOffset: { x: 0, z: 0 }, concepts: ["react-fundamentals", "state-management", "hooks", "context"] },
      { id: "sa-javascript", regionId: "region-frontend", name: "JavaScript Junction", description: "Core JavaScript and modern ES features.", gridOffset: { x: 2, z: 0 }, concepts: ["closures", "async-await", "prototypes", "modules"] },
      { id: "sa-css", regionId: "region-frontend", name: "CSS Citadel", description: "Styling, layout, and animations.", gridOffset: { x: 0, z: 2 }, concepts: ["flexbox", "grid", "animations", "responsive"] },
      { id: "sa-perf", regionId: "region-frontend", name: "Performance Plaza", description: "Web performance and optimization.", gridOffset: { x: 2, z: 2 }, concepts: ["code-splitting", "lazy-loading", "caching", "bundle-size"] },
    ],
  },
  {
    id: "region-api",
    slug: "api-avenue",
    name: "API Avenue",
    description: "HTTP, REST, Auth, and GraphQL.",
    accentColor: "#00d4ff",
    gridOrigin: { x: 20, z: 0 },
    subAreas: [
      { id: "sa-http", regionId: "region-api", name: "HTTP Harbor", description: "HTTP protocol fundamentals.", gridOffset: { x: 0, z: 0 }, concepts: ["http-methods", "status-codes", "headers", "cookies"] },
      { id: "sa-rest", regionId: "region-api", name: "REST Ridge", description: "REST API design principles.", gridOffset: { x: 2, z: 0 }, concepts: ["rest-principles", "resources", "pagination", "versioning"] },
      { id: "sa-auth", regionId: "region-api", name: "Auth Alley", description: "Authentication and authorization.", gridOffset: { x: 0, z: 2 }, concepts: ["jwt", "oauth2", "sessions", "rbac"] },
      { id: "sa-graphql", regionId: "region-api", name: "GraphQL Grounds", description: "GraphQL queries and schemas.", gridOffset: { x: 2, z: 2 }, concepts: ["queries", "mutations", "subscriptions", "resolvers"] },
    ],
  },
  {
    id: "region-data",
    slug: "data-district",
    name: "Data District",
    description: "SQL, indexing, NoSQL, and schemas.",
    accentColor: "#a855f7",
    gridOrigin: { x: 40, z: 0 },
    subAreas: [
      { id: "sa-sql", regionId: "region-data", name: "SQL Square", description: "Relational databases and SQL.", gridOffset: { x: 0, z: 0 }, concepts: ["sql-basics", "joins", "aggregations", "transactions"] },
      { id: "sa-index", regionId: "region-data", name: "Index Isle", description: "Database indexing strategies.", gridOffset: { x: 2, z: 0 }, concepts: ["b-tree", "composite-indexes", "covering-indexes", "explain-plan"] },
      { id: "sa-nosql", regionId: "region-data", name: "NoSQL Nook", description: "Document, key-value, and graph databases.", gridOffset: { x: 0, z: 2 }, concepts: ["document-stores", "key-value", "graph-db", "eventual-consistency"] },
      { id: "sa-schema", regionId: "region-data", name: "Schema Spire", description: "Data modeling and normalization.", gridOffset: { x: 2, z: 2 }, concepts: ["normalization", "denormalization", "migrations", "data-types"] },
    ],
  },
  {
    id: "region-sysdesign",
    slug: "system-design-sector",
    name: "System Design Sector",
    description: "Scalability, caching, queues, and microservices.",
    accentColor: "#f59e0b",
    gridOrigin: { x: 0, z: 20 },
    subAreas: [
      { id: "sa-scale", regionId: "region-sysdesign", name: "Scale Station", description: "Horizontal and vertical scaling.", gridOffset: { x: 0, z: 0 }, concepts: ["load-balancing", "horizontal-scaling", "sharding"] },
      { id: "sa-cache", regionId: "region-sysdesign", name: "Cache Castle", description: "Caching layers and strategies.", gridOffset: { x: 2, z: 0 }, concepts: ["redis", "cdn", "cache-invalidation", "write-through"] },
      { id: "sa-queue", regionId: "region-sysdesign", name: "Queue Quarter", description: "Message queues and async patterns.", gridOffset: { x: 0, z: 2 }, concepts: ["kafka", "rabbitmq", "pub-sub", "backpressure"] },
      { id: "sa-micro", regionId: "region-sysdesign", name: "Micro Market", description: "Microservices architecture.", gridOffset: { x: 2, z: 2 }, concepts: ["service-mesh", "api-gateway", "circuit-breaker", "sagas"] },
      { id: "sa-cap", regionId: "region-sysdesign", name: "CAP Corner", description: "CAP theorem and distributed systems.", gridOffset: { x: 1, z: 1 }, concepts: ["cap-theorem", "consistency", "availability", "partition-tolerance"] },
    ],
  },
  {
    id: "region-devops",
    slug: "devops-depot",
    name: "DevOps Depot",
    description: "Containers, Kubernetes, pipelines, and infra.",
    accentColor: "#4ade80",
    gridOrigin: { x: 20, z: 20 },
    subAreas: [
      { id: "sa-containers", regionId: "region-devops", name: "Container Court", description: "Docker and containerization.", gridOffset: { x: 0, z: 0 }, concepts: ["docker", "images", "volumes", "networking"] },
      { id: "sa-kube", regionId: "region-devops", name: "Kube Keep", description: "Kubernetes orchestration.", gridOffset: { x: 2, z: 0 }, concepts: ["pods", "deployments", "services", "ingress"] },
      { id: "sa-pipeline", regionId: "region-devops", name: "Pipeline Park", description: "CI/CD pipelines and automation.", gridOffset: { x: 0, z: 2 }, concepts: ["github-actions", "build-stages", "testing", "deployment"] },
      { id: "sa-infra", regionId: "region-devops", name: "Infra Island", description: "Infrastructure as code.", gridOffset: { x: 2, z: 2 }, concepts: ["terraform", "ansible", "pulumi", "cloud-providers"] },
    ],
  },
  {
    id: "region-security",
    slug: "security-stronghold",
    name: "Security Stronghold",
    description: "OWASP, auth patterns, crypto, and threat modeling.",
    accentColor: "#f87171",
    gridOrigin: { x: 40, z: 20 },
    subAreas: [
      { id: "sa-owasp", regionId: "region-security", name: "OWASP Outpost", description: "OWASP Top 10 vulnerabilities.", gridOffset: { x: 0, z: 0 }, concepts: ["sql-injection", "xss", "csrf", "insecure-deserialization"] },
      { id: "sa-autharmory", regionId: "region-security", name: "Auth Armory", description: "Secure authentication patterns.", gridOffset: { x: 2, z: 0 }, concepts: ["mfa", "password-hashing", "session-security", "sso"] },
      { id: "sa-crypto", regionId: "region-security", name: "Crypto Crypt", description: "Cryptography fundamentals.", gridOffset: { x: 0, z: 2 }, concepts: ["symmetric", "asymmetric", "hashing", "tls"] },
      { id: "sa-threat", regionId: "region-security", name: "Threat Tower", description: "Threat modeling and secure coding.", gridOffset: { x: 2, z: 2 }, concepts: ["stride", "attack-trees", "secure-coding", "pen-testing"] },
    ],
  },
];

export const MOCK_MASTERY: UserMastery[] = [
  // Frontend Fountain
  { userId: "user-1", regionId: "region-frontend", subAreaId: "sa-react", conceptId: "react-fundamentals", score: 95, lastActivityAt: "2026-03-16T03:00:00Z" },
  { userId: "user-1", regionId: "region-frontend", subAreaId: "sa-react", conceptId: "hooks", score: 80, lastActivityAt: "2026-03-15T10:00:00Z" },
  { userId: "user-1", regionId: "region-frontend", subAreaId: "sa-javascript", conceptId: "closures", score: 70, lastActivityAt: "2026-03-14T09:00:00Z" },
  { userId: "user-1", regionId: "region-frontend", subAreaId: "sa-css", conceptId: "flexbox", score: 60, lastActivityAt: "2026-03-12T08:00:00Z" },
  // API Avenue
  { userId: "user-1", regionId: "region-api", subAreaId: "sa-http", conceptId: "http-methods", score: 85, lastActivityAt: "2026-03-15T10:00:00Z" },
  { userId: "user-1", regionId: "region-api", subAreaId: "sa-rest", conceptId: "rest-principles", score: 70, lastActivityAt: "2026-03-14T09:00:00Z" },
  { userId: "user-1", regionId: "region-api", subAreaId: "sa-auth", conceptId: "jwt", score: 50, lastActivityAt: "2026-03-10T08:00:00Z" },
  // Data District
  { userId: "user-1", regionId: "region-data", subAreaId: "sa-sql", conceptId: "sql-basics", score: 90, lastActivityAt: "2026-03-16T07:00:00Z" },
  { userId: "user-1", regionId: "region-data", subAreaId: "sa-index", conceptId: "b-tree", score: 60, lastActivityAt: "2026-03-12T06:00:00Z" },
  // System Design
  { userId: "user-1", regionId: "region-sysdesign", subAreaId: "sa-scale", conceptId: "load-balancing", score: 30, lastActivityAt: "2026-03-01T05:00:00Z" },
  { userId: "user-1", regionId: "region-sysdesign", subAreaId: "sa-cache", conceptId: "redis", score: 45, lastActivityAt: "2026-03-05T04:00:00Z" },
  // DevOps
  { userId: "user-1", regionId: "region-devops", subAreaId: "sa-containers", conceptId: "docker", score: 75, lastActivityAt: "2026-03-13T04:00:00Z" },
  { userId: "user-1", regionId: "region-devops", subAreaId: "sa-kube", conceptId: "pods", score: 40, lastActivityAt: "2026-03-08T03:00:00Z" },
  // Security
  { userId: "user-1", regionId: "region-security", subAreaId: "sa-owasp", conceptId: "xss", score: 20, lastActivityAt: "2026-02-20T02:00:00Z" },
];

export const MOCK_EXERCISES: Exercise[] = [
  {
    id: "ex-1",
    subAreaId: "sa-rest",
    conceptId: "rest-principles",
    title: "Design a REST API for a blog",
    prompt: "Design the REST API endpoints for a blog platform with posts, comments, and authors. List the endpoints, HTTP methods, and expected response codes for each.",
    difficulty: "beginner",
  },
  {
    id: "ex-2",
    subAreaId: "sa-index",
    conceptId: "b-tree",
    title: "Explain database indexing",
    prompt: "A table with 10 million rows is experiencing slow queries on a column used in WHERE clauses. Describe how you would diagnose and fix this with indexing.",
    difficulty: "intermediate",
  },
  {
    id: "ex-3",
    subAreaId: "sa-cache",
    conceptId: "redis",
    title: "Design a caching layer",
    prompt: "Your application is hitting the database on every page load. Design a caching strategy including what to cache, where (client, CDN, server), and cache invalidation.",
    difficulty: "intermediate",
  },
];

/** Returns the average mastery score for a sub-area (0–100) */
export function subAreaMasteryScore(subAreaId: string, mastery: UserMastery[]): number {
  const scores = mastery.filter((m) => m.subAreaId === subAreaId).map((m) => m.score);
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
