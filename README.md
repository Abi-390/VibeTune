# 🎧 VibeTune — Emotion-Aware Music Player (Frontend)

VibeTune is a modern React-based web application that detects a user’s **facial expression** in real time and recommends music based on their **current mood**.  
It combines computer vision with a clean, responsive UI to create an immersive, emotion-aware music experience.

---

## 🌐 Live Demo

👉 **Live Website:**  
https://vibetune-frontend-68wx.onrender.com

---

## ✨ Features

- 🎥 Real-time camera access using **Web APIs**
- 🙂 Facial expression detection using **face-api.js**
- 🎶 Mood-based song recommendations
- 🎚️ Native audio progress bar with manual seek
- ▶️ Sequential display of recommended songs
- 📱 Fully responsive UI (mobile, tablet, desktop)
- 🔐 iOS & Android compatible camera handling
- 🌈 Clean, calm, modern UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **Axios**
- **face-api.js**

### Backend (separate service)
- **Node.js**
- **Express**
- **MongoDB**
- **ImageKit**
- **Deployed on Render**

---

## 📸 How It Works

1. User opens the app and clicks **Start Camera**
2. Camera permission is requested (mobile-safe)
3. User clicks **Detect Mood**
4. Facial expression is analyzed using **face-api.js**
5. Detected mood is sent to the backend API
6. Backend returns a list of mood-matched songs
7. Recommended songs are displayed and played sequentially with user controls

---

## ⚙️ Environment Variables (Backend)

The backend uses environment variables to connect to **MongoDB** and **ImageKit**.

Create a `.env` file inside the **backend** folder for local development:

```env
MONGODB_URL=your_mongodb_connection_url
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
