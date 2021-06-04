import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { selectedCountryProps } from "./Chart.models";
import { formatMonth } from "../../utils/formatting";
import { Header } from "../../components";

import { Container } from "./Chart.styles";

const Chart = ({ selectedCountry }: selectedCountryProps) => {
  const dataArray = selectedCountry.data;
  const dataLength = dataArray.length - 1;
  const second = Math.floor(dataLength * 0.2);
  const third = Math.floor(dataLength * 0.4);
  const fourth = Math.floor(dataLength * 0.6);
  const fifth = Math.floor(dataLength * 0.8);

  const data = [
    {
      name: formatMonth(dataArray[0].date),
      total: dataArray[0]?.total_vaccinations,
      fully: dataArray[0]?.people_fully_vaccinated,
    },
    {
      name: formatMonth(dataArray[second].date),
      total: dataArray[second]?.total_vaccinations,
      fully: dataArray[second]?.people_fully_vaccinated,
    },
    {
      name: formatMonth(dataArray[third].date),
      total: dataArray[third]?.total_vaccinations,
      fully: dataArray[third]?.people_fully_vaccinated,
    },
    {
      name: formatMonth(dataArray[fourth].date),
      total: dataArray[fourth]?.total_vaccinations,
      fully: dataArray[fourth]?.people_fully_vaccinated,
    },
    {
      name: formatMonth(dataArray[fifth].date),
      total: dataArray[fifth]?.total_vaccinations,
      fully: dataArray[fifth]?.people_fully_vaccinated,
    },
    {
      name: formatMonth(dataArray[dataLength].date),
      total: dataArray[dataLength]?.total_vaccinations,
      fully: dataArray[dataLength]?.people_fully_vaccinated,
    },
  ];

  return (
    <Container>
      <AreaChart
        width={730}
        height={250}
        data={data}
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
  );
};

export default Chart;
