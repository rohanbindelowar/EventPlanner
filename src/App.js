import React from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Event from "./Pages/Event/Event";
import EventPlanner from "./Pages/EventPlanner/EventPlanner";
import About from "./Pages/About/About";
import { Footer } from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignIn/SignIn";
import { Invitation } from "./Pages/Invitation/Invitation";
import { Vendor } from "./Pages/Vendor/Vendor";
import CreateEvent from "./Pages/HostEvent/EventHosting";
import EventPlannerSignUp from "./Pages/BeEventPlanner";
import { PlannerProfile } from "./Pages/PlannerProfile/PlannerProfile";
import VendorSignUp from "./Pages/BeVendor";
import { InvitationView } from "./Pages/InvitationView";

function App() {
  const location = useLocation();

  // Function to determine if Header and Footer should be rendered
  const shouldRenderHeaderFooter = () => {
    return !['/EventPlanner/signup', '/EventPlanner/signup/EventPlanner/login'].includes(location.pathname);
  };

  return (
    <div className="App">
      {shouldRenderHeaderFooter() && <Header className='header'/>}
      <Routes>
        <Route path="/EventPlanner/signup" element={<SignUp/>}></Route>
        <Route path="/EventPlanner/signup/EventPlanner/login" element={<Login/>}></Route>
        <Route path="/EventPlanner" element={<Home />}></Route>
        <Route path="/EventPlanner/event" element={<Event/>}></Route>
        <Route path="/EventPlanner/event-planner" element={<EventPlanner />}></Route>
        <Route path="/EventPlanner/vendor" element={<Vendor/>}></Route>
        <Route path="/EventPlanner/about" element={<About/>}></Route>
        <Route path="/EventPlanner/planner-profile/" element={<PlannerProfile/>}></Route>
        <Route path="/EventPlanner/vendor-profile/" element={<PlannerProfile/>}></Route>
        <Route path="/EventPlanner/be-vendor/" element={<VendorSignUp/>}></Route>
        <Route path="/EventPlanner/invitation-view/" element={<InvitationView/>}></Route>
        <Route path="/EventPlanner/invitation" element={<Invitation/>}></Route>
        <Route path="/EventPlanner/hosting-event" element={<CreateEvent/>}></Route>
        <Route path="/EventPlanner/become-eventplanner" element={<EventPlannerSignUp/>}></Route>
      </Routes>
      {shouldRenderHeaderFooter() && <Footer/>}
    </div>
  );
}

export default App;
