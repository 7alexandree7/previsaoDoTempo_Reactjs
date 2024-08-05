import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const inputRef = useRef()


  function searchCity() {
    console.log(inputRef.current.value)
  }


  return (

    <div>
      <h1>Previsão do tempo 91f3807187ae857a89bc52667e1afd9a</h1>
      <input type="text" ref={inputRef} />
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
