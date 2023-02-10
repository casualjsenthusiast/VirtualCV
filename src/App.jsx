import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Accomplishments from "./components/Accomplishments/Accomplishments";
import Interests from "./components/Interests/Interests";


function App() {
  return (
    <>
      <header className="main-header">
        <Navbar />
      </header>
      <main className="main-content">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Accomplishments />
        <Interests />
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
