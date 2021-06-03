import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "./data";

export default class Graph extends PureComponent {
  state = {
    opacity: {
      fully: 1,
      total: 1,
    },
  };

  handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o: any) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
            <Line
              type="monotone"
              dataKey="total"
              strokeOpacity={opacity.total}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="fully"
              strokeOpacity={opacity.fully}
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
