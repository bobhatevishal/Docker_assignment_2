````
# Docker Assignment 2

This repository contains Docker tasks and examples completed as part of **Docker Assignment 2**.

---

## 📚 Tasks Covered

### 1️⃣ Docker Volumes

- Explanation of what Docker volumes are and why they are used.
- Types of volumes:
  - Named Volumes
  - Anonymous Volumes
  - Bind Mounts
- Differences between them.
- Example commands to create and use volumes.

### 2️⃣ Demonstrating Named Volume

- Created a named volume (`mydata`).
- Attached it to an Nginx container.
- Copied `index.html` into the volume.
- Verified the content through HTTP request.

### 3️⃣ Docker Networks

- Brief overview of Docker networks.
- Difference between **bridge network** and **host network**.

### 4️⃣ Custom Network Demonstration

- Created a custom bridge network (`my_network`).
- Launched Nginx and Apache HTTPD containers attached to this network.
- Verified connectivity between containers using `curl`.

### 5️⃣ Dockerfile Overview

- Explained Dockerfile instructions with examples:
  - `FROM`
  - `WORKDIR`
  - `COPY`
  - `ADD`
  - `RUN`
  - `CMD`
  - `EXPOSE`
  - `ENV`
  - `VOLUME`
  - `ENTRYPOINT`
  - `LABEL`

### 6️⃣ CMD vs ENTRYPOINT

- Explained the purpose and differences between `CMD` and `ENTRYPOINT`.

### 7️⃣ ADD vs COPY

- Clarified differences and use cases for `ADD` and `COPY`.

### 8️⃣ Node.js Application Dockerfile

- Dockerfile to:
  - Build a Node.js app image.
  - Create a container.
  - Declare a persistent volume.
  - (Note: Network configuration is applied during `docker run`, not inside Dockerfile.)

### 9️⃣ Python Application Dockerfile

- Dockerfile to:
  - Build a Python app image.
  - Tag the image.
  - Push it to a private Docker Hub repository.

---

## 🛠️ Example Docker Commands

**Create a named volume:**
```bash
docker volume create mydata
````

**Run Nginx with volume:**

```bash
docker run -d -p 8080:80 -v mydata:/usr/share/nginx/html nginx
```

**Create custom network:**

```bash
docker network create my_network
```

**Run containers in the custom network:**

```bash
docker run -d --name nginx --network my_network nginx
docker run -d --name httpd --network my_network httpd
```

**Verify connectivity:**

```bash
docker exec -it nginx apt-get update && apt-get install -y curl
docker exec -it nginx curl http://httpd
```
