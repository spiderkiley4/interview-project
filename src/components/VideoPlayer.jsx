function VideoPlayer({ src, type }) {
  return (
    <div className="flex justify-center items-center">
      <video
        className="w-full max-w-3xl"
        controls
        src={src}
        type={"video/" + type}
        // Add additional attributes as needed
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;