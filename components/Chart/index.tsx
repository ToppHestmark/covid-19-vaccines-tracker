import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatMonth } from "../../utils/formatting";
// import useMediaQuery from "../hooks/useMediaQuery";

import { selectedCountryProps } from "./chart.models";
import {
  Container,
  LabelWrapper,
  FullySquare,
  TotalSquare,
  Label,
} from "./Chart.styles";

const Chart = ({ selectedCountry }: selectedCountryProps) => {
  // const smallScreen = useMediaQuery("(min-width: 320px)");
  // const mediumSmallScreen = useMediaQuery("(min-width: 588px)");
  // const mediumScreen = useMediaQuery("(min-width: 768px)");
  // const largeScreen = useMediaQuery("(min-width: 992px)");
  // const extraLargeScreen = useMediaQuery("(min-width: 1200px)");

  const dataArray = selectedCountry.data;
  const dataLength = selectedCountry.data.length - 1;
  const first = Math.floor(dataLength * 0.1);
  const second = Math.floor(dataLength * 0.3);
  const third = Math.floor(dataLength * 0.5);
  const fourth = Math.floor(dataLength * 0.6);
  const fifth = Math.floor(dataLength * 0.7);
  const sixt = Math.floor(dataLength * 0.75);
  const seventh = Math.floor(dataLength * 0.85);
  const eight = Math.floor(dataLength * 0.9);
  const nine = Math.floor(dataLength * 0.99);

  const viewResults = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixt,
    seventh,
    eight,
    nine,
  ].map((dataXindex) => ({
    name: formatMonth(dataArray[dataXindex].date),
    total: dataArray[dataXindex]?.people_vaccinated,
    fully: dataArray[dataXindex]?.people_fully_vaccinated,
  }));

  return (
    <>
      <LabelWrapper>
        <TotalSquare /> <Label>First dose</Label>
        <FullySquare /> <Label>Fully vaccinated</Label>
      </LabelWrapper>
      <Container>
        <AreaChart
          width={1200}
          height={400}
          data={viewResults}
          margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colortotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f5b5fc" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f5b5fc" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorfully" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" style={{ paddingTop: "100px" }} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#f5b5fc"
            fillOpacity={1}
            fill="url(#colortotal)"
          />
          <Area
            type="monotone"
            dataKey="fully"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorfully)"
          />
        </AreaChart>
      </Container>
    </>
  );
};

export default Chart;
