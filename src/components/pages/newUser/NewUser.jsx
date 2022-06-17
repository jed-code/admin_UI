import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUserContainer">
      <h1 className="newUserTitle"> New User</h1>

      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Amy" />
        </div>
        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="Mafuambala" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="amy@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+27 78 657 81 89" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="10 Annet Road park " />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <div className="newUserButton">Save</div>
    </div>
  );
}
