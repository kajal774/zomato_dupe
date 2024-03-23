import React from "react";
import Header from "./Header";
import Login from "../AuthComponents/LOGIN/Login";
import Signup from "../AuthComponents/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";



const Home=()=>{
    return(<div>

        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>

      </Route>

    </Routes>
    
    </BrowserRouter>
       
        
    </div>)

}
export default Home;