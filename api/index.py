from backend.main import app

# This is required for Vercel
# The serverless function needs to expose the 'app' object
# Vercel's Python runtime will look for 'app' or 'handler'
