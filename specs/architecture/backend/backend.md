# Component Diagram (Backend)

Within the backend API container, several internal components manage different responsibilities.

## Authentication Service

Responsibilities:

- Handles user login, authentication tokens, and user identity verification.
- It ensures that all submissions and progress updates are associated with the correct user.

## Exercise Service

Responsibilities:

- Manages the exercise library and delivers challenges to users.

Functions include:

- retrieving exercises based on topic and difficulty
- selecting exercises appropriate for the user’s skill level
- tracking exercise metadata such as topic and concept

The exercise service retrieves data from the exercises table in the database.

## Submission Service

Responsibilities:

- Handles incoming exercise submissions.
- When a user submits an answer, this service:
  - stores the submission
  - retrieves exercise metadata
  - sends the submission to the AI evaluation system

## Mentor Router

Responsibilities:

- Determines which mentor agent should evaluate the submission.
- Each exercise is associated with a technology topic. The mentor router selects the appropriate mentor agent based on this topic.

Example routing logic:

- If the exercise topic is REST APIs, the request is sent to the API mentor agent.
- If the topic is databases, the request is sent to the database mentor agent.

## Progress Service

Responsibilities:

- Updates user mastery levels after an evaluation.
- This component translates evaluation scores into concept mastery updates.

Example:

- A user scoring well on pagination exercises increases their mastery of the pagination concept.
- The mastery score determines the visual progression in the city interface.
