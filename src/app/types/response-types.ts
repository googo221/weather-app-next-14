interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Translations {
  official: string;
  common: string;
}

interface Demonyms {
  f: string;
  m: string;
}

interface CapitalInfo {
  latlng: [number, number];
}

interface Name {
  common: string;
  official: string;
  nativeName: {
    fra: NativeName;
  };
}

interface Flags {
  png: string;
  svg: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface CountryResponse {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    XPF: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    fra: string;
  };
  translations: {
    [key: string]: Translations;
  };
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: Demonyms;
  };
  flag: string;
  maps: Maps;
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Rain {
  "1h": number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDataResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Country {
  name: string;
}

export interface WeatherData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
}
