import os
import httpx
from dotenv import load_dotenv

load_dotenv()

# Robustly load .env from backend root
current_dir = os.path.dirname(os.path.abspath(__file__))
env_path = os.path.join(current_dir, "..", ".env")
load_dotenv(env_path)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

async def get_ai_response(user_message: str, context: str) -> str:
    if not OPENROUTER_API_KEY:
        return "Error: OpenRouter API Key is missing. Please set it in backend/.env"

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Portfolio AI",
    }

    system_prompt = (
        "You are a professional AI assistant for a portfolio website. "
        "Answer ONLY using the provided resume context below. "
        "If the answer is not found in the resume, reply: "
        "'Sorry, this information is not available in the resume.'\n\n"
        f"RESUME CONTEXT:\n{context}"
    )

    payload = {
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ]
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(OPENROUTER_URL, json=payload, headers=headers, timeout=30.0)
            response.raise_for_status()
            data = response.json()
            if "choices" in data and len(data["choices"]) > 0:
                return data["choices"][0]["message"]["content"]
            else:
                return "Error: No response from AI provider."
        except httpx.HTTPStatusError as e:
            return f"Error from AI provider: {e.response.text}"
        except Exception as e:
            return f"An error occurred: {str(e)}"
