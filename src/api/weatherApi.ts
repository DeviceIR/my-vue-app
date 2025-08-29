// src/api/weatherApi.ts
import { fetchWeatherApi } from "openmeteo";

export interface WeatherData {
  hourly: {
    time: Date[];
    temperature_2m: number[];
  };
}

export async function getLatLong(
  city: string
): Promise<{ lat: number; lon: number } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        city
      )}`
    );
    const data = await res.json();
    if (data.length === 0) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } catch (err) {
    console.error("Failed to get coordinates", err);
    return null;
  }
}

/**
 * Fetch today's weather by city
 */
export async function getTodayWeatherByCity(
  city: string
): Promise<WeatherData | null> {
  const coords = await getLatLong(city);
  if (!coords) return null;

  const params = {
    latitude: coords.lat,
    longitude: coords.lon,
    hourly: "temperature_2m",
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const hourly = response.hourly()!;
  const utcOffsetSeconds = response.utcOffsetSeconds();

  // Create arrays of Date and temperature
  const times = [
    ...Array(
      (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
    ),
  ].map(
    (_, i) =>
      new Date(
        (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
          1000
      )
  );
  const temperatures = Array.from(hourly.variables(0)?.valuesArray() ?? []);

  // Filter only today
  const today = new Date();
  const todayTimes: Date[] = [];
  const todayTemps: number[] = [];

  times.forEach((time, i) => {
    if (
      time.getFullYear() === today.getFullYear() &&
      time.getMonth() === today.getMonth() &&
      time.getDate() === today.getDate()
    ) {
      todayTimes.push(time);
      todayTemps.push(temperatures[i]);
    }
  });

  return {
    hourly: {
      time: todayTimes,
      temperature_2m: todayTemps,
    },
  };
}
