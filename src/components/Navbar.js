import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/examdin_logo.png"
import toast from "react-hot-toast"
const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex gap-3 justify-evenly">
    
      <Link to="/">
        <img src={logo} alt="logo" width={50} height = {32} loading ="lazy"/>
      </Link>
      
      <nav >
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3"> 
        {!isLoggedIn && <Link to="/login">
          <button>Login</button>
        </Link>
        }
        { !isLoggedIn &&
        <Link to="/signup">
          <button >Sign Up</button>
        </Link>
        }
        { isLoggedIn&&
        <Link to="/">
          <button onClick={()=>{
            setIsLoggedIn(false);
            toast.success("Logged Out");
          }}>Logout</button>
        </Link>
        }
        {
          isLoggedIn &&
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;