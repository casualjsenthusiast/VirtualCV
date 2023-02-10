import "./Skills.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Skills = () => {
  const skills = JSON.parse(import.meta.env.VITE_USER_SKILLS);
  return (
    <div id="skills" className="professional-skills text-center">
      <section className="professional-skills__section">
        <h2>Professional Skills</h2>
        <div className="professional-skills__wrapper">
          {skills.map((skill) => {
            return (
              <ProgressBar
                key={skill.id}
                skill={skill.name}
                width={skill.fill}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
