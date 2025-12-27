import React, { useState } from "react";

const MoodSongs = () => {
  const [songs] = useState([
    {
      title: "Test Title 1",
      artist: "Test Artist 1",
      url: "test_url_1",
    },
    {
      title: "Test Title 2",
      artist: "Test Artist 2",
      url: "test_url_2",
    },
  ]);

  return (
    <section className=" bg-gradient-to-br from-gray-700 via-gray-100 to-gray-300 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg">
      <h2 className="text-xl font-medium mb-6">
        Recommended Songs
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-slate-900/60 rounded-xl p-4 flex flex-col justify-between hover:bg-slate-900 transition"
          >
            <div className="space-y-1">
              <p className="font-medium">{song.title}</p>
              <p className="text-slate-400 text-sm">{song.artist}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="px-4 py-1 text-xs rounded-full border border-slate-600 hover:border-slate-400 transition">
                Play
              </button>
              <button className="px-4 py-1 text-xs rounded-full border border-slate-600 hover:border-slate-400 transition">
                Pause
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoodSongs;
