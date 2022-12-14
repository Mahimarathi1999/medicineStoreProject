import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Validation } from "../helpers/validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({private1,setPrivate1 , isauth , setIsAuth}) => {
  let history = useHistory();

  const [error, setError] = useState({});

  const [showPassword, setShowPassword] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleValidation = (type) => {
    if (type === "email") {
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
    }

    return true;
  };

  const handleSubmit=()=>{
    let fields = [
      
        "email"
      ];
      let isvalid = false;
      for (let i = 0; i < fields.length; i++) {
        isvalid = handleValidation(fields[i]);
        if (!isvalid) break;
      }
      if (!isvalid) return;


      var signdetails=''
      if(localStorage.length>0){ var text = localStorage.getItem("testobj");
       signdetails = JSON.parse(text);}
       else{
           toast.error(' Please signup first!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
       }

       if(userData.email&&userData.password && signdetails ){ if (
        signdetails.email === userData.email.trim() &&
        signdetails.password === userData.password
      ) { 
        localStorage.setItem("MedTtoken", true);
        alert('login successful')
        setPrivate1({userData})
        setIsAuth(true)
        history.push('/')
        
      } else {
        // alert("");
        toast.error('incorrect password or username!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
      }
    }
  }

  return (
    <>
        <ToastContainer />

      <div className="row mt-5 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 pb-3  border rounded bg-light">
          <h2 className="text-center mb-3 bg-dark text-light">Login</h2>
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example1">
                Email address
              </label>{" "}
              <input
                type="email"
                id="email"
                class="form-control"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                onFocus={(e) => setError({ ...error, email: "" })}
                onBlur={(e) => handleValidation("email")}
              />
              {error && <span style={{ color: "red" }}>{error?.email}</span>}
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example2">
                Password
              </label>{" "}
              <input
                type={showPassword ? "password" : "text"}
                id="form1Example2"
                class="form-control"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked={!showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Show Password{" "}
                  </label>
                </div>
              </div>

              
            </div>

            <button type="button" class="btn btn-primary btn-block" onClick={()=>handleSubmit()}>
              Log in
            </button>
            <p className="text-right pt-2">
              {" "}
              Don't have an account? <Link to="/signup">SignUp</Link>{" "}
            </p>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Login;
