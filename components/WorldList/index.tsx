import { formatLargeNum } from "../../utils/formatting";
import { WorldDataProps } from "./worldList.models";
import {
  Container,
  Header,
  Wrapper,
  Card,
  Quantity,
  Description,
} from "./WorldList.styles";

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
      <Header>Worldwide Data</Header>
      <Wrapper>
        <Card>
          <Quantity> {formatLargeNum(totalVaccinations)} </Quantity>
          <Description> Vaccines administered around the world. </Description>
        </Card>
        <Card>
          <Quantity> {formatLargeNum(peopleFullyVaccinated)} </Quantity>
          <Description> People received at least one dose. </Description>
        </Card>
        <Card>
          <Quantity className="percent"> {totalInPercent} % </Quantity>
          <Description>
            {" "}
            Of the population received at least first dose of vaccice.{" "}
          </Description>
        </Card>
        <Card>
          <Quantity className="percent">
            {" "}
            {fullyVaccinatedPerHundred} %{" "}
          </Quantity>
          <Description> Of the population is fully vaccinated. </Description>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default WorldList;
