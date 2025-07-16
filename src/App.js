import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import LabChallenges from "./Pages/LabChallenges";
import Projects from "./Pages/Projects";
import ResumeOutline from "./Pages/ResumeOutline";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<ResumeOutline />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/lab-challenges" element={<LabChallenges />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
