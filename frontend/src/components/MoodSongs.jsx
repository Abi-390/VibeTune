const MoodSongs = ({ songs }) => {
  return (
    <section className="bg-gradient-to-br from-blue-300 via-blue-50 to-blue-50 backdrop-blur rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      {" "}
      <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-blue-900">
        {" "}
        Recommended Songs{" "}
      </h2>{" "}
      <div className="grid gap-4 sm:grid-cols-2">
        {" "}
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-300 rounded-xl p-4 flex flex-col justify-between"
          >
            {" "}
            <div className="space-y-1">
              {" "}
              <p className="font-medium text-blue-700 break-words">
                {" "}
                {song.title}{" "}
              </p>{" "}
              <p className="text-blue-400 text-sm break-words">
                {" "}
                {song.artist}{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
              {" "}
              <audio
                src={song.audio}
                controls
                className="w-full sm:max-w-full"
              />{" "}
              
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default MoodSongs;
