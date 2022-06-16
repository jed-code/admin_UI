import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      "Active User": 2400,
    },
    {
      name: "Feb",
      "Active User": 1398,
    },
    {
      name: "Mar",
      "Active User": 9800,
    },
    {
      name: "Apr",
      "Active User": 3908,
    },
    {
      name: "May",
      "Active User": 4800,
    },
    {
      name: "Jun",
      "Active User": 3800,
    },
    {
      name: "Jul",
      "Active User": 4300,
    },
    {
      name: "Aug",
      "Active User": 3300,
    },
    {
      name: "Sep",
      "Active User": 6300,
    },
    {
      name: "Oct",
      "Active User": 2300,
    },
    {
      name: "Nov",
      "Active User": 4300,
    },
    {
      name: "Dec",
      "Active User": 9300,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
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
            dataKey="Active User"
            stroke="darkblue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
