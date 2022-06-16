import React from "react";
import Feature from "../feedInfo/Feature";
import "./home.css";
import Chart from "../../chart/Chart";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLarge from "../../widgetLarge/WidgetLarge";

export default function Home() {
  return (
    <div className="Container">
      <Feature />
      <Chart />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
