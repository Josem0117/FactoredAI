Steps to execute the aplication using docker.

This repository contains a Dockerized application with a ReactJS frontend and a FastAPI backend.
## Prerequisites

- Docker: Make sure you have Docker installed on your system. You can download and install Docker from [https://www.docker.com/](https://www.docker.com/).
  
## Getting Started

1. Clone the repository:
Install git in your system and execute the following command
git clone https://github.com/Josem0117/FactoredAI

2. Navigate to the root directory of the cloned repository:
cd your-repository

## Building and Running the Docker Containers


### Frontend

1. Navigate to the frontend directory:

cd employees

2. Build the Docker image for the frontend:

docker build -t frontend .

3. Run the Docker container for the frontend:

docker run -d -p 3000:80 frontend
![image](https://github.com/Josem0117/FactoredAI/assets/90717090/fcae91e5-1664-4217-9c65-c59c3dda8652)
![image](https://github.com/Josem0117/FactoredAI/assets/90717090/ba4dfe88-6ff8-4c44-bb70-c0f2e70a6db5)

You can now access the frontend application at http://localhost:3000.
![image](https://github.com/Josem0117/FactoredAI/assets/90717090/10aad204-1887-402b-90e5-aa57097708fe)

### Backend

1. Navigate to the backend directory:

cd..

2. Build the Docker image for the backend:

docker build -t backend .

3. Run the Docker container for the backend:

docker run -d -p 8000:8000 backend
![image](https://github.com/Josem0117/FactoredAI/assets/90717090/f2ce6982-4f55-4ef2-9c4f-05d372fcc7b1)

The backend API is now accessible at http://localhost:8000/employees.
![image](https://github.com/Josem0117/FactoredAI/assets/90717090/293b4577-fca4-4097-b11a-011ff84b9c19)


## Stopping the Containers

To stop the Docker containers, use the following commands:

docker stop $(docker ps -aq)
