import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectDetail1 from "./pages/ProjectDetail1";
import ProjectDetail2 from "./pages/ProjectDetail2";
import ProjectDetail3 from "./pages/ProjectDetail3";
import ProjectDetail4 from "./pages/ProjectDetail4";

function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Main Home Page (all sections in one) */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Individual Section Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project Detail Pages */}
        <Route path="/project/it-assets-form" element={<ProjectDetail1 />} />
        <Route path="/project/room-booking-management" element={<ProjectDetail2 />} />
        <Route path="/project/gatepass-management" element={<ProjectDetail3 />} />
        <Route path="/project/spotify-clone" element={<ProjectDetail4 />} />
      </Routes>

      {!isProjectDetail && <footer>© 2025 Mohit.dev</footer>}
    </div>
  );
}

export default App;
