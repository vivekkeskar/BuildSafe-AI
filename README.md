# 🦺 BuildSafe-AI

## Problem Statement

Construction sites are among the most hazardous workplaces due to unsafe practices, improper use of Personal Protective Equipment (PPE), and delayed identification of potential risks. Manual safety inspections require significant time and continuous supervision, making it difficult to detect every violation in real time. This can lead to workplace accidents, injuries, and project delays.

There is a need for an intelligent solution that can quickly analyze construction site images, identify safety issues, and provide actionable recommendations to improve worker safety.

## Proposed solution

BuildSafe-AI is an AI-powered construction site safety inspection system that analyzes uploaded site images and automatically identifies potential safety hazards. The application uses Computer Vision and Generative AI to inspect construction environments, detect safety violations, and generate an easy-to-understand inspection report.

The system provides:

1)Detection of construction site safety issues.
2)Identification of missing PPE such as helmets and safety vests.
3)AI-generated safety analysis and recommendations.
4)Safety score based on the overall site condition.
5)Risk level classification (Low, Medium, High).
6)Instant inspection report to support faster safety decisions.

By automating the inspection process, BuildSafe-AI helps improve workplace safety, reduces manual effort, and enables quicker identification of hazardous situations.

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
