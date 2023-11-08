---
title: "Video with Custom Image"
date: "October 29 2023"
excerpt: "Video with Image"
cover_image: "images/posts/013_MondayNightAllStarsHeader.png"
tag: "dev:ffmpeg"
---

# Video with Image

Create a video with a image over audio using FFMPEG

```
ffmpeg -loop 1 -i "path/to/image.png" -i "path/to/audio.mp3" -c:v libx264 -shortest -pix_fmt yuv420p "ouput/video.mp4"
```