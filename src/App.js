import React from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Event from "./Pages/Event/Event";
import EventPlanner from "./Pages/EventPlanner/EventPlanner";
import About from "./Pages/About/About";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <Routes>
        <Route path="/EventPlanner" element={<Home />}></Route>
        <Route path="/event" element={<Event/>}></Route>
        <Route path="/event-planner" element={<EventPlanner />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
