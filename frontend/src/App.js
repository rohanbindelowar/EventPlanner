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
import PlannerProfile from "./Pages/PlannerProfile/PlannerProfile"; // Corrected import
import VendorSignUp from "./Pages/BeVendor";
import VendorProfile from "./Pages/VendorProfile/VendorProfile";
import { EventProfile } from "./Pages/EventProfile/EventProfile";
import BirthdayEventList from "./Pages/AllEventList/BirthDay EventList/BirthdayEventList";
import WeddingEventList from "./Pages/AllEventList/Wedding EventList/WeddingEventList";
import GraduationEventList from "./Pages/AllEventList/Graduation/GraduationEventList";
import AnniversaryEventList from "./Pages/AllEventList/Anniversary/AnniversaryeventList";
import ChristmasEventList from "./Pages/AllEventList/Christmas/ChristmasEventList";
import NewYearEventList from "./Pages/AllEventList/NewYear/NewYearEventList";
import SuperBowlEventList from "./Pages/AllEventList/SuperBowl/SuperBowleventList";
import OtherEventList from "./Pages/AllEventList/OtherCelebration/OthersEventList";
import { BeforeLoginHome } from "./Pages/BeforeLoginHome/BeforeLoginHome";
import { InvitationView } from "./Pages/AllInvitationView/InvitationView";
import { BirthDayInvitationView } from "./Pages/AllInvitationView/BirthDayInvitation";
import { GraduationInvitationView } from "./Pages/AllInvitationView/GraduationInvitation";

function App() {
  const location = useLocation();
  const hideHeaderFooterPaths = ["/EventPlanner/signup", "/EventPlanner/login", "/"];

  // Check if the current path is in the list of paths where header and footer should be hidden
  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {/* Render the header only if shouldHideHeaderFooter is false */}
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/EventPlanner/signup" element={<SignUp />} />
        <Route path="/EventPlanner/login" element={<Login />} />
        <Route path="/" element={<BeforeLoginHome/>}></Route>
        <Route path="/EventPlanner" element={<Home />} />
        <Route path="/EventPlanner/event" element={<Event />} />
        <Route path="/EventPlanner/event-planner" element={<EventPlanner />} />
        <Route path="/EventPlanner/vendor" element={<Vendor />} />
        <Route path="/EventPlanner/about" element={<About />} />
        <Route path="/EventPlanner/planner-profile/:plannerId" element={<PlannerProfile />} />
        <Route path="/EventPlanner/vendor-profile/:vendorId" element={<VendorProfile />} />
        <Route path="/EventPlanner/be-vendor" element={<VendorSignUp />} />
        
        <Route path="/EventPlanner/invitation" element={<Invitation />} />
        <Route path="/EventPlanner/event-profile/:eventId" element={<EventProfile />} />
        <Route path="/EventPlanner/hosting-event" element={<CreateEvent />} />
        <Route path="/EventPlanner/become-eventplanner" element={<EventPlannerSignUp />} />
        <Route path="/EventPlanner/birthday-eventlist" element={<BirthdayEventList />} />
        <Route path="/EventPlanner/wedding-eventlist" element={<WeddingEventList />} />
        <Route path="/EventPlanner/graduation-eventlist" element={<GraduationEventList />} />
        <Route path="/EventPlanner/anniversary-eventlist" element={<AnniversaryEventList />} />
        <Route path="/EventPlanner/christmas-eventlist" element={<ChristmasEventList />} />
        <Route path="/EventPlanner/newyear-eventlist" element={<NewYearEventList />} />
        <Route path="/EventPlanner/superbowl-eventlist" element={<SuperBowlEventList />} />
        <Route path="/EventPlanner/other-eventlist" element={<OtherEventList />} />
        <Route path="/EventPlanner/invitation-view/wedding" element={<InvitationView />} />
        <Route path="/EventPlanner/invitation-view/birthday" element={<BirthDayInvitationView/>} />
        <Route path="/EventPlanner/invitation-view/graduation" element={<GraduationInvitationView />} />
      </Routes>

      {/* Render the footer only if shouldHideHeaderFooter is false */}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
