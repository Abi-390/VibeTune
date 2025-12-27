import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FaceDetector() {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadModelsAndStartVideo = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Camera error:", err));
    };

    loadModelsAndStartVideo();
  }, []);

  const detectMood = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      console.log("No face detected");
      return;
    }

    let maxProb = 0;
    let emotion = "";

    const expressions = detections[0].expressions;
    for (const exp in expressions) {
      if (expressions[exp] > maxProb) {
        maxProb = expressions[exp];
        emotion = exp;
      }
    }

    console.log("Detected emotion:", emotion);
  };

  return (
    <>
      <video ref={videoRef} autoPlay muted width="480" height="360" />
      <button onClick={detectMood}>Detect Mood</button>
    </>
  );
}
