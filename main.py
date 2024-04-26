from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db import session, Employee

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for demonstration purposes
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/employees/")
def get_employees():
    employees = session.query(Employee).all()
    return employees

@app.get("/employees/{employee_id}")
def get_employee(employee_id: int):
    employee = session.query(Employee).filter(Employee.id == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
