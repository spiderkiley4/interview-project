import { useEffect, useState } from 'react';
import eldenRingIcon from "/eldenring.png";
import Question from './components/Question';

import Q1 from "./assets/Q1.mp4";
import Q2 from "./assets/Q2.mp4";
import Q3 from "./assets/Q3.mp4";
import Q4 from "./assets/Q4.mp4";
import Q5 from "./assets/Q5.mp4";
import Q6 from "./assets/Q6.mp4";
import Q7 from "./assets/Q7.mp4";
import Q8 from "./assets/Q8.mp4";
import Q9 from "./assets/Q9.mp4";
import Q10 from "./assets/Q10.mp4";
import Q11 from "./assets/Q11.mp4";
import bloopers from "./assets/caleb bloopers.mp4";
import conclusion from "./assets/conclusion.mp4";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark");
    return dark ? JSON.parse(dark) : false;
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={'min-h-screen w-screen overflow-auto flex-col transition-colors duration-1000' + (darkMode ? " bg-[#242424]" : "")}>
      <div className='flex justify-center mb-2'>
        <img src={eldenRingIcon} className='w-24 h-auto'/>
      </div>
      <h1 className={'mb-6 font-bold text-2xl text-center transition-colors duration-1000' + (darkMode ? " text-white" : "")}>Thomas Elden Ring Interview</h1>
      <button onClick={() => setDarkMode((mode) => !mode)} className='absolute top-5 right-5 bg-blue-500 text-white text-xl py-2 px-4 rounded transition-all duration-300 transform hover:scale-110'>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Question src={Q1} num="Q1" darkMode={darkMode}>Explain Yourself</Question>
      <Question src={Q2} num="Q2" darkMode={darkMode}>Explain Elden Ring</Question>
      <Question src={Q3} num="Q3" darkMode={darkMode}>What kind of goals did you have?</Question>
      <Question src={Q4} num="Q4" darkMode={darkMode}>What drives you?</Question>
      <Question src={Q5} num="Q5" darkMode={darkMode}>What was the hardest part for you?</Question>
      <Question src={Q6} num="Q6" darkMode={darkMode}>What was your favorite experience during the game?</Question>
      <Question src={Q7} num="Q7" darkMode={darkMode}>Did you find any part of the game easier or harder than what you expected?</Question>
      <Question src={Q8} num="Q8" darkMode={darkMode}>Was there ever a time when you considered giving up on your goal?</Question>
      <Question src={Q9} num="Q9" darkMode={darkMode}>If you did it all over again would you have done anything differently?</Question>
      <Question src={Q10} num="Q10" darkMode={darkMode}>How did this experience change you?</Question>
      <Question src={Q11} num="Q11" darkMode={darkMode}>Would you recommend other people take on a similar experience as you have?</Question>
      <Question src={conclusion} num="Conclusion" darkMode={darkMode}></Question>
      <Question src={bloopers} num="Bloopers" darkMode={darkMode}>Caleb interupts interview 3 times</Question>
    </div>
  )
};

export default App