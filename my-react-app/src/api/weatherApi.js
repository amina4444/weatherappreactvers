export async function getCityCoords(city) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
  const res = await fetch(url)
  const data = await res.json()

  if (!data.length) return null

  return {
    name: data[0].display_name.split(',')[0],
    lat: +data[0].lat,
    lon: +data[0].lon
  }
}

export async function getWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current_weather=true` +
    `&hourly=temperature_2m,weathercode,relativehumidity_2m,surface_pressure` +
    `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
    `&timezone=auto`

  const res = await fetch(url)
  return await res.json()
}
