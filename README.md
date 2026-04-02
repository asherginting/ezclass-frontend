# EZclass Frontend Technical Assessment

## 🧰 Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **React Query (@tanstack/react-query)** — async state & polling
* **Tailwind CSS** — styling
* **Zod** — schema validation

---

## ✨ Features

### 📝 Test Submission

* Multiple-choice questions (3 questions)
* Dynamic answer state handling
* Client-side validation using Zod
* Disabled submit button until all questions are answered

---

### 🔄 Async Processing Flow

* Submit answers to mock API
* Receive `taskId`
* Poll result endpoint every 2 seconds
* Stop polling when processing is complete

---

### 📊 Result View

* Loading / processing state
* Error handling with retry
* Final result display:

  * Score
  * Level
  * Certificate link
* Restart test functionality

---

## 🧠 Architecture & Approach

This project follows a **feature-based architecture** to keep the codebase scalable and maintainable.

```
src/
  app/                → routing & pages
  features/
    placement-test/
      components/     → UI components
      hooks/          → React Query logic
      services/       → API layer
      data/           → mock questions
      schema/         → validation (Zod)
      types/          → TypeScript types
  lib/
    react-query.tsx   → Query client provider
```

### Key Principles

* **Separation of concerns**
* **Reusable components**
* **Typed API contracts**
* **Minimal but effective abstraction**
* **Production-oriented structure**

---

## 🔌 API Design (Mocked)

### POST `/api/placement-test/submit`

* Accepts user answers
* Returns:

```json
{
  "taskId": "string",
  "status": "processing"
}
```

---

### GET `/api/placement-test/result/:taskId`

* Simulates async processing
* Returns either:

```json
{
  "status": "processing"
}
```

or

```json
{
  "status": "completed",
  "score": 85,
  "level": "Intermediate",
  "certificateUrl": "https://example.com/certificate.pdf"
}
```

---

## ⚙️ Getting Started

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🧪 Notes on Implementation

* Polling is handled using **React Query's `refetchInterval`**
* API is mocked using **Next.js Route Handlers**
* The UI prioritizes **clarity and UX feedback** over visual complexity
* Error and loading states are treated as first-class citizens

---

## 🌐 Deployment

The application is deployed using **Vercel**.

---

## 📌 Final Thoughts

This project focuses on simulating real-world frontend challenges:

* async workflows
* state management
* API interaction
* user experience under uncertainty

Rather than over-engineering, the goal was to build a **clean, maintainable, and production-aware solution**.

---
