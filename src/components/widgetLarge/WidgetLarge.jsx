import React from "react";
import "./widgetLarge.css";

export default function WidgetLarge() {
  return (
    <div className="WidgetLarge">
      <h3 className="widgetLargeTitle">Lastest Transactions</h3>
      <table className="WidgetLargeTable">
        <tr className="WidgetLargeTableRow">
          <th className="WidgetLargeTableHead">Customer</th>
          <th className="WidgetLargeTableHead">Date</th>
          <th className="WidgetLargeTableHead">Amount</th>
          <th className="WidgetLargeTableHead">Status</th>
        </tr>
        <tr className="WidgetLargeTableRow">
          <td className="WidgetUser">
            <img src="./image/jeje4.png" alt="" className="WidgetImg" />
            <span className="WidgetName">Jenovic Kabunda</span>
          </td>
          <td className="WidgetDate">16 june 2022</td>
          <td className="WidgetAmount">R 3000</td>
          <td className="WidgetStatus">
            <button className="WidgetLargeButton approved">approved</button>
          </td>
        </tr>
        <tr className="WidgetLargeTableRow">
          <td className="WidgetUser">
            <img src="./image/jeje1.png" alt="" className="WidgetImg" />
            <span className="WidgetName">Jenovic Kabunda</span>
          </td>
          <td className="WidgetDate">16 june 2022</td>
          <td className="WidgetAmount">R 5000</td>
          <td className="WidgetStatus">
            <button className="WidgetLargeButton Declined">Declined</button>
          </td>
        </tr>
        <tr className="WidgetLargeTableRow">
          <td className="WidgetUser">
            <img src="./image/jeje2.png" alt="" className="WidgetImg" />
            <span className="WidgetName">Jenovic Kabunda</span>
          </td>
          <td className="WidgetDate">16 june 2022</td>
          <td className="WidgetAmount">R 2000</td>
          <td className="WidgetStatus">
            <button className="WidgetLargeButton Declined">Declined</button>
          </td>
        </tr>
        <tr className="WidgetLargeTableRow">
          <td className="WidgetUser">
            <img src="./image/jeje3.png" alt="" className="WidgetImg" />
            <span className="WidgetName">Jenovic Kabunda</span>
          </td>
          <td className="WidgetDate">16 june 2022</td>
          <td className="WidgetAmount">R 1000</td>
          <td className="WidgetStatus">
            <button className="WidgetLargeButton Pending">Pending</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
