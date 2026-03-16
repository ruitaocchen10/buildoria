# Container Diagram

At this level we break the system into major applications and services.

The system contains five primary containers.

1. Frontend Web Application

Technology:

- Next.js
- React

Hosting:

- DigitalOcean App Platform

Responsibilities:
The frontend provides the user interface for the platform. It presents the gamified city map, allows users to select technology districts, displays exercises, and shows feedback and skill progression.

Main features include:

- City map interface representing technology topics
- Exercise interface where users complete challenges
- Progress represented as buildings growing taller as you grow skills in particular topics
  - Subidea: Building activity increases the more consistently involved you are in a certain topic - if you take time off learning, there are less lights, people, etc.
- Submission interface for sending solutions to the backend

The frontend communicates with the backend API to retrieve exercises, submit solutions, and retrieve evaluation results.

2. Backend API

Technology:

- Node.js
- Next.js API routes

Hosting:

- DigitalOcean App Platform

Responsibilities:
The backend API serves as the central coordination layer of the system. It handles requests from the frontend, manages user progress, retrieves exercises, and coordinates the AI evaluation process.

Key responsibilities include:

- authentication and user management
- exercise retrieval
- submission handling
- routing evaluation requests to mentor agents
- updating user progress and mastery levels

The backend communicates with the database and the AI evaluation system.

3. AI Evaluation System

Technology:

- DigitalOcean Gradient AI Platform

Responsibilities:
The AI evaluation system acts as the intelligent mentoring engine for the platform.

It receives user submissions and performs the following tasks:

- analyzes code or answers
- evaluates correctness and quality
- generates feedback
- recommends next concepts to learn
- determines mastery score updates

The AI system is structured as a set of topic-specific mentor agents.

4. Database

Technology:

- DigitalOcean Managed Databases

Responsibilities:
The database stores all persistent platform data.

Key data stored includes:

- Users
- Information about each learner including account data and progress.
- Exercises
- A structured set of engineering challenges tied to specific concepts and topics.
- Concept Knowledge Graph
- A hierarchical representation of technology skills including topics, concepts, and dependencies.
- User Progress
- Mastery scores for each concept that determine progression in the gamified city.
- Submissions
- Records of user solutions and AI evaluations.
