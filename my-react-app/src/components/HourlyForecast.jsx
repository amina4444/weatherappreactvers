import { getIcon } from "../utils/weatherUtils"

function HourlyForecast({ data }) {
  return (
    <div className="hourly-section">
      <h2>Hourly Forecast</h2>

      <div className="hourly-container">
        {data.time.slice(0, 12).map((t, i) => (
          <div key={t} className="hourly-card">
            <p className="hourly-time">
              {new Date(t).getHours()}:00
            </p>

            <div className="hourly-icon">
              <span className="weather-emoji">
                {getIcon(data.weathercode[i])}
              </span>
            </div>

            <p className="hourly-temp">
              {Math.round(data.temperature_2m[i])}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
