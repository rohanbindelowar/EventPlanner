import React from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Event from "./Pages/Event/Event";
import EventPlanner from "./Pages/EventPlanner/EventPlanner";
import About from "./Pages/About/About";
import { Footer } from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignIn/SignIn";


function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <Routes>
        <Route path="/EventPlanner/signup" element={<SignUp/>}></Route>
        <Route path="EventPlanner/signup/EventPlanner/login" element={<Login/>}></Route>
        <Route path="/EventPlanner" element={<Home />}></Route>
        <Route path="/EventPlanner/event" element={<Event/>}></Route>
        <Route path="/EventPlanner/event-planner" element={<EventPlanner />}></Route>
        <Route path="/EventPlanner/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
