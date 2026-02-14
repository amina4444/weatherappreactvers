// export function getDescription(code) {
//   const map = {
//     0: "Clear sky",
//     1: "Mainly clear",
//     2: "Partly cloudy",
//     3: "Cloudy",
//     45: "Fog",
//     48: "Freezing fog",
//     61: "Rain",
//     71: "Snow",
//     95: "Thunderstorm"
//   }
//   return map[code] || "Unknown"
// }

// export function getIcon(code) {
//   if (code === 0) return "☀️"
//   if ([1,2].includes(code)) return "🌤"
//   if ([45,48].includes(code)) return "🌫"
//   if ([61,63,65].includes(code)) return "🌧"
//   if ([71,73,75].includes(code)) return "❄️"
//   if ([95,96,99].includes(code)) return "⛈"
//   return "☁️"
// }



export function getDescription(code) {
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Freezing fog",
    51: "Drizzle light",
    53: "Drizzle moderate",
    55: "Drizzle heavy",
    56: "Freezing drizzle light",
    57: "Freezing drizzle heavy",
    61: "Rain light",
    63: "Rain moderate",
    65: "Rain heavy",
    66: "Freezing rain light",
    67: "Freezing rain heavy",
    71: "Snow light",
    73: "Snow moderate",
    75: "Snow heavy",
    77: "Snow grains",
    80: "Rain showers light",
    81: "Rain showers moderate",
    82: "Rain showers violent",
    85: "Snow showers light",
    86: "Snow showers heavy",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Severe thunderstorm with hail"
  };
  return map[code] || "Unknown";
}

export function getIcon(code) {
  if (code === 0) return "☀️";
  if ([1,2].includes(code)) return "🌤";
  if ([3].includes(code)) return "☁️";
  if ([45,48].includes(code)) return "🌫";
  if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code)) return "🌧";
  if ([71,73,75,77,85,86].includes(code)) return "❄️";
  if ([95,96,99].includes(code)) return "⛈";
  return "☁️";
}

