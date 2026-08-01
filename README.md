# 🦺 BuildSafe AI

> **AI-Powered Construction Safety Inspection & Automated Site Audit using Google Gemini Vision**

BuildSafe AI is an intelligent construction safety inspection platform that leverages **Google Gemini Vision**, **Node.js**, **React**, and **MongoDB** to analyze construction site images, detect PPE compliance, identify workplace hazards, calculate safety compliance, and generate professional AI-powered inspection reports.

The goal of BuildSafe AI is to assist site engineers and safety officers in performing faster, smarter, and more consistent safety inspections while reducing manual effort and improving workplace safety.

---

# 📌 Problem Statement

Construction sites are among the most hazardous work environments due to:

- Improper use of Personal Protective Equipment (PPE)
- Unsafe construction practices
- Manual inspection processes
- Delayed hazard identification
- Human errors during safety audits

Traditional inspections are time-consuming and depend heavily on continuous human supervision, making it difficult to identify every safety violation before accidents occur.

An intelligent AI-based inspection system can significantly improve construction safety by automating hazard detection and generating instant safety reports.

---

# 💡 Solution

BuildSafe AI transforms a simple construction site image into a complete AI-generated safety inspection report.

After uploading an image, the system:

- Detects visible PPE equipment
- Evaluates PPE compliance
- Identifies workplace hazards
- Calculates compliance percentage
- Classifies risk level
- Generates an executive safety summary
- Provides AI-powered safety recommendations
- Exports a professional PDF inspection report

This enables faster decision-making for construction managers and safety engineers.

---

# ✨ Key Features

### 🤖 AI-Powered Construction Site Inspection

Analyze construction site images using **Google Gemini Vision**.

### 🦺 PPE Compliance Detection

Detect safety equipment including:

- Safety Helmet
- Safety Vest
- Safety Gloves
- Safety Goggles
- Safety Shoes

### ⚠️ Hazard Identification

Automatically identifies common construction hazards such as:

- Falling hazards
- Poor housekeeping
- Unsafe material storage
- Missing barricades
- Falling object risks

### 📊 Compliance Score

Calculates overall PPE compliance percentage.

### 🚨 Risk Classification

Classifies inspection results into:

- Low
- Medium
- High
- Critical

### 📝 Executive Summary

Generates an AI-written inspection summary explaining the site's overall safety condition.

### 💡 AI Recommendations

Provides practical recommendations for improving site safety.

### 📄 Professional PDF Report

Generate downloadable inspection reports containing:

- Compliance Score
- Risk Level
- Required PPE
- Detected PPE
- Missing PPE
- Executive Summary
- Hazards
- AI Recommendations

### 📈 Dashboard Analytics

Track:

- Total inspections
- Average compliance
- Critical inspections
- Safe inspections

---

# 🏗️ System Workflow

```
Construction Site Image
          │
          ▼
 Google Gemini Vision
          │
          ▼
 PPE Detection
          │
          ▼
 Decision Engine
          │
          ▼
Compliance Calculation
          │
          ▼
Risk Assessment
          │
          ▼
Executive Summary
          │
          ▼
Hazard Detection
          │
          ▼
AI Recommendations
          │
          ▼
Professional PDF Report
```

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Axios

## Backend

- Node.js
- Express.js
- Multer

## Database

- MongoDB
- Mongoose

## Artificial Intelligence

- Google Gemini Vision API

## PDF Generation

- jsPDF
- jspdf-autotable

---

# 📂 Project Structure

```
BuildSafe-AI
│
├── frontend
│   ├── src
│   ├── components
│   ├── services
│   └── utils
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── middlewares
│   └── utils
│
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/vivekkeskar/BuildSafe-AI.git
```

Move into the project

```bash
cd BuildSafe-AI
```

Install backend dependencies

```bash
cd backend
npm install
```

Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=8000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# ▶️ Run the Project

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

---

# 📡 REST API

## Analyze Construction Site

```
POST /api/inspection/analyze
```

Uploads a construction site image and generates an AI safety inspection report.

---

## Inspection History

```
GET /api/inspection/history
```

Returns all previously stored inspections.

---

## Dashboard Statistics

```
GET /api/inspection/dashboard
```

Returns analytics including compliance and inspection statistics.

---

# 🚀 Future Scope

- Live CCTV monitoring
- Drone-based inspection
- Real-time safety alerts
- Multi-site management
- Worker attendance integration
- Predictive safety analytics
- Mobile application
- OSHA compliance reporting

---

# 👨‍💻 Developer

**Vivek Keskar**

B.Tech Computer Engineering Student

Passionate about Artificial Intelligence, Full Stack Development, and Computer Vision.

GitHub:
https://github.com/vivekkeskar

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates future development and improvements.

---

# 📄 License

This project is developed for educational purposes and hackathon demonstrations.