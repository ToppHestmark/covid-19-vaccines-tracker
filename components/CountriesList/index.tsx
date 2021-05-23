import React from "react";
import { TableContainer } from "./CountriesList.styles";
import { CountriesListArrayProps } from "./countriesList.models";

const nonCountryArray: string[] = [
  "Africa",
  "Asia",
  "Europe",
  "European Union",
  "High income",
  "Low income",
  "Lower middle income",
  "North America",
  "Oceania",
  "South America",
  "Upper middle income",
  "World",
];

const CountriesList = ({ countries }: CountriesListArrayProps) => {
  const filteredData = countries.filter(
    (obj) => !nonCountryArray.includes(obj.country)
  );

  // const data = obj.data;
  //   const lastUpdate = data[data.length - 1];

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Country/Territory</th>
          <th>Daily</th>
          <th>Total</th>
        </tr>
      </thead>
    </TableContainer>
  );
};

export default CountriesList;
