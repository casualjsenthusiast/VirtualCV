import { useContext } from "react";
import { ThemeContext } from "../../App";

import "./Education.css";
import Card from "../Card/Card";

const Education = () => {
  const themeContext = useContext(ThemeContext);
  const educations = JSON.parse(import.meta.env.VITE_USER_EDUCATIONS);

  return (
    <div
      id="education"
      className="education text-center"
      style={{ backgroundColor: themeContext.theme.theme.education }}
    >
      <section className="education__section">
        <h2>Education and Certifications</h2>
        {educations.map((ed) => {
          return (
            <Card key={ed.id} className="frow">
              <div className="education__icon fw-700">
                <img
                  src="assets/education.svg"
                  alt="education and certification icon"
                />
              </div>
              <div className="education__wrapper">
                <p className="education__uni fw-700">{ed.uni}</p>
                <p className="education__degree fw-700">{ed.degree}</p>
                <p className="education__year fw-300">{ed.year}</p>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default Education;
