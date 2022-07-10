import { Countries } from "../../globaltypes";
import { formatLargeNum } from "../../utils/formatting";
import {
  Container,
  Header,
  Wrapper,
  Card,
  Quantity,
  Description,
} from "./WorldList.styles";

interface WorldDataProps {
  worldData: Countries[];
}

const WorldList = ({ worldData }: WorldDataProps) => {
  const lastUpdate = worldData.map((obj) => obj.data[obj.data.length - 1]);

  // Total Vaccinations administered
  const totalVaccinations = lastUpdate.map((obj) => obj.people_vaccinated)[0];
  const totalInPercent = lastUpdate.map(
    (obj) => obj.people_vaccinated_per_hundred
  )[0];

  // Fully Vaccinations
  const peopleFullyVaccinated = lastUpdate.map(
    (obj) => obj.people_fully_vaccinated
  )[0];
  const fullyVaccinatedPerHundred = lastUpdate.map(
    (obj) => obj.people_vaccinated_per_hundred
  )[0];

  return (
    <Container>
      {" "}
      <Header>Worldwide Data</Header>
      <Wrapper>
        <Card>
          <Quantity> {formatLargeNum(totalVaccinations)} </Quantity>
          <Description> People received first dose. </Description>
        </Card>
        <Card>
          <Quantity> {formatLargeNum(peopleFullyVaccinated)} </Quantity>
          <Description> People received second dose. </Description>
        </Card>
        <Card>
          <Quantity className="percent"> {totalInPercent} % </Quantity>
          <Description>
            {" "}
            Of the population received at least first dose of vaccine.{" "}
          </Description>
        </Card>
        <Card>
          <Quantity className="percent">
            {" "}
            {fullyVaccinatedPerHundred} %{" "}
          </Quantity>
          <Description> Of the population are fully vaccinated. </Description>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default WorldList;
