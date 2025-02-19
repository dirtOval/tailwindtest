import { useState } from 'react'
import boschHell from './assets/boschhell.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto max-w-xl items-center bg-blue-500">
      <div>
          <img src={boschHell} className="logo" alt="Vite logo" />
      </div>
      <h1>Tailwind Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-purple-300 hover:text-green-500 hover:text-xl">
          WOW ITS TAILWIND
        </p>
      </div>
      <p className="text-3xl text-green-300">
        We're going to test tailwind.css
      </p>
    </div>
  )
}

export default App
