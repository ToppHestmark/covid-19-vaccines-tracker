export interface Countries {
  country: string;
  iso_code: string;
  data: CountriesData[];
}

export interface CountriesData {
  date: string;
  daily_vaccinations: number;
  total_vaccinations: number;
  people_vaccinated: number;
  people_fully_vaccinated: number;
  people_vaccinated_per_hundred: number;
  total_vaccinations_per_hundred: number;
}

export interface ICountriesList {
  countries: {
    country: string;
    iso_code: string;
    data: {
      date: string;
      daily_vaccinations: number;
      total_vaccinations: number;
      people_vaccinated: number;
      people_fully_vaccinated: number;
      people_vaccinated_per_hundred: number;
      total_vaccinations_per_hundred: number;
    }[];
  }[];
}
