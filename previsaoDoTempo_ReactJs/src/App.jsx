import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

  const inputRef = useRef()
  const [weather, setWeather] = useState({})


  async function searchCity() {
    const city = inputRef.current.value
    const key = '91f3807187ae857a89bc52667e1afd9a'
    const idioma = 'pt_br'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${idioma}&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }


  return (

    <div>
      <h1>Previsão do tempo</h1>
      <input type="text" ref={inputRef} />
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
