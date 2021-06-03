import { selectedCountryProps } from "./Chart.models";
import Graph from "./Graph";

const Chart = ({ selectedCountry }: selectedCountryProps) => {
  console.log(selectedCountry);

  return (
    <div style={{ width: "100%" }}>
      <h1>Hello graph</h1>
      <Graph />
    </div>
  );
};

export default Chart;
