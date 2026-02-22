from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes import chat
import uvicorn
import os

app = FastAPI(title="Portfolio AI Backend")

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio Backend API"}

if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
