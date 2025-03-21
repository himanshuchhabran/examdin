import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"

const LoginForm = () => {

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""});

    const [showPassword, setShowPassword] = useState(false);

        const changeHandler = (e) => {
            e.preventDefault();
            setFormdata({...formdata, [e.target.name]: e.target.value});
        }
  return (
    <form>
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

            <Link to="/forgotpassword">Forgot Password?</Link>

            <button type="submit">Sign In</button>
        </label>

        
    </form>
  )
}

export default LoginForm