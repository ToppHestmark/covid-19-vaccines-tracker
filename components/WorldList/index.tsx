import { WorldDataProps } from "./WorldList.models";
import { Container } from "./WorldList.styles";

const WorldList = ({ worldData }: WorldDataProps) => {
  const lastUpdate = worldData.map((obj) => obj.data[obj.data.length - 1]);

  // Total Vaccinations
  const totalVaccinations = lastUpdate.map((obj) => obj.total_vaccinations)[0];
  const totalInPercent = lastUpdate.map(
    (obj) => obj.total_vaccinations_per_hundred
  )[0];

  // Fully Vaccinations
  const peopleFullyVaccinated = lastUpdate.map(
    (obj) => obj.people_fully_vaccinated
  )[0];
  const fullyVaccinatedPerHundred = lastUpdate.map(
    (obj) => obj.people_fully_vaccinated_per_hundred
  )[0];

  return (
    <Container>
      {" "}
      <h1>Hello World</h1>
    </Container>
  );
};

export default WorldList;
