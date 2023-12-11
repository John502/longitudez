---
title: "Docker Commands"
date: "December 11 2024"
excerpt: "Docker Commands"
cover_image: "./images/posts/015_Docker_Commands.png"
tag: "dev:docker:commands"
---

Inspect container health
```
docker inspect --format "{{json .State.Health }}" <container_name>
```
