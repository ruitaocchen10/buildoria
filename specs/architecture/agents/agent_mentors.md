# AI Mentor Agent System

The AI mentor system is composed of several specialized agents.

Each agent represents expertise in a specific engineering topic.

Examples include:

Python Mentor Agent

- Provides evaluation and instruction related to Python programming concepts.

API Mentor Agent

- Handles concepts related to REST APIs, HTTP design, and backend architecture.

Database Mentor Agent

- Evaluates exercises involving SQL, schema design, and database queries.

Debugging Mentor Agent

- Helps analyze broken code and guide users toward identifying errors.

Each mentor agent performs several tasks.

Evaluation

- The agent analyzes the user submission and determines correctness, design quality, and conceptual understanding.

Feedback Generation

- The agent generates clear explanations and guidance on how the user can improve.

Student Memory

- Each mentor maintains a memory of the student’s past performance in that topic, allowing the system to personalize learning.

Adaptive Challenge Suggestions

- The mentor can suggest new exercises that target the student’s weaknesses.

All mentor agents rely on the same underlying large language model provided by the DigitalOcean Gradient AI Platform.

---

## Agent Context Design

Each mentor agent's behavior is shaped by a combination of static files (version-controlled in the repo) and dynamic context injected at call time from the database.

### Static Context Files (per mentor)

Each mentor has two files and one reserved directory:

**`system_prompt.md`** — Personality and role definition
- The mentor's character, tone, and teaching philosophy (e.g. strict vs. encouraging)
- What the agent should and shouldn't do
- How it frames feedback and interacts with the learner

**`curriculum.md`** — Topic expertise and concept map
- List of concepts covered by this mentor
- Concept dependency trees (e.g. SQL SELECT → JOINs → subqueries)
- What mastery looks like at each level
- What is explicitly out of scope

**`knowledge/`** — Reserved, empty for now
- Will hold topic-specific reference material for grounding agent feedback
- Deferred until the core evaluation loop is working end-to-end
- At that point, markdown files will be injected directly into context (no RAG needed at hackathon scale)

### Dynamic Context (NOT a file)

User progress is **not** stored in a file. It is dynamic, per-user, and concurrent — exactly what the database is for. The `UserConceptMastery` table owns this data.

At call time, the Mentor Router queries the DB for the user's mastery state in the relevant topic and formats it as structured text injected into the prompt. No files, no syncing, no race conditions.

Example injected user context:
```
User mastery in Databases topic:
- SQL SELECT: 0.85 (strong)
- JOIN operations: 0.42 (weak — prioritize)
- Schema design: 0.60 (developing)
- Indexing: 0.10 (not started)
```

---

## File Structure

```
/agents/
  mentors/
    databases/
      system_prompt.md
      curriculum.md
      knowledge/
    frontend/
      system_prompt.md
      curriculum.md
      knowledge/
    apis/
      system_prompt.md
      curriculum.md
      knowledge/
    python/
      system_prompt.md
      curriculum.md
      knowledge/
    debugging/
      system_prompt.md
      curriculum.md
      knowledge/
```

These files live in the repo (`/agents/` directory), are version-controlled, and are deployed with the app. They are not stored in DigitalOcean Spaces — they are small, structured files that benefit from git history and code review.

---

## How the Mentor Router Assembles the Final Prompt

At request time, for a given `(userId, topic, submission)`:

1. Load `agents/mentors/{topic}/system_prompt.md` — static personality
2. Load `agents/mentors/{topic}/curriculum.md` — topic concept map
3. Load relevant `agents/mentors/{topic}/knowledge/*.md` — reference docs (when populated)
4. Query DB → `UserConceptMastery` for this user + topic → format as structured text
5. Compose final prompt = system_prompt + curriculum + knowledge + user_context + submission
6. Call DigitalOcean Gradient AI LLM
7. Parse response → mastery score delta + feedback text
8. Return to Submission Service → Progress Service updates DB
