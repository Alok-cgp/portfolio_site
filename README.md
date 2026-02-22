# AI-Powered Personal Portfolio

A production-ready personal portfolio website featuring a real-time AI chat assistant that answers questions based on your resume.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, TailwindCSS, Framer Motion
- **Backend**: Python, FastAPI
- **Database**: MongoDB Atlas (async via Motor)
- **AI**: OpenRouter API (Mistral/Llama models)

## Features
- 🎨 **Modern UI/UX**: Dark mode, sticky navbar, smooth scrolling, responsive design.
- 🤖 **AI Chat Assistant**: Context-aware chatbot that answers questions from your resume.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- 🚀 **Deployment Ready**: Unified build system for easy deployment.

## Project Structure
```
/
├── backend/            # FastAPI server
│   ├── database/       # Database connection & models
│   ├── services/       # AI & Resume logic
│   ├── routes/         # API endpoints
│   ├── resume.txt      # Resume context for AI
│   └── main.py         # App entry point
├── frontend/           # React + Vite app
│   ├── src/            # Components & Logic
│   └── dist/           # Built static files
└── DEPLOY.md           # Deployment instructions
```

## Quick Start
1. **Frontend**: `cd frontend && npm install && npm run dev`
2. **Backend**: `cd backend && pip install -r requirements.txt && python main.py`
3. **Visit**: `http://localhost:5173` (Dev) or `http://localhost:8000` (Prod)
