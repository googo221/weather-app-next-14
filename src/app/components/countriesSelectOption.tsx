"use client";
import React from "react";
import { Country } from "../types/response-types";

interface CountriesSelectOptionProps {
  countries: Country[];
  country: string;
  handleCountryChange: (country: string) => void;
}

const CountriesSelectOption = ({
  countries,
  country,
  handleCountryChange,
}: CountriesSelectOptionProps) => {
  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-white mb-1">
        Country
      </label>
      <div>
        <select
          value={country}
          className="block text-black w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(event) => handleCountryChange(event.target.value)}
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountriesSelectOption;
