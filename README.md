# 🦺 BuildSafe-AI

An AI-powered construction site safety inspection platform that analyzes construction site observations using Google Gemini AI.

## Features

- AI-powered safety inspection
- PPE compliance detection
- Risk assessment
- Safety recommendations
- REST API with Node.js & Express

## Tech Stack

- Node.js
- Express.js
- Google Gemini API
- JavaScript

## Installation

```bash
npm install
```

Create a `.env` file:

```env
PORT=8000
GEMINI_API_KEY=YOUR_API_KEY
```

Run the project:

```bash
npm run dev
```

## API Endpoint

### POST `/api/inspection/analyze`

Request:

```json
{
  "inspectionType": "ppe",
  "prompt": "Worker wearing helmet and safety shoes but no gloves."
}
```

## Team

- Vivek Keskar – Backend & AI