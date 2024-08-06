import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

import WeatherInformations from './components/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days'


function App() {

  const inputRef = useRef()
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()

  useEffect(() => {
    inputRef.current.focus()
  },[])


  async function searchCity() {
    const city = inputRef.current.value
    const key = '91f3807187ae857a89bc52667e1afd9a'
    const idioma = 'pt_br'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${idioma}&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${idioma}&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

    const apiInfo5Days = await axios.get(url5days)
     setWeather5days(apiInfo5Days.data)
  }


  return (

    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input className='int' type="text" ref={inputRef} />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
      {weather5days && <WeatherInformations5Days weather5days={weather5days}/> }
      
    </div>
  )
}

export default App
