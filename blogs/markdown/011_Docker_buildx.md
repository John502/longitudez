---
title: "Docker Buildx"
date: "February 27 2023"
excerpt: "Using Docker Buildx for your M1 arm architecture"
cover_image: "./images/posts/011_Docker_Buildx.png"
tag: "dev:docker:build:buildx"
---

# Docker Buildx 

Recently I have been working with an ARM (Advanced RISC Machines) based development environment.  These processors are desirable for their low costs, minimal power consumption and lower heat generation. They are more common in smaller devices such as laptops, smart phones IOT devices, and noteworthily newer Macbooks. 

If you pedal in microservices chances are you are utilizing `docker`.  Probably utilizing a docker file in order to build your microservices or standup dependencies for local development. 

## Multi-platform imagines
 
Docker automatically selects the platform for which matches your operating system, which is fine if you are the only utilizing the images.  But what if a client is utilizing the Arm/M1 or the ppc64le architecture, how do you develop images varieties of processors.   

The client will receive and error message. 

```bash
The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
```

The supported architecture of image can be found in the manifest file, it will list all supported architectures. 

```
docker manifest inspect alpine:latest
```
```
{
   "schemaVersion": 2,
   "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
   "manifests": [
      {
         "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
         "size": 528,
         "digest": "sha256:e2e16842c9b54d985bf1ef9242a313f36b856181f188de21313820e177002501",
         "platform": {
            "architecture": "amd64",
            "os": "linux"
         }
      },

```


Enter `docker buildx`, it builds your images for multiple architectures support. 

Create a new build utilize

```
docker buildx create --use --name <some name>
```
Build & push to you local docker repository. You can only declare on platform with a local repository. 
```
docker buildx build --platform linux/arm64 --load -t <some image name> <docker file dir>
```
Build for multiple platforms
```
docker buildx build --platform linux/amd64,linux/arm64 --pull --push --tag <someimagename> <some_image_path>
```
use `regctl` as an alternative to inspect docker manifests.