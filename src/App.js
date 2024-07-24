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
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada'

function App() {
  const [theme]= useTheme()
  return (
    <div>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          {/* <WorkExp/> */}
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">MY Portfolio 😊 &copy; 2024</h4>
          </Tada>
        </div>
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
