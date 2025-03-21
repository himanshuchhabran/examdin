import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const SignUpForm = ({setIsLoggedIn}) => {
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function submitHandler(e){

    e.preventDefault();
    if(formdata.password !== formdata.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Account created successfully");
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* {firstName,lastName} */}
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
            required
            type="text"
            name="firstName"
            value={formdata.firstName}
            id="firstName"
            onChange={changeHandler}
            placeholder="Enter your first name"
          />
          </label>
          

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
            required
            type="text"
            name="lastName"
            value={formdata.lastName}
            id="lastName"
            onChange={changeHandler}
            placeholder="Enter your last name"
          />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            <p>Email Address<sup>*</sup></p>
          </label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            id="email"
            onChange={changeHandler}
            placeholder="Enter your email"
          />

          <label htmlFor="password"><p>Create Password<sup>*</sup></p></label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formdata.password}
            id="password"
            onChange={changeHandler}
            placeholder="Enter your password"
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <label htmlFor="confirmPassword"><p>Confirm Password<sup>*</sup></p></label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formdata.confirmPassword}
            id="confirmPassword"
            onChange={changeHandler}
            placeholder="Confirm your password"
          />

          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
