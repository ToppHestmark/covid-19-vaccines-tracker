import { formatLargeNum } from "../../utils/formatting";
import { CotinentsArrayProps } from "./ContinentsList.models";

import {
  Container,
  Wrapper,
  Card,
  Title,
  Total,
  Fully,
  Daily,
  Header,
} from "./ContinentsList.styles";

const ContinentsList = ({ continents }: CotinentsArrayProps) => {
  return (
    <Container>
      <Header>Continents</Header>{" "}
      <Wrapper>
        {" "}
        {continents.map((obj) => {
          const last = obj.data[obj.data.length - 1];

          return (
            <Card key={obj.iso_code}>
              <span>
                <Title> {obj.country} </Title>
              </span>
              <span>
                <Total> {formatLargeNum(last.total_vaccinations)} </Total>
              </span>

              <span>
                <Fully>
                  {" "}
                  {last.total_vaccinations_per_hundred}% fully vaccinated{" "}
                </Fully>
              </span>
              <span>
                <Daily> +{formatLargeNum(last.daily_vaccinations)} </Daily>
              </span>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ContinentsList;
