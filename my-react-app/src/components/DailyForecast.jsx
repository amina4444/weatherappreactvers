import { getIcon, getDescription } from "../utils/weatherUtils"

function DailyForecast({ data }) {
  return (
    <div className="forecast-section">
      <h2>7-Day Forecast</h2>

      <div className="forecast-grid">
        {data.time.slice(0, 7).map((t, i) => (
          <div key={t} className="forecast-card">

            <p className="forecast-day">
              {new Date(t).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>

            <div className="forecast-icon">
              <span className="weather-emoji">
                {getIcon(data.weathercode[i])}
              </span>
            </div>

            <div className="forecast-temps">
              <span className="temp-high">
                {Math.round(data.temperature_2m_max[i])}°
              </span>
              <span className="temp-low">
                {Math.round(data.temperature_2m_min[i])}°
              </span>
            </div>

            <p className="forecast-condition">
              {getDescription(data.weathercode[i])}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyForecast
