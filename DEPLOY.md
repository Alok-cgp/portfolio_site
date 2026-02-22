# Deployment Guide

## 1. Local Deployment (Production Mode)

This project is configured to run as a single unit where the FastAPI backend serves the React frontend.

### Prerequisites
- Python 3.8+
- Node.js 18+
- PostgreSQL (or SQLite for local testing)

### Steps
1. **Build the Frontend**:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
   This creates a `dist` folder with the optimized frontend assets.

2. **Setup Backend**:
   ```bash
   cd backend
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Mac/Linux:
   source venv/bin/activate
   
   pip install -r requirements.txt
   ```

3. **Configure Environment**:
   Create a `.env` file in `backend/` with:
   ```env
   OPENROUTER_API_KEY=your_key_here
   DATABASE_URL=postgresql://user:pass@host/db
   ```

4. **Run the Server**:
   ```bash
   python main.py
   ```
   The application will be available at `http://localhost:8000`.

## 2. Public Access (Bonus: Cloudflare Tunnel)

To expose your local server to the internet securely (without port forwarding), use **Cloudflare Tunnel**.

### Option A: Quick Tunnel (No account required)
1. Install `cloudflared`:
   - **Windows**: `winget install Cloudflare.cloudflared`
   - **Mac**: `brew install cloudflare/cloudflare-oss/cloudflared`
   
2. Run the tunnel:
   ```bash
   cloudflared tunnel --url http://localhost:8000
   ```
3. Copy the URL provided (e.g., `https://random-name.trycloudflare.com`). Share this URL!

### Option B: LocalTunnel (Alternative)
1. Install global package:
   ```bash
   npm install -g localtunnel
   ```
2. Run tunnel:
   ```bash
   lt --port 8000
   ```

## 3. Cloud Deployment (Render/Railway/Vercel)

- **Frontend**: Deploy `frontend/dist` to Vercel/Netlify.
- **Backend**: Deploy `backend/` to Render/Railway.
- **Database**: Use Neon (PostgreSQL) or Railway Postgres.
