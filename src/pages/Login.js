import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login_image.jpg'
const Login = ({setIsLoggedIn }) => {
  return (
    <div 
    className=''
    ><Template 
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}



    /></div>
  )
}


export default Login;