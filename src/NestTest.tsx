import {useState} from 'react';

function NestTest() {
  const [everythingYellow, setEverythingYellow] = useState(false);

  return (
    <>
      <button onClick={() => setEverythingYellow(!everythingYellow)}
              className={`hover:bg-yellow-400
                         ${everythingYellow ? 'bg-yellow-500 text-white' : ''}
                         active:bg-yellow-300
                         transition-colors
                         inset-shadow-sm
                         inset-shadow-black/50
                         font-mono p-3 m-3
                         rounded-lg
                         ring-4
                         ring-black-500`}>Make Everything Yellow</button>
      <p className="text-white">everything is yellow: {everythingYellow.toString()}</p>
      <div className={`${everythingYellow ? '**:bg-yellow-500' : ''}
                       flex
                       h-100
                       items-center
                       justify-center
                       w-auto
                       outline-3
                       outline-black
                       relative`}>
        <div className="flex items-center justify-center z-3 h-3/6 w-sm bg-red-500 absolute">
          <p>It's a nest test :O</p>
        </div>
        <div className="z-2 h-4/6 w-md bg-purple-500 absolute"></div>
        <div className="z-1 h-5/6 w-lg bg-green-500 absolute">
        </div>
      </div>
    </>
  )
}

export default NestTest;