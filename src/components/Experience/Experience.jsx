import "./Experience.css";
import Card from "../Card/Card";

const Experience = () => {
  const experiences = JSON.parse(import.meta.env.VITE_USER_EXPERIENCES);
  return (
    <div id="experience" className="experience text-center">
      <section className="experience__section">
        <h2>My Working Experience</h2>
        {experiences.map((experience) => {
          return (
            <Card key={experience.id} className="frow">
              <div className="experience__icon fw-700">
                <img src="src/assets/work-icon.svg" alt="work icon" />
              </div>
              <div className="experience__wrapper">
                <p className="experience__company fw-700">
                  {experience.company}
                </p>
                <p className="experience__position fw-700">
                  {experience.position}
                </p>
                <p className="experience__year fw-300">
                  {experience.yearStr} | {experience.location}
                </p>
                <p className="experience__description fw-300">
                  {experience.description}
                </p>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default Experience;
