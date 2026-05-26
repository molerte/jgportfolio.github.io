import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from "./components/Navbar";
import MolerteAbout from "./pages/molerteAbout";
import MolerteProjects from "./pages/molerteProjects"; 
import MolerteGallery from "./pages/molerteGallery";

export default function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<MolerteGallery />} /> 
                <Route path="/molerteAbout" element={<MolerteAbout />} />
                <Route path="/molerteProjects" element={<MolerteProjects />} />     
            </Routes>
        </Router>
    );
}