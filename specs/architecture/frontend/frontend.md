# Frontend UI

Container: Frontend Web Application

Technology:

- Next.js
- React

Purpose:

The frontend application provides the interactive interface for users to explore the engineering city, complete exercises, and track their progress.

It communicates with the backend API to retrieve exercises, submit solutions, and update user progress.

## UI Component: Application Shell

Responsibilities:

- The Application Shell manages the overall structure of the interface.
- It provides the persistent layout and routing system that connects all UI views.

Key responsibilities:

- navigation between major pages
- layout structure
- authentication state
- global UI elements

Examples:

- navigation bar
- sidebar
- notifications
- global user state

Routes managed here might include:

/city
/exercise
/progress
/profile

## UI Component: City Map Interface

Responsibilities:

- The City Map Interface visualizes the knowledge graph as a city.
- Users explore different regions and buildings representing engineering topics.

Key functions:

- render technology districts
- show building growth based on mastery
- allow users to select topics to train in

Example UI interactions:

- User opens city map
- User clicks "Backend District"
- User selects "REST API Building"

The component then requests available exercises from the backend.

Data retrieved from:

GET /topics
GET /progress

### Rendering Technology: React Three Fiber (R3F)

The city map is rendered using React Three Fiber — a React renderer for Three.js.

Packages:

- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — helpers: OrthographicCamera, Html overlays, Environment lighting
- `@react-three/postprocessing` — Bloom effect for glowing windows

How the scene works:

- OrthographicCamera locked at isometric angle (position [10, 10, 10]) — gives classic city-builder look
- Each building is a `BoxGeometry` mesh. Height (Y scale) is driven by the topic's mastery score (0–1)
- Window glow: emissive material intensity driven by activity score (engagement recency). Low activity = dim windows. High activity = bright windows with Bloom post-processing
- District labels rendered as HTML overlays via `drei`'s `<Html>` component
- User clicks a building → triggers topic selection → navigates to Topic View

## UI Component: Topic View

Responsibilities:

- The Topic View displays information about a specific skill area.
- This view sits between the city map and the exercise interface.
- It provides context about the topic and lists available exercises.

Displayed information may include:

- topic description
- mastery level
- available challenges
- recommended next exercises

Example user flow:

- User enters API district
- Topic view shows available challenges
- User selects exercise

## UI Component: Exercise Interface

Responsibilities:

- The Exercise Interface is where users complete challenges.
- It presents the problem, allows the user to submit a solution, and displays evaluation feedback.

Key UI elements:

- exercise description
- code editor or input field
- submission button
- evaluation feedback panel

Typical workflow:

- Exercise displayed
- User writes code or answer
- User submits solution
- The component sends the submission to the backend.

API request:

- POST /submit-exercise
- Payload includes:
- exercise ID
- user solution
- user ID

## UI Component: Evaluation Feedback Panel

Responsibilities:

- Displays AI-generated feedback from the mentor system.
- This component explains what the user did correctly and what could be improved.

Example displayed information:

- correctness score
- strengths
- improvement suggestions
- next concept recommendation

Example feedback:

Score: 8/10

Strengths:
Correct pagination logic.

Improvements:
Missing edge case handling for empty pages.

Suggested next concept:
Rate limiting.

Data retrieved from:

GET /submission-result

## UI Component: Mentor Interaction Panel (Optional but Powerful)

Responsibilities:

- Allows users to interact directly with their AI mentor for guidance.
- This panel provides contextual explanations or hints about exercises.

Example interactions:

User asks:

- Why is pagination important in APIs?
- The mentor responds with a conceptual explanation and possibly a small example.
- This component communicates with the AI evaluation system through the backend.

API endpoint example:

POST /mentor-question

## UI Component: State Management Layer

Responsibilities:

- Manages shared application state across components.

Examples of shared state:

- user authentication
- exercise progress
- current topic
- evaluation results

Typical technologies used might include:

- React Context
- Zustand
- Redux

This layer ensures that changes in one component update other relevant components.

Example:

When an exercise is completed, the city map updates to reflect the building growth.

## UI Interaction Flow

A typical interaction across these components looks like this:

- User opens the city map.
- The City Map Interface loads the user’s progress and displays the development of different districts.
- The user selects a building representing a specific concept.
- The Topic View displays available exercises for that concept.
- The user chooses an exercise and enters the Exercise Interface.
- After completing the exercise, the user submits their solution.
- The Evaluation Feedback Panel displays AI-generated feedback.
- The City Map update to reflect the user’s new mastery level.
