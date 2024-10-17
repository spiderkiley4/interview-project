import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const lightP = ""

  return (
    <div className={'h-screen transition-colors duration-1000' + (darkMode ? " bg-[#242424]" : "")}>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setDarkMode((mode) => !mode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
