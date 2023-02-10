import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const links = [
    {
      id: "ercc4",
      sectionId: "aboutMe",
      sectionName: "About Me",
    },
    {
      id: "epOj4",
      sectionId: "experience",
      sectionName: "Experience",
    },
    {
      id: "ePPl3",
      sectionId: "education",
      sectionName: "Education & Certifications",
    },
    {
      id: "Iocc4",
      sectionId: "skills",
      sectionName: "Professional Skills",
    },
    {
      id: "uInh5",
      sectionId: "accomplishments",
      sectionName: "Accomplishments",
    },
    {
      id: "uKNh5",
      sectionId: "interests",
      sectionName: "Interests",
    },
  ];

  const navLinkClickedHandler = (event) => {
    const style = getComputedStyle(document.body);
    const activeLinkId = event.target.id;
    const navbarLinks = document.querySelectorAll(".navbar__links");
    for (let link of navbarLinks) {
      if (link.id !== activeLinkId) {
        link.style.color = style.getPropertyValue("--bg-white-text");
      }
    }
    event.target.style.color = style.getPropertyValue("--bg-white-icons-color");
  };

  const menuClickHandler = () => {
    setHamburgerClicked((prevValue) => {
      if (prevValue) {
        document.querySelector(".navbar__links_flex").style.cssText =
          "display: none !important";
      } else {
        document.querySelector(".navbar__links_flex").style.cssText =
          "display: flex !important";
      }
      return !prevValue;
    });
  };

  return (
    <div className="navbar frow w-100">
      <div className="hamburger-div">
        <div>
          <p className="navbar__candidate-name fw-700">
            {import.meta.env.VITE_USER_FIRST_NAME +
              " " +
              import.meta.env.VITE_USER_LAST_NAME}
          </p>
        </div>
        <div className="hamburger">
          <button onClick={menuClickHandler}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.025 1.81h17.95c.978 0 1.725.718 1.725 1.542 0 .823-.746 1.54-1.725 1.54H2.025C1.046 4.893.3 4.176.3 3.353c0-.824.746-1.541 1.725-1.541zM2.025 8.459h17.95c.978 0 1.725.717 1.725 1.542 0 .823-.746 1.54-1.725 1.54H2.025c-.979 0-1.725-.717-1.725-1.54 0-.825.746-1.542 1.725-1.542zM2.025 15.107h17.95c.978 0 1.725.718 1.725 1.542 0 .823-.746 1.54-1.725 1.54H2.025C1.046 18.19.3 17.473.3 16.65c0-.824.747-1.542 1.725-1.542z"
                fill="#090B17"
                stroke="#fff"
                stroke-width=".6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="frow navbar__links_flex">
        {links.map((link) => {
          return (
            <a
              className="navbar__links"
              id={`navbar__link_${link.sectionId}`}
              key={link.id}
              href={`#${link.sectionId}`}
              onClick={navLinkClickedHandler}
            >
              {link.sectionName}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
