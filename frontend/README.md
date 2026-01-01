# 🎧 VibeTune — Emotion-Aware Music Player (Frontend)

VibeTune is a modern React-based web application that detects a user’s **facial expression** in real time and recommends music based on their **current mood**.  
It combines computer vision with a clean, responsive UI to create an immersive, emotion-aware music experience.

---

## 🌐 Live Demo

👉 **Live Website:**  
https://vibetune-frontend-68wx.onrender.com  
_(replace with your actual Render frontend URL if different)_

---

## ✨ Features

- 🎥 Real-time camera access using **Web APIs**
- 🙂 Facial expression detection using **face-api.js**
- 🎶 Mood-based song recommendations
- 🎚️ Native audio progress bar with manual seek
- 📱 Fully responsive UI (mobile, tablet, desktop)
- 🔐 iOS & Android compatible camera handling
- 🌈 Clean, calm, modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- **React (Vite)**
- **Tailwind CSS**
- **Axios**
- **face-api.js**

### Backend (separate service)

- Node.js
- Express
- MongoDB
- ImageKit
- Deployed on Render

---

## 📸 How It Works

1. User opens the app and clicks **Start Camera**
2. Camera permission is requested (mobile-safe)
3. User clicks **Detect Mood**
4. Facial expression is analyzed using face-api.js
5. Detected mood is sent to backend API
6. Backend returns a list of mood-matched songs
7. Songs auto-play sequentially with user controls

---

## ⚙️ Environment Variables

The frontend uses an environment variable to connect to the backend API.

Create a `.env` file (for local development):

```env(backend)
MONGODB_URL = Your_mongo_url
IMAGEKIT_PRIVATE_KEY = Your_image_kit_private_key
IMAGEKIT_URL_ENDPOINT = Your_image_kit_endpoint
IMAGEKIT_PUBLIC_KEY = Your_image_kit_public_key

```
