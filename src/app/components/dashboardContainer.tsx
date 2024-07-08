"use client";
import React, { useEffect, useState } from "react";
import CountriesSelectOption from "./countriesSelectOption";
import { Country, WeatherData } from "../types/response-types";
import CardWidget from "./cardWidget";

interface DashboardContainerProps {
  countries: Country[];
  weatherData: WeatherData;
  getAllWidgetData: (
    country: string,
    widgetName: "temperature" | "windSpeed" | "humidity" | "pressure" | "all",
    prevWeatherData?: WeatherData
  ) => Promise<WeatherData>;
}

const DashboardContainer = ({
  countries,
  weatherData,
  getAllWidgetData,
}: DashboardContainerProps) => {
  const [country, setCountry] = useState<string>("Malta");
  const [isRefreshingData, setIsRefreshingData] = useState<
    "temperature" | "windSpeed" | "humidity" | "pressure" | "all" | undefined
  >("all");
  const [weatherDataState, setWeatherDataState] = useState<
    WeatherData | undefined
  >(undefined);

  useEffect(() => {
    setWeatherDataState(weatherData);
    setIsRefreshingData(undefined);
  }, [country]);

  const handleCountryChange = async (newCountry: string) => {
    setWeatherDataState(undefined);
    setCountry(newCountry);
    setIsRefreshingData("all");
    const data = await getAllWidgetData(newCountry, "all");
    setWeatherDataState(data);
    setIsRefreshingData(undefined);
  };

  return (
    <div className="mt-4">
      <CountriesSelectOption
        countries={countries}
        country={country}
        handleCountryChange={(country) => handleCountryChange(country)}
      />
      <div className="mt-4 flex flex-wrap gap-4">
        <CardWidget
          title="Temperature"
          data={
            isRefreshingData === "temperature" ||
            isRefreshingData === "all" ||
            !weatherDataState
              ? "Loading..."
              : `${weatherDataState?.temperature} °C`
          }
          handleOnClick={async () => {
            setIsRefreshingData("temperature");
            const data = await getAllWidgetData(
              country,
              "temperature",
              weatherDataState!
            );
            setWeatherDataState(data);
            setIsRefreshingData(undefined);
          }}
        />
        <CardWidget
          title="Wind"
          data={
            isRefreshingData === "windSpeed" ||
            isRefreshingData === "all" ||
            !weatherDataState
              ? "Loading..."
              : `Speed: ${weatherDataState?.windSpeed} m/s`
          }
          handleOnClick={async () => {
            setIsRefreshingData("windSpeed");
            const data = await getAllWidgetData(
              country,
              "windSpeed",
              weatherDataState!
            );
            setWeatherDataState(data);
            setIsRefreshingData(undefined);
          }}
        />
        <CardWidget
          title="Humidity"
          data={
            isRefreshingData === "humidity" ||
            isRefreshingData === "all" ||
            !weatherDataState
              ? "Loading..."
              : `${weatherDataState?.humidity} %`
          }
          handleOnClick={async () => {
            setIsRefreshingData("humidity");
            const data = await getAllWidgetData(
              country,
              "humidity",
              weatherDataState!
            );
            setWeatherDataState(data);
            setIsRefreshingData(undefined);
          }}
        />
        <CardWidget
          title="Pressure"
          data={
            isRefreshingData === "pressure" ||
            isRefreshingData === "all" ||
            !weatherDataState
              ? "Loading..."
              : `${weatherDataState?.pressure} hPa`
          }
          handleOnClick={async () => {
            setIsRefreshingData("pressure");
            const data = await getAllWidgetData(
              country,
              "pressure",
              weatherDataState!
            );
            setWeatherDataState(data);
            setIsRefreshingData(undefined);
          }}
        />
      </div>
    </div>
  );
};

export default DashboardContainer;
