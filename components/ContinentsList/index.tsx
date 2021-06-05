import { formatLargeNum } from "../../utils/formatting";

import {
  Container,
  Wrapper,
  Card,
  Title,
  Total,
  Fully,
  Daily,
} from "./ContinentsList.styles";

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
  return (
    <Container>
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
