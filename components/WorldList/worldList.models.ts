export interface WorldDataProps {
  worldData: {
    country: string;
    iso_code: string;
    data: {
      date: string;
      daily_vaccinations: number;
      total_vaccinations: number;
      people_fully_vaccinated: number;
      people_fully_vaccinated_per_hundred: number;
      people_vaccinated_per_hundred: number;
      total_vaccinations_per_hundred: number;
    }[];
  }[];
}
