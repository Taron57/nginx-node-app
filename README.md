# nginx-node-app


# Task 1 : Use NGINX as a Reverse Proxy for a Node.js App

# Goal:

Run a Node.js web server behind an NGINX reverse proxy using Docker containers.

📁 Project Structure

nginx-node-app/
├── app/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── nginx/
│   └── default.conf
├── docker-compose.yml


# How to Run

docker-compose up --build

Then open your browser and go to:

👉 http://localhost:8080

You should see:
"Hello from Node.js behind NGINX!"