import { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {
  const [songs,setsongs] = useState([
   
  ]);
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        
       
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide italic text-blue-900 "style={{
    textShadow: "0 4px 12px rgba(59,130,246,0.45)"
  }}>
            VibeTune
          </h1>
          <p className="text-blue-700 text-sm md:text-base">
            Emotion-aware music recommendations
          </p>
        </header>

        
        <FacialExpression setsongs={setsongs} />

        <MoodSongs songs = {songs} />

      </div>
    </div>
  );
}

export default App;
