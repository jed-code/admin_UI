import React from "react";
import "./feature.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Feature() {
  return (
    <div className="Feature">
      <div className="FeaturedItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">R 200</span>
          <span className="featuredMoneyRate">
            -2.3 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredTitleCompare">Compare to last month </span>
      </div>
      <div className="FeaturedItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">R 100</span>
          <span className="featuredMoneyRate">
            -10.09 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredTitleCompare">Compare to last month </span>
      </div>
      <div className="FeaturedItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">R 900</span>
          <span className="featuredMoneyRate">
            +5.01 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredTitleCompare">Compare to last month </span>
      </div>
    </div>
  );
}
