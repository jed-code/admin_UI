import React from "react";
import Feature from "../feedInfo/Feature";
import "./home.css";
import Chart from "../../chart/Chart";

export default function Home() {
  return (
    <div className="Container">
      <Feature />
      <Chart />
    </div>
  );
}
