# AI-Driven Dynamic Layout Engine

An innovative, full-stack **AI Engineering Proof-of-Concept (POC)** that enables real-time, natural-language automation for digital canvas layouts. Built around a **Server-Driven UI (Data-Driven UI)** architecture, the system translates conversational text instructions directly into structured JSON layout tokens, which instantly render into a responsive, live-preview wireframe canvas.

This project bridges the gap between conversational generative AI and absolute front-end coordinate manipulation, showcasing high-performance processing utilizing the Google Gen AI SDK and a reactive React + Node.js stack.

---

# 🚀 Key Features

## Conversational Layout Manipulation
Use simple natural language instructions to dynamically redesign and transform visual layouts.

Examples:
- *"Convert this canvas to a 9:16 aspect ratio"*
- *"Shift the primary headline to the absolute top and reduce the font size"*
- *"Add a footer CTA button aligned center-bottom"*

The system interprets prompts semantically and converts them into structured layout mutations.

---

## Server-Driven UI Architecture
The presentation layer is completely decoupled from application logic.

All layouts are controlled through:
- Structured JSON schemas
- Dynamic layout tokens
- Semantic positioning metadata
- Render-safe coordinate calculations

This allows the frontend to operate entirely from a centralized configuration state.

---

## Real-Time Synchronized Preview
The interface provides a fully synchronized multi-panel development environment:

- AI Chat Interface
- Responsive SVG/HTML Canvas Preview
- Live JSON Schema Viewer

Every AI-generated layout mutation immediately re-renders across all visualization layers.

---

## Semantic Layout Intelligence
Powered by Google Gemini models, the engine:
- Understands design semantics
- Computes layout transformations safely
- Prevents clipping and overlaps
- Preserves proportional spacing
- Dynamically adjusts typography and containers

Mathematical transformations include:
- `x`
- `y`
- `width`
- `height`
- inline styling objects

---

## Instant Portability
Generated layout schemas can be exported instantly using:
- One-click schema copy
- JSON export pipelines
- Frontend framework integration support
- Figma plugin compatibility concepts

This enables rapid prototyping and production portability.

---

# 🛠️ Tech Stack & Architecture

## Frontend (Client)

### Framework
- React.js
- Vite

### Styling
- Tailwind CSS

### Rendering
- Dynamic SVG/HTML canvas rendering
- Reactive state synchronization
- Live layout mutations

### Core Responsibilities
- Prompt submission
- Live wireframe visualization
- JSON schema rendering
- State synchronization

---

## Backend (Server)

### Runtime
- Node.js

### Framework
- Express.js

### AI Integration
- Google Gen AI SDK
- `@google/genai`
- `@google/generative-ai`

### Model Engine
- Gemini 2.5 Flash

### Core Responsibilities
- Prompt orchestration
- Context injection
- Layout transformation processing
- JSON schema validation
- AI response parsing

---

# 📂 Project Directory Structure

```text
layout-agent/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── JsonViewer.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   └── WireframePreview.jsx
│   │   ├── data/
│   │   │   └── initialLayout.json
│   │   ├── hooks/
│   │   │   └── useLayoutAgent.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/
│   ├── prompts/
│   │   └── systemPrompt.js
│   ├── routes/
│   │   └── chat.js
│   ├── services/
│   │   ├── layoutTransforms.js
│   │   └── llmService.js
│   ├── utils/
│   │   └── jsonValidator.js
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── APPROACH.md
├── README.md
└── .gitignore


```


Screenshots :

<img width="1920" height="993" alt="{36B63794-1F9F-4D29-ACDF-33CD99F8EA17}" src="https://github.com/user-attachments/assets/5a8c8e3e-1e7d-41af-a1ae-78b77006e416" />

<img width="1920" height="945" alt="{131D1DC7-1BF8-499A-A3A2-3BAE0E2A3381}" src="https://github.com/user-attachments/assets/9d55edcd-f7aa-4aa7-ae99-ff6448c8cbb8" />

<img width="1920" height="946" alt="{9E22F4F0-7627-433E-9ECA-6B726139E8F1}" src="https://github.com/user-attachments/assets/4f792842-a956-40c3-9698-fd4493ec3747" />



### Live Link ### : ***https://chat-bot-layout-agent.vercel.app/***


