

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Map from "./Map";
import Appcalendar from "./Appcalendar";
import MainHome from "./Home";
import Error from "./Error";
import Layout from "./Layouts/Layout";
import Home from "./Home";
import Login from "./LoginForm";
import LoginForm from "./LoginForm";

function App() {
  return (
  
    <div>
            
            <BrowserRouter>
          
            <Routes>
            <Route path="/" element={<Home/>} />
             <Route path="/map" element={<Map/>} />
             <Route path="/LoginForm" element={<LoginForm/>} />
             <Route path="/*" element={<Error />} />
            </Routes>
            </BrowserRouter>

  
      
        </div>
  );
}

export default App;
