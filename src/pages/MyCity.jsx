import { useEffect, useState } from "react";
import { getWeather, getWeatherDescription } from "../api/weatherApi";

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Не вдалося завантажити дані про погоду");
        setLoading(false);
      });
  }, []);

  return (
    <section className="page">
      <h1>Моє місто</h1>

      <div className="card">
        <h2>Коростень</h2>
        <p>
          Коростень — місто в Житомирській області України. Воно має давню
          історію, спокійну атмосферу та є важливим містом для свого регіону.
        </p>
        <p>
          Для мене це місто є місцем, з яким пов’язані особисті спогади,
          навчання, розвиток і щоденне життя.
        </p>
      </div>

      <div className="card weather-card">
        <h2>Поточна погода через API</h2>

        {loading && <p>Завантаження погоди...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <p>
              <strong>Місто:</strong> {weather.city}
            </p>
            <p>
              <strong>Країна:</strong> {weather.country}
            </p>
            <p>
              <strong>Температура:</strong> {weather.temperature}°C
            </p>
            <p>
              <strong>Опис:</strong>{" "}
              {getWeatherDescription(weather.weatherCode)}
            </p>
            <p>
              <strong>Координати:</strong> {weather.latitude}, {weather.longitude}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyCity;