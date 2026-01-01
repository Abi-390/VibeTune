import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FacialExpression() {
  const videoRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      });
    };
    init();
  }, []);

  const detectMood = async () => {
    if (!videoRef.current) return;

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
  };

  return (
    <section className="bg-gradient-to-br from-blue-300 via-blue-50 to-blue-50 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          className="rounded-xl w-full md:w-[420px] aspect-video object-cover border border-white"
        />

        {/* Controls */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-xl font-medium text-blue-900">Detect your mood</h2>
          <p className="text-blue-600 text-sm">
            Click the button to analyze facial expression
          </p>

          <button
            onClick={detectMood}
            className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-medium"
          >
            Detect Mood
          </button>
        </div>
      </div>
    </section>
  );
}
