import './weatherInformations5Days.css'

const WeatherInformations5Days = ({ weather5days }) => {

    let dailyForeCast = {}

    for (let foreCast of weather5days.list) {
        const date = new Date(foreCast.dt * 1000).toLocaleDateString()

        if (!dailyForeCast[date]) {
            dailyForeCast[date] = foreCast
        }
    }

    const Next5Days = Object.values(dailyForeCast).slice(1, 6)


    function converteDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', { weekday: 'long' })
        return newDate
    }

    return (

        <div className='weather_container'>
            <h3>Previsão proximos 5 dias</h3>
            <div className='weather_list'>
                {Next5Days.map((forecast) => (
                    <div key={forecast.dt} className='weather-item'>
                        <p>{converteDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)} ºCmin / {Math.round(forecast.main.temp_max)} ºCmax</p>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default WeatherInformations5Days