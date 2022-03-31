import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.component";
import OurDojosPage from "./pages/dojos/dogos.pages";
import HomePage from "./pages/home/home.pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dojo" element={<OurDojosPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
