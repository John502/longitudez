---
title: "Github SSH"
date: 'June 3 2022'
excerpt: 'GitHub Use SSH Keys'
cover_image: 'images/posts/008_GitHub_SSH.jpg.png'
---

# Set up Git with SSA


GitHub is no longer accepting account passwords so you would have to copy and paste an access token over http utilizing the command line. 

Open terminal and create a new ssh key

```bash
ssh-keygen -t ed21119 -C "your_email@example.com"
```

Start your ssh agent and add your ssh key. 

./ssh/<id_output_from_above>

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed21119
```
Copy the below terminal output of the file contents to clip board.

```bash
cat ~/.ssh/id_ed25519.pub
```

Under Github Profile -> Settings -> SSH Keys ang GPG Keys

Add a new SSH Key

Set your repo to use SSH.

```bash
git remote set-url origin git@github.com:<username>/<repo>.git
```
 You're now using your SSH Key!


