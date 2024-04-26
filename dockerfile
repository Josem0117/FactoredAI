# Use official Python image as a base
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
RUN pip install fastapi uvicorn sqlalchemy

# Copy the rest of the application
COPY . .

# Expose port 8000 to the outside world
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
