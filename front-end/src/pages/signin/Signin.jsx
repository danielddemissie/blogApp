import { useState } from "react";
import axios from "axios";
import "./signin.css";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [userState, setUserState] = useState({
    username: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    mymessage: "",
    data: {},
    success: 0,
  });

  const { success, mymessage } = userData;

  const navigate = useNavigate();

  const successHandler = () => {
    if (success === 1) {
      return (
        <div
          className="alert alert-success"
          style={{ marginTop: "50px", marginLeft: "50%", width: "50%" }}
        >
          {mymessage}
        </div>
      );
    } else if (success === 2) {
      return (
        <div
          className="alert alert-danger"
          style={{ marginTop: "50px", marginLeft: "50%", width: "50%" }}
        >
          {mymessage}
        </div>
      );
    }
  };

  setTimeout(() => {
    if (success === 2) {
      setUserData({ ...userData, success: 0 });
    }
  }, 2000);

  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/signin", { ...userState });
      const { message, data, success } = response.data;

      if (success === 1) {
        setUserData({
          mymessage: message,
          data: data,
          success: success,
        });

        setTimeout(() => {
          if (data.role === "admin") {
            navigate("/adminhome", {
              state: {
                data: data,
                message: message,
              },
            });
          }
          if (data.role === "user") {
            navigate("/userhome", {
              state: {
                data: data,
                message: message,
              },
            });
          }
        }, 1000);
      } else if (success === 2) {
        setUserData({
          mymessage: message,
          data: data,
          success: success,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container signup-container">
      <div className="row justify-content-lg-center">
        <div className="col-md-6 col-lg-6 col-sm-6">
          <form className="bg signup-form" onSubmit={signinHandler}>
            <h3 style={{ color: "#000" }}>Sign in</h3>
            <div className="form-group">
              <label className="labels-login">User name </label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="username"
                onChange={(e) => {
                  setUserState({ ...userState, username: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className="labels-login">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="password"
                onChange={(e) => {
                  setUserState({ ...userState, password: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="signupbtn">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-sm-6"
        style={{ position: "absolute", top: "30px", right: "20px" }}
      >
        {successHandler()}
      </div>
    </div>
  );
}
