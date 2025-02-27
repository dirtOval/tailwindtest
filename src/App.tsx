import { useState } from 'react'
import boschHell from './assets/boschhell.jpg';
import './App.css'
import ListItem from './ListItem.tsx';
import FormTest from './FormTest.tsx';
import NestTest from './NestTest.tsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto max-w-xl items-center bg-blue-500">
      <div>
          <img src={boschHell} className="logo" alt="Vite logo" />
      </div>
      <h1>Tailwind Test</h1>
      <div className="card outline-2 outline-red-500 group">
        <button onClick={() => setCount((count) => count + 1)}
                className="bg-gray-500 outline-2 outline-green-500 hover:bg-purple-500">
          count is {count}
        </button>
        <p className="text-purple-300 hover:text-green-500 group-has-focus:text-xl">
          WOW ITS TAILWIND
        </p>
      </div>
      <p className="first-letter:text-7xl text-3xl text-green-300">
        We're going to test tailwind.css
      </p>
      <h3 className="text-xl">Some Forms:</h3>
      <div>
        <FormTest />
      </div>
      <h3 className="text-2xl">A list of items!</h3>
      <div>
        {Array(5).keys().map(x => <ListItem itemNum={x + 1} />)}
      </div>

      <h1 className="text-2xl first-letter:text-6xl hidden print:block">This message will only show up when printed.</h1>
      <NestTest />
    </div>
  )
}

export default App
