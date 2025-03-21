import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""});

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

        const changeHandler = (e) => {
            e.preventDefault();
            setFormdata({...formdata, [e.target.name]: e.target.value});
        }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In    Successfully");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="email">
            <p>Email Address<sup>*</sup></p>
            <input required type="email" name="email" value={formdata.email} id="email" placeholder='Enter your email' onChange={changeHandler}/>
        </label>

        <label htmlFor="password">
            <p>Password<sup>*</sup></p>
            <input required type={showPassword?"text":"password"} name="password" value={formdata.password} id="password" placeholder='Enter your password' onChange={changeHandler}/>

            <span onClick={()=>setShowPassword(!showPassword)}>
                {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
            </span>

            <Link to="#">Forgot Password?</Link>

            
        </label>
        <br/>
        <button type="submit">Sign In</button>

        
    </form>
  )
}

export default LoginForm