import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        {/* <WorkExp/> */}
        <Contact />
      </div>

      <div className="footer mb-3 ms-3">
        <h4 className="text-center">MY Portfolio 😊 &copy; 2024</h4>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ background: "#1e1e2c", borderRadius: "80px" }}
        height="23px"
      />
    </div>
  );
}

export default App;
