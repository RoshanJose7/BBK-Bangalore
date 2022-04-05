import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CircleScrollIndicator from "./components/circlescrollindicator/circlescrollindicator";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.component";
import OurDojosPage from "./pages/dojos/dogos.pages";
import EventsPage from "./pages/events/events.pages";
import HomePage from "./pages/home/home.pages";
import OrganizationPage from "./pages/organization/organization.pages";
import SyllabusPage from "./pages/syllabus/syllabus.pages";

function Router() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <CircleScrollIndicator />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/dojos" element={<OurDojosPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Router;
