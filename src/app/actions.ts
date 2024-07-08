"use server";

import axios from "axios";
import {
  Country,
  CountryResponse,
  WeatherData,
  WeatherDataResponse,
} from "./types/response-types";

export async function getCountries(): Promise<Country[]> {
  "use server";
  try {
    const { data } = await axios.get<CountryResponse[]>(
      "https://restcountries.com/v3.1/all"
    );

    return data.map((country) => ({ name: country.name.common }));
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
}

export async function getWeatherData(
  country: string,
  widgetName: "temperature" | "windSpeed" | "humidity" | "pressure" | "all",
  prevWeatherData?: WeatherData
): Promise<WeatherData> {
  "use server";
  try {
    const previousData = prevWeatherData!;
    const apiKey = "3d5f8e281e12ad8e7ed5921939bc57fa"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;
    const { data } = await axios.get<WeatherDataResponse>(url);

    switch (widgetName) {
      case "temperature":
        return {
          ...previousData,
          temperature: data.main.temp,
        };
      case "windSpeed":
        return {
          ...previousData,
          windSpeed: data.wind.speed,
        };
      case "humidity":
        return {
          ...previousData,
          humidity: data.main.humidity,
        };
      case "pressure":
        return {
          ...previousData,
          pressure: data.main.pressure,
        };
      case "all":
        return {
          temperature: data.main.temp,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        };
    }
  } catch (error) {
    throw new Error(
      `Failed to refresh ${widgetName === "all" ? "weather" : widgetName} data`
    );
  }
}
