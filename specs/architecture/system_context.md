# System Context

The system is a gamified engineering learning platform where aspiring builders improve their technical skills by learning and completing exercises. Users interact with the system through a web application that presents challenges organized as a city map of technology topics.

## Primary user:

The main actor is a developer or aspiring engineer who wants to improve their technical abilities by completing exercises and receiving AI-driven feedback.

The user interacts with the system through a web browser.

## External systems:

The platform relies on the DigitalOcean Gradient AI Platform to perform AI-driven evaluation and mentoring. This service provides the large language model that analyzes user submissions and generates feedback.

The system is hosted using cloud infrastructure from DigitalOcean.

## Example User Flow

This walkthrough illustrates a complete end-to-end session to ground the architecture in concrete behavior.

### City Taxonomy

The city map has two levels of hierarchy:

- **Districts** — top-level areas representing broad engineering domains: Backend, Frontend, Data, DevOps
- **Buildings** — languages and tools within each district (e.g. Python, REST APIs, Databases inside the Backend district)

A language or tool can appear in multiple districts. For example, Python appears in both Backend and Data, each with independent mastery tracking.

Building height reflects the user's mastery score for that language/tool. Building activity (lights on, people visible) reflects recency of engagement — it decays when the user hasn't practiced a topic.

---

### Step-by-Step Flow

**1. Login → Personal City**

The user authenticates and lands on their personal city map. Districts (Backend, Frontend, Data, DevOps) are visible as top-level zones. Within each district, buildings of varying heights represent the tools and languages the user has engaged with. A brand-new user sees a mostly flat city with short starter buildings.

> **Open question:** What does a new user's city look like on first login? Cold-start / onboarding experience is a separate design concern and not addressed here.

**2. Click Backend District → Zoom In**

The user clicks the Backend district. The map zooms in to show district-level buildings: Python, REST APIs, Databases, System Design, etc. Building heights and activity within the district reflect the user's backend-specific mastery and recency.

**3. Click Python Building → Session Entry**

The user clicks the Python building. The UI transitions from the city map to a learning session view scoped to Python.

**4. Choose Session Mode**

Before the session begins, the user is prompted to choose how they want to learn:

- **"Teach me first"** — the Python Mentor Agent explains a concept, then presents a related challenge
- **"Give me a challenge"** — the agent skips explanation and jumps straight to an exercise

**5. Python Mentor Agent Selects Content**

The Mentor Router dispatches the session to the Python Mentor Agent. The agent reviews the user's skill profile (current mastery scores and concept history) and selects an appropriate concept or exercise based on the chosen mode:

- In "Teach me first" mode: the agent delivers a short concept explanation, then presents a challenge tied to that concept
- In "Give me a challenge" mode: the agent delivers an exercise directly, calibrated to the user's current skill level

**6. User Submits Answer**

The user reads the challenge (a written or design question — no code execution required in MVP) and submits their response.

**7. Agent Evaluates and Gives Feedback**

The Python Mentor Agent evaluates the submission, generates structured feedback (what was right, what was wrong, what to study next), and returns a mastery score delta for the relevant Python concepts.

**8. Session Continuation or End**

The agent decides whether to continue with another challenge or end the session. The continuation mechanic is tied to a daily limit.

> **Open question (TBD):** The daily limit mechanic is undecided. Options under consideration: fixed number of challenges per day, a per-session ceiling, or a time-based cap. The decision depends on LLM credit constraints and will be resolved before launch.

**9. City Visuals Update**

After the session ends, the city reflects the outcome:

- The Python building in the Backend district grows taller if the user's mastery score increased
- Building activity (lights, people) resets to "active" state, reflecting fresh engagement
- If the user had previously neglected Python, the visible improvement in the building signals progress

---
