import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { LandingPage } from "./pages/LandingPage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { RestaurantRegister } from "./pages/RestaurantRegister";
import NavBar from './components/NavBar';
import logo from './assets/images/logo.png';
import mbl from './assets/images/mbl.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/restaurantregister" element={<RestaurantRegister />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
    
     
     </BrowserRouter>
     </>
  )
}

export default App
