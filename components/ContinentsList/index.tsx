import Link from "next/link";
import { formatLargeNum } from "../../utils/formatting";
import { CotinentsArrayProps } from "./continentslist.models";

import {
  Container,
  Wrapper,
  Card,
  Title,
  Total,
  Fully,
  Daily,
} from "./ContinentsList.styles";

const ContinentsList = ({ continents }: CotinentsArrayProps) => {
  return (
    <Container>
      <Wrapper>
        {" "}
        {continents.map((obj) => {
          const last = obj.data[obj.data.length - 1];

          return (
            <Card key={obj.iso_code}>
              <Link href="/chart/[iso]" as={`/chart/${obj.iso_code}`}>
                <a>
                  <span>
                    <Title> {obj.country}</Title>
                  </span>
                </a>
              </Link>
              <span>
                <Total> {formatLargeNum(last.people_vaccinated)} </Total>
              </span>

              <span>
                <Fully>
                  {" "}
                  {last.people_vaccinated_per_hundred}% fully vaccinated{" "}
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
