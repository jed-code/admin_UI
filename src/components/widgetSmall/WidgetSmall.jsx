import React from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="WidgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallItem">
          <img src="./image/jed2.jpg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetUserName">Jedidya</span>
            <span className="widgetUserJobTitle">React Js</span>
          </div>
          <button className="widgetSmallButtom">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img src="./image/jed3.jpg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetUserName">Kazadi</span>
            <span className="widgetUserJobTitle">wordpress</span>
          </div>
          <button className="widgetSmallButtom">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img src="./image/jed4.jpg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetUserName">Kongolo</span>
            <span className="widgetUserJobTitle">wordpress</span>
          </div>
          <button className="widgetSmallButtom">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img src="./image/jed5.png" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetUserName">Chris</span>
            <span className="widgetUserJobTitle">wordpress</span>
          </div>
          <button className="widgetSmallButtom">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img src="./image/jed6.jpg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetUserName">Andry</span>
            <span className="widgetUserJobTitle">wordpress</span>
          </div>
          <button className="widgetSmallButtom">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
