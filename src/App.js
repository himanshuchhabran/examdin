import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col h-screen w-screen bg-richblack-900" >
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}  />}/>
      <Route path="/dashboard" element={<Dashboard/>}/> 
    </Routes>
    </div>
  );
}

export default App;
