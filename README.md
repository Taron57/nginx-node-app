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



# Task 3: Monitor Docker containers and Node.js metrics using Prometheus + Grafana

Updated Stack Components

   1. Multiple Node.js containers (app1, app2)

   2. NGINX to load balance requests across them

   3. Prometheus to scrape metrics (from one or both apps)

   4. Grafana for dashboards

📁 Updated Folder Structure

├── app
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── docker-compose.yaml
├── nginx
│   └── default.conf
├── prometheus
│   └── prometheus.yml
└── README.md


# How to Run

docker compose up --build


# Test It

    NGINX Load Balancer: http://localhost:8080
    Refresh to alternate between app1 and app2

    Metrics endpoints:

           Inside Prometheus: http://localhost:9090

    Grafana UI: http://localhost:3001

 # Grafana Setup

    Login (admin / admin)

    Add Prometheus as a data source (http://prometheus:9090)

    Import a dashboard (Node.js dashboard ID: 11074 or 1860 for general metrics)


✅ Summary

You now have:

✅ Multiple load-balanced Node.js apps
✅ NGINX as a reverse proxy/load balancer
✅ Prometheus scraping each app’s metrics
✅ Grafana for dashboards and visualization