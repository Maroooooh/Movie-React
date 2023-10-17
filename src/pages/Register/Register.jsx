import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmpasswordError: "",
  });
  const handleChange = (evt) => {
    // console.log(evt.target);
    var regex = /^[a-zA-Z]{2,10}(@)(gmail|yahoo)(.com)$/;
    if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
      setErrors({
        ...errors,
        nameError: evt.target.value.length == 0 ? "Name is Required" : "",
      });
    } else if (evt.target.name == "email") {
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
    } else if (evt.target.name === "username") {
      setUser({ ...user, username: evt.target.value });
      setErrors({
        ...errors,
        usernameError:
          evt.target.value.length === 0
            ? "Username is Required"
            : evt.target.value.includes(" ")
            ? "Username must not contain space"
            : "",
      });
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.length === 0
            ? "Password is Required"
            : evt.target.value.length < 8
            ? "Password length should be at least 8 characters"
            : !/[a-z]/.test(evt.target.value) ||
              !/[A-Z]/.test(evt.target.value) ||
              !/[0-9]/.test(evt.target.value) ||
              !/[@!#$%^&]/.test(evt.target.value)
            ? "Password should contain at least one lowercase, one uppercase, one digit, and one special character"
            : "",
      });
    } else if (evt.target.name === "confirmpassword") {
      setUser({ ...user, confirmpassword: evt.target.value });
      setErrors({
        ...errors,
        confirmpasswordError:
          evt.target.value.length === 0
            ? "confirm Password is Required"
            : evt.target.value !== user.password
            ? "Passwords do not match"
            : "",
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const toggleconfirmPasswordVisibility = () => {
    setShowconfirmPassword(!showconfirmPassword);
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
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.nameError ? "border-danger shadow-none" : ""
            }`}
            id="formGroupExampleInput"
            value={user.name}
            name="name"
            placeholder="Please Enter Name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email :
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
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
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.usernameError ? "border-danger shadow-none" : ""
            }`}
            id="formGroupExampleInput3"
            value={user.username}
            name="username"
            placeholder="Please Enter Username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.usernameError}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password :
          </label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="formGroupExampleInput4"
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
            <p className="text-danger">{errors.passwordError}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Confirm Password :
          </label>
          <div>
            <input
              type={showconfirmPassword ? "text" : "password"}
              className="form-control"
              id="formGroupExampleInput5"
              value={user.confirmpassword}
              name="confirmpassword"
              placeholder="Please Enter password,Again"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span onClick={toggleconfirmPasswordVisibility}>
              {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <p className="text-danger">{errors.confirmpasswordError}</p>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
        
         </div>
      
    </div>
  );
};

export default Register;
