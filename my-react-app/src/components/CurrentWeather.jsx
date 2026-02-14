import { getIcon, getDescription } from "../utils/weatherUtils"

function CurrentWeather({ city, data }) {
  const current = data.current_weather

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}</h2>
      </div>
      <div className="weather-main">

       
        <div className="weather-icon">
          <span className="weather-emoji">
            {getIcon(current.weathercode)}
          </span>
        </div>

        
        <div className="weather-temp">
          <div className="temp-value">
            {Math.round(current.temperature)}°C
          </div>

          <p className="condition">
            {getDescription(current.weathercode)}
          </p>
          </div>
          </div>

            <div className="weather-details">
  <div className="detail-item">
    <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
    </svg>
    <p className="detail-label">Wind</p>
    <p className="detail-value" id="windSpeed">12 mph</p>
  </div>
  <div className="detail-item">
    <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
    <p className="detail-label">Humidity</p>
    <p className="detail-value" id="humidity">65%</p>
  </div>
  <div className="detail-item">
    <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 14 4-4"></path>
      <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
    </svg>
    <p className="detail-label">Pressure</p>
    <p className="detail-value" id="pressure">1013 mb</p>
  </div>
</div>
</div>
  )
}

export default CurrentWeather
