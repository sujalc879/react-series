import { useState } from 'react'
import './App.css'

function App() {
const[color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-300'
         style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center rounded-3xl px-3 py-2 bg-white shadow-2xl gap-3'>

          <button className='text-white px-2 py-1 rounded-full cursor-pointer'
                  style={{backgroundColor:"red"}}
                  onClick={() => { setColor("red")}}
          >Red</button>
          <button className='text-white px-2 py-1 rounded-full cursor-pointer'
                  style={{backgroundColor:"green"}}
                  onClick={() => { setColor("green")}}
          >Green</button>
          <button className='text-white px-2 py-1 rounded-full cursor-pointer'
                  style={{backgroundColor:"blue"}}
                  onClick={() => { setColor("blue")}}
          >Blue</button>
          <button className='text-white px-2 py-1 rounded-full cursor-pointer'
                  style={{backgroundColor:"black"}}
                  onClick={() => { setColor("black")}}
          >Black</button>
          <button className='text-white px-2 py-1 rounded-full cursor-pointer'
                  style={{backgroundColor:"pink"}}
                  onClick={() => { setColor("pink")}}
          >Pink</button>

        </div>
      </div>

    </div>
  )
}

export default App
