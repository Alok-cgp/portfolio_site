from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

# Robustly load .env from backend root
current_dir = os.path.dirname(os.path.abspath(__file__))
env_path = os.path.join(current_dir, "..", ".env")
load_dotenv(env_path)

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    # Fallback or error - for now we assume it's there or we use a local one
    DATABASE_URL = "mongodb://localhost:27017"

try:
    client = AsyncIOMotorClient(DATABASE_URL, serverSelectionTimeoutMS=5000)
    db = client.get_database("portfolio")
    # Verify connection (optional, might slow down startup)
    # client.admin.command('ping')
    print("Connected to MongoDB")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    # Fallback to avoid crashing the app on import, but requests will fail
    client = None
    db = None

def get_database():
    if db is None:
        raise Exception("Database connection failed. Check logs and DATABASE_URL.")
    return db
