import React from "react";
import "./user.css";
import {
  CalendarToday,
  RoomOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="User">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButon">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="../image/jed6.jpg" alt="" className="ShowUserImg" />
            <div className="userTopTitle">
              <span className="userShowUsername">Andry</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBtitle">Account Details</span>
            <div className="userShowBtmInfo">
              <PermIdentity className="userShowBtmIcon" />
              <span className="userShowBtmInfoTitle">Andry</span>
            </div>
            <div className="userShowBtmInfo">
              <CalendarToday className="userShowBtmIcon" />
              <span className="userShowBtmInfoTitle">08/09/1999 </span>
            </div>
            <span className="userShowBtitle">Contact Details</span>
            <div className="userShowBtmInfo">
              <PhoneAndroid className="userShowBtmIcon" />
              <span className="userShowBtmInfoTitle">+27 63 162 02 34</span>
            </div>
            <div className="userShowBtmInfo">
              <MailOutline className="userShowBtmIcon" />
              <span className="userShowBtmInfoTitle">andry@gmail.com</span>
            </div>
            <div className="userShowBtmInfo">
              <RoomOutlined className="userShowBtmIcon" />
              <span className="userShowBtmInfoTitle">
                11 Hermittage Terrace Street
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="Andry"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Andry Bussugu"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="andry@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+27 63 162 02 34"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="11 Hermittage Terrace Street"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="../image/jed6.jpg"
                  alt=""
                  className="userUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className="userUploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
