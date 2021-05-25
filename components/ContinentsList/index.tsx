interface CotinentsArrayProps {
  continents: {
    country: string;
    iso_code: string;
    data: {
      date: string;
      daily_vaccinations: number;
      total_vaccinations: number;
      people_fully_vaccinated: number;
      people_vaccinated_per_hundred: number;
      total_vaccinations_per_hundred: number;
    }[];
  }[];
}

const ContinentsList = ({ continents }: CotinentsArrayProps) => {
  console.log(continents);

  return (
    <div>
      {" "}
      <h1>Hello John Doe</h1>{" "}
    </div>
  );
};

export default ContinentsList;
