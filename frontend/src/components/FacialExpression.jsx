import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

export default function FacialExpression({ setsongs }) {
  const videoRef = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);

 
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };
    loadModels();
  }, []);

 
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraStarted(true);
      }
    } catch (err) {
      console.error("Camera error:", err);
      alert("Camera access failed");
    }
  };

  const detectMood = async () => {
    if (!videoRef.current || !cameraStarted) return;

    const detections = await faceapi
      .detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (!detections.length) {
      console.log("No face detected");
      return;
    }

    const expressions = detections[0].expressions;
    const mood = Object.keys(expressions).reduce((a, b) =>
      expressions[a] > expressions[b] ? a : b
    );

    console.log("Detected mood:", mood);

    const response = await axios.get(
      `https://vibetune-0gv3.onrender.com/songs?mood=${mood}`
    );

    setsongs(response.data.songs);
  };

  return (
    <section className="bg-gradient-to-br from-blue-300 via-blue-50 to-blue-50 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        
       
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="rounded-xl w-full md:w-[420px] aspect-video object-cover border border-white"
        />

       
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-xl font-medium text-blue-900">
            Detect your mood
          </h2>

          <p className="text-blue-600 text-sm">
            Start camera, then detect expression
          </p>

          {!cameraStarted ? (
            <button
              onClick={startCamera}
              className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-medium"
            >
              Start Camera
            </button>
          ) : (
            <button
              onClick={detectMood}
              className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-medium"
            >
              Detect Mood
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
