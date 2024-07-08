import DashboardContainer from "./components/dashboardContainer";
import { getCountries, getWeatherData } from "./actions";

export default async function Home() {
  const countries = await getCountries();
  const weatherData = await getWeatherData("Malta", "all");

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <h1 className="text-2xl">Weather Dashboard</h1>
      <DashboardContainer
        countries={countries}
        weatherData={weatherData}
        getAllWidgetData={getWeatherData}
      />
    </main>
  );
}
