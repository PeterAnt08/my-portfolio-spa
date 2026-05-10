export async function getWeather() {
  const latitude = 50.95;
  const longitude = 28.64;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Помилка завантаження погоди");
  }

  const data = await response.json();

  return {
    city: "Коростень",
    country: "Україна",
    latitude: data.latitude,
    longitude: data.longitude,
    temperature: data.current.temperature_2m,
    weatherCode: data.current.weather_code,
  };
}

export function getWeatherDescription(code) {
  const descriptions = {
    0: "Ясно",
    1: "Переважно ясно",
    2: "Мінлива хмарність",
    3: "Хмарно",
    45: "Туман",
    48: "Паморозь",
    51: "Легка мряка",
    53: "Мряка",
    55: "Сильна мряка",
    61: "Невеликий дощ",
    63: "Дощ",
    65: "Сильний дощ",
    71: "Невеликий сніг",
    73: "Сніг",
    75: "Сильний сніг",
    80: "Короткочасний дощ",
    95: "Гроза",
  };

  return descriptions[code] || "Невідомі погодні умови";
}