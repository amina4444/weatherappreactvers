import { useEffect, useState } from "react"
import { getCityCoords, getWeather } from "./api/weatherApi"

import SearchBar from "./components/SearchBar"
import CurrentWeather from "./components/CurrentWeather"
import HourlyForecast from "./components/HourlyForecast"
import DailyForecast from "./components/DailyForecast.jsx"

function App() {
  const [city, setCity] = useState("Bishkek")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function loadWeather(cityName) {
    try {
      setLoading(true)
      setError("")

      const coords = await getCityCoords(cityName)
      if (!coords) {
        setError("City not found")
        return
      }

      const data = await getWeather(coords.lat, coords.lon)
      setCity(coords.name)
      setWeather(data)

    } catch {
      setError("Error loading weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWeather("Bishkek")
  }, [])

  return (
  <div className="container">
      <div className="header">
      <h1>Weather App</h1>
      <SearchBar onSearch={loadWeather} />
    </div>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    {weather && (
      <>
        <CurrentWeather city={city} data={weather} />
        <HourlyForecast data={weather.hourly} />
        <DailyForecast data={weather.daily} />
      </>
    )}

  </div>
)

}

export default App




