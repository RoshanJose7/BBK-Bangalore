import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
