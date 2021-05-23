export type CountriesListArrayProps = {
  countries: {
    country: string;
    total_vaccinations: number;
    daily_vaccinations: number;
    daily_vaccinations_per_million: number;
    people_fully_vaccinated: number;
    people_vaccinated: number;
    people_fully_vaccinated_per_hundred: number;
    data: object[];
  }[];
};
