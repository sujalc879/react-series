import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

const copyPassword =  useCallback(() => {
  passwordRef.current?.select()
  
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*()_+-?><";

    for (let i = 1; i <= length; i++) {
      const char = str.charAt(Math.floor(Math.random() * str.length) + 1);
      pass+=char
    }

    setPassword(pass);


  }, [length, numAllow, charAllow, setPassword])

useEffect(() => {
  passwordGenerator();
}, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
     <div className='w-full bg-gray-800 max-w-md shadow-md rounded-lg mx-auto my-8 px-4 py3 pb-4 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        id='pass'
        type="text" 
        className='bg-white w-full outline-none py-1 px-3'
        value={password}
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:scale-125 hover:transition-all
        '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(Number(e.target.value))}}
            />
            <label> Length : {length} </label>
          </div>
          <input 
          type="checkbox" 
          defaultChecked={numAllow}
          id='numberInput'
          onChange={() => {
            setNumAllow((prev) =>
            !prev);
          }}
          />
          <label htmlFor="numberInput"> Numbers </label>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllow}
            id='characterInput'
            onChange={() => {
              setCharAllow((prev) =>
              !prev);
            }}
            />
            <label htmlFor="characterInput"> Characters </label>
          </div>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
