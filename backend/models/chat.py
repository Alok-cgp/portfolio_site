from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class ChatHistory(BaseModel):
    user_message: str
    ai_response: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_schema_extra = {
            "example": {
                "user_message": "Hello",
                "ai_response": "Hi there!",
                "timestamp": "2023-10-01T12:00:00"
            }
        }
