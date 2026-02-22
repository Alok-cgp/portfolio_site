from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from backend.database.db import get_database
from backend.models.chat import ChatHistory
from backend.services.openrouter import get_ai_response
from backend.services.resume_loader import load_resume

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, db = Depends(get_database)):
    user_message = request.message
    resume_content = load_resume()
    
    if not resume_content:
        ai_reply = "Error: Resume not found or empty. Please check server/resume.txt"
    else:
        ai_reply = await get_ai_response(user_message, resume_content)

    # Save to MongoDB
    chat_entry = ChatHistory(user_message=user_message, ai_response=ai_reply)
    await db.chat_history.insert_one(chat_entry.dict())

    return ChatResponse(reply=ai_reply)
