import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    password: "",
    photo: "",
    role: "",
  });

  const [userData, setUserData] = useState({
    mymessage: "",
    data: {},
    success: 0,
  });

  const { success, mymessage } = userData;

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
  }, 3000);

  const signupHandler = async (e) => {
    e.preventDefault();
    if (userState.email) {
      try {
        const response = await axios.post("/user/signup", {
          ...userState,
        });
        const { message, data, success } = response.data;

        if (success === 1) {
          setUserData({
            mymessage: message,
            data: data,
            success: success,
          });

          setTimeout(() => {
            navigate("/signin");
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
    } else {
      setUserData({
        data: "",
        mymessage: "enter valid email",
        success: 2,
      });
    }
  };

  return (
    <div className="container signup-container">
      <div className="row justify-content-lg-center">
        <div className="col-md-6 col-lg-6 col-sm-6 ">
          <form className="bg signup-form" onSubmit={signupHandler}>
            <h3 style={{ color: "#000", paddingTop: "-30px" }}>Sign up</h3>
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
              <label className="labels-login">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="email"
                onChange={(e) => {
                  const regx =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if (regx.test(e.target.value)) {
                    setUserState({ ...userState, email: e.target.value });
                  }
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
            <div className="form-group">
              <span className="labels-login role">Role</span>
              <span className="radio-span">
                <label className="labels-login">User </label>
                <input
                  className="radio"
                  type="radio"
                  id="hasrole-user"
                  value="user"
                  name="radio"
                  onClick={(myradio) => {
                    setUserState({
                      ...userState,
                      role: myradio.target.value,
                    });
                  }}
                />
              </span>

              <span className="radio-span">
                <label className="labels-login" htmlFor="myradio">
                  Admin{" "}
                </label>
                <input
                  className="radio"
                  type="radio"
                  name="radio"
                  id="hasrole-admin"
                  value="admin"
                  onClick={(myradio) => {
                    setUserState({
                      ...userState,
                      role: myradio.target.value,
                    });
                  }}
                />
              </span>
            </div>
            <button type="submit" className="signupbtn">
              Sign up
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
