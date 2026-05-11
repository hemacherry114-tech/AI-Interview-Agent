from fastapi import FastAPI, UploadFile, File
import PyPDF2
import io
from pydantic import BaseModel
import google.generativeai as genai

# Paste your Gemini API key here
genai.configure(api_key="AIzaSyB_T4PH0jHDKb54d_NbMhIjKku7SZ4GuOw")

model = genai.GenerativeModel("gemini-1.5-flash")

app = FastAPI()

class ResumeInput(BaseModel):
    resume_text: str
    role: str
    interviewer_type: str

@app.get("/")
def home():
    return {"message": "AI Interview Assistant Backend Running"}

@app.post("/generate-questions")
def generate_questions(data: ResumeInput):

    prompt = f"""
You are acting as a
{data.interviewer_type}.

Generate 5 interview questions
for a {data.role} role
based on this resume:

{data.resume_text}

Your tone and questioning style
must match the interviewer type.
"""

    response = model.generate_content(prompt)

    return {
        "questions": response.text
    }

class AnswerInput(BaseModel):
    question: str
    answer: str


@app.post("/evaluate-answer")
def evaluate_answer(data: AnswerInput):

    prompt = f"""
    You are an interview evaluator.

    Interview Question:
    {data.question}

    Candidate Answer:
    {data.answer}

    Evaluate the answer.

    Give:
    1. Score out of 10
    2. Strengths
    3. Weaknesses
    4. Better sample answer
    """

    response = model.generate_content(prompt)

    return {
        "feedback": response.text
    }


@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    contents = await file.read()

    pdf_reader = PyPDF2.PdfReader(
        io.BytesIO(contents)
    )

    text = ""

    for page in pdf_reader.pages:
        text += page.extract_text()

    return {
        "resume_text": text
    }