import React from "react";
import "./saleChart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SaleChart() {
  const data = [
    {
      name: "Jan",
      Sales: 2400,
    },
    {
      name: "Feb",
      Sales: 1398,
    },
    {
      name: "Mar",
      Sales: 9800,
    },
    {
      name: "Apr",
      Sales: 3908,
    },
    {
      name: "May",
      Sales: 4800,
    },
    {
      name: "Jun",
      Sales: 3800,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Performance</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Sales"
            stroke="darkblue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
