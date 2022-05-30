

import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Map from "./Map";
import Home from "./Home";
import MyRoutes from "./components/MyRoutes";
import LoginForm from "./LoginForm";
import Main from "./Main";

import RegisterForm from "./RegisterForm";
function App() {
  return (
  
    <div>
            
            <BrowserRouter>
          
            <Routes>
            <Route path="/Main" element={<Main/>} />
            <Route path="/" element={<Home/>} />
             <Route path="/map" element={<Map/>} />
             <Route path="/MyRoutes" element={<MyRoutes />} />
             <Route path="/LoginForm" element={<LoginForm />} />
             <Route path="/RegisterForm" element={<RegisterForm />} />
            {/*  <Route path="/RecommendedWalkingRoutes" element={<RecommendedWalkingRoutes />} />
             <Route path="/MyPage" element={<MyPage />} />
            
             */} 
            </Routes>
            </BrowserRouter>

  
      
        </div>
  );
}

export default App;
