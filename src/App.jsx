import { useState } from 'react'
import VideoPlayer from './components/VideoPlayer';
import video from "./assets/test.webm";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={'h-screen transition-colors duration-1000' + (darkMode ? " bg-[#242424]" : "")}>
      <h1 className={'font-bold text-2xl text-center transition-colors duration-1000' + (darkMode ? " text-white" : "")}>Thomas Elden Ring Interview</h1>
      <div className="">
        <button onClick={() => setDarkMode((mode) => !mode)} className='absolute top-5 right-5 bg-blue-500 text-white text-xl py-2 px-4 rounded transition-all duration-300 transform hover:scale-110'>
          {darkMode ? "☀️" : "🌙"}
        </button>
        </div>
        <VideoPlayer src={video} />
    </div>
  )
}

export default App
