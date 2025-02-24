function NestTest() {
  return (
    <div className="flex h-100 items-center justify-center w-auto outline-3 outline-black relative">
      <div className="flex items-center justify-center z-3 h-3/6 w-sm bg-red-500 absolute">
        <p className>It's a nest test :O</p>
      </div>
      <div className="z-2 h-4/6 w-md bg-purple-500 absolute"></div>
      <div className="z-1 h-5/6 w-lg bg-green-500 absolute">
      </div>
    </div>
  )
}

export default NestTest;