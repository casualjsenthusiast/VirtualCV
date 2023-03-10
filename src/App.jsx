import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Accomplishments from "./components/Accomplishments/Accomplishments";
import Interests from "./components/Interests/Interests";

export const themes = {
  light: {
    background: "#ffffff",
    text: "#1d2226",
    containerBackground: "#ffffff",
    educationBackground: "rgba(246, 250, 252, 1)",
    accomplishments: "rgba(255, 250, 243, 1)",
    interests: "rgba(87, 85, 83, 1)",
  },
  dark: {
    background: "#1d2226",
    text: "hsla(0,0%,100%,0.9)",
    containerBackground: "#000000",
    educationBackground: "#000000",
    accomplishments: "#000000",
    interests: "#000000",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

function App() {
  const [themeContext, setThemeContext] = useState({
    theme: themes.dark,
    toggleTheme: () => {},
  });

  const toggleTheme = () => {
    setThemeContext((prevState) => {
      return prevState.theme === themes.light
        ? { ...prevState, theme: themes.dark }
        : { ...prevState, theme: themes.light };
    });
  };

  const themeValue = { theme: themeContext, toggleTheme: toggleTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      <header className="main-header">
        <Navbar />
      </header>
      <main
        className="main-content"
        style={{
          color: themeContext.theme.text,
          backgroundColor: themeContext.theme.containerBackground,
        }}
      >
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Accomplishments />
        <Interests />
        <Footer></Footer>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
