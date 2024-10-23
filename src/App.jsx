import { useEffect, useState } from 'react'
import VideoPlayer from './components/VideoPlayer';
import video from "./assets/test.webm";
import eldenRingIcon from "./assets/eldenring.png"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark");
    return dark ? JSON.parse(dark) : false;
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={'h-screen v-screen transition-colors duration-1000' + (darkMode ? " bg-[#242424]" : "")}>
      <div></div>
      <div className='flex justify-center mb-2'>
        <img src={eldenRingIcon} className='w-24 h-auto'/>
      </div>
      <h1 className={'mb-6 font-bold text-2xl text-center transition-colors duration-1000' + (darkMode ? " text-white" : "")}>Thomas Elden Ring Interview</h1>
      <button onClick={() => setDarkMode((mode) => !mode)} className='absolute top-5 right-5 bg-blue-500 text-white text-xl py-2 px-4 rounded transition-all duration-300 transform hover:scale-110'>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className="flex-1">
        <VideoPlayer src={video} type="webm" />
      </div>
    </div>
  )
}

export default App
