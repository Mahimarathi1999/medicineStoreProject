import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Validation} from "../helpers/validation"
import { useHistory } from "react-router-dom";

const Signup = () => {
    let history = useHistory();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({});

  const handleValidation = (type) => {
    if (type === "firstName") {
      if (Validation.empty(userData.firstName)) {
        setError({ ...error, firstName: "First Name is required" });
        return false;
      } else if (!Validation.name(userData.firstName)) {
        setError({
          ...error,
          firstName: "Min 2 and Max 50 characters allowed",
        });
        return false;
      }
    } else if (type === "lastName") {
      if (Validation.empty(userData.lastName)) {
        setError({ ...error, lastName: "Last Name is required" });
        return false;
      } else if (!Validation.name(userData.lastName)) {
        setError({ ...error, lastName: "Min 2 and Max 50 characters allowed" });
        return false;
      }
    } else if (type === "email") {
      if (Validation.empty(userData.email)) {
        setError({ ...error, email: "Email is required" });
        return false;
      } else if (!Validation.email(userData.email)) {
        setError({
          ...error,
          email: "Please enter the email in a valid format",
        });
        return false;
      } else if (!Validation.emailLength(userData.email)) {
        setError({ ...error, email: "Max 100 characters allowed" });
        return false;
      }
    } else if (type === "password") {
      if (Validation.empty(userData.password)) {
        setError({ ...error, password: "Password is required" });
        return false;
      } else if (!Validation.password(userData.password)) {
        setError({
          ...error,
          password:
            "Your password needs to be at least six characters and contain at least one number and one alphabet and special character.",
        });
        return false;
      }
    } else if (type === "confirmPass") {
      if (Validation.empty(userData.confirm)) {
        setError({ ...error, confirmPass: "Confirm Password is required" });
        return false;
      } else if (userData.password !== userData.confirm) {
        setError({
          ...error,
          confirmPass: "Passwords do not match",
        });
        return false;
      }
    }
   
    return true;
  };

const handleSubmit=()=>{

    let fields = [
        "firstName",
        "lastName",
        "email",
        // "phone",
        "password",
        "confirmPass",
      ];
      let isvalid = false;
      for (let i = 0; i < fields.length; i++) {
        isvalid = handleValidation(fields[i]);
        if (!isvalid) break;
      }
      if (!isvalid) return;
  
  

    var myobj = JSON.stringify(userData);
      localStorage.setItem("testobj", myobj);
    //   setCount(1);
      console.log(userData);
    //   toast.success(' Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     })
        alert("Signup Successful")
        setUserData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm: "",
          })
          setError({})
          history.push("./login")


}

  return (
    <>
    <ToastContainer />
      <div className="row mt-5 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 pb-3  border rounded bg-light">
          <h2 className="text-center mb-3 bg-dark text-light">SignUp</h2>
          <form>
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example1">
                First Name
              </label>{" "}
              <input
                type="text"
                id="form1Example11"
                class="form-control"
                value={userData.firstName}
                onChange={(e) => {
                  setUserData({ ...userData, firstName: e.target.value });
                  
                }}
                onFocus={(e) => setError({ ...error, firstName: "" })}
                onBlur={(e) => handleValidation("firstName")}
                

              />
               {error && (
                    <span style={{ color: "red" }}>{error?.firstName}</span>
                  )}

            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example12">
                Last Name
              </label>{" "}
              <input type="text" id="form1Example12" class="form-control"
              value={userData.lastName}
              onChange={(e) => {
                setUserData({ ...userData, lastName: e.target.value });
              }} 
              onFocus={(e) => setError({ ...error, lastName: "" })}
              onBlur={(e) => handleValidation("lastName")}
                />
                {error && (
                    <span style={{ color: "red" }}>{error?.lastName}</span>
                  )}

            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example1">
                Email address
              </label>{" "}
              <input type="text" id="email" class="form-control" 
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              onFocus={(e) => setError({ ...error, email: "" })}
              onBlur={(e) => handleValidation("email")}

              />
               {error && (
                    <span style={{ color: "red" }}>{error?.email}</span>
                  )}

            </div>

            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example2">
                Password
              </label>{" "}
              <input type="password" id="form1Example2" class="form-control" 
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              onFocus={(e) => setError({ ...error, password: "" })}
              onBlur={(e) => handleValidation("password")}

              />
               {error && (
                    <span style={{ color: "red" }}>{error?.password}</span>
                  )}

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example2">
                Confirm Password
              </label>{" "}
              <input type="password" id="form1Example22" class="form-control"
              value={userData.confirm}
              onChange={(e) => {
                setUserData({ ...userData, confirm: e.target.value });
              }} 
              onFocus={(e) => setError({ ...error, confirmPass: "" })}
                      onBlur={(e) => handleValidation("confirmPass")}

              />
              {error && (
                    <span style={{ color: "red" }}>{error?.confirmPass}</span>
                  )}

            </div>

            <button type="button" class="btn btn-primary btn-block" onClick={()=>handleSubmit()}>
              Sign Up
            </button>
            <p className="text-right pt-2">
              {" "}
              Already have an account? <Link to="/login">Login</Link>{" "}
            </p>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Signup;
