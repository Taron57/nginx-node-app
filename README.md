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

docker compose up --build

Then open your browser and go to:

👉 http://localhost:8080

You should see:
"Hello from Node.js behind NGINX!"

# You can see in the first commit

# Task 2: Run multiple Node.js app containers behind an NGINX load balancer using Docker Compose.

# What You’ll Build

    2+ identical Node.js app containers

    1 NGINX container to load balance across them

    Use round-robin load balancing

    Access via http://localhost:8080 and see responses from different app instances

# How to Run

docker compose up --build

Then visit:

👉 http://localhost:8080

Hit refresh several times — you should alternate between:

Hello from Node.js Instance: app1
Hello from Node.js Instance: app2



