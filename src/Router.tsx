import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.component";
import OurDojosPage from "./pages/dojos/dogos.pages";
import EventsPage from "./pages/events/events.pages";
import HomePage from "./pages/home/home.pages";
import OrganizationPage from "./pages/organization/organization.pages";
import SyllabusPage from "./pages/syllabus/syllabus.pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organization" element={<OrganizationPage />} />
        <Route path="/dojo" element={<OurDojosPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
