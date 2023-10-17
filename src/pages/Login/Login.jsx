import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  // single srouce of truth ... (مش)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const handleChange = (evt) => {
    // console.log(evt.target);
    var regex = /^[a-zA-Z]{2,10}(@)(gmail|yahoo)(.com)$/;
    if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.length == 0
            ? "Email is Required"
            : regex.test(evt.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (evt.target.name === "password") {
      setUser({ ...user, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.length === 0
            ? "Password is Required"
            : evt.target.value.length < 8
            ? "Password length should be at least 8 characters"
            : "",
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div>
      <div className="container">

      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput1" className="form-label">
            Email :
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput1"
            value={user.email}
            name="email"
            placeholder="Please Enter Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.emailError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password :
          </label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="formGroupExampleInput2"
              value={user.password}
              name="password"
              placeholder="Please Enter password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className="text-danger">{errors.passwordError}</p>
        </div>
        <div class="col-12">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      </div>
     
    </div>
  );
};

export default Login;
