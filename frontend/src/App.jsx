import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        
       
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide italic "style={{
    textShadow: "0 4px 12px rgba(4,4,4,4)"
  }}>
            VibeTune
          </h1>
          <p className="text-white text-sm md:text-base">
            Emotion-aware music recommendations
          </p>
        </header>

        
        <FacialExpression />

        <MoodSongs />

      </div>
    </div>
  );
}

export default App;
