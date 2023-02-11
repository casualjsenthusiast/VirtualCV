import "./AboutMe.css";
import Card from "../Card/Card";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="about-me">
      <section className="bg-cover w-full h-580"></section>
      <section className="about-me__info text-center">
        <Card className="fcol">
          <div className="about-me__info__profile-pic">
            <img alt="profile-pic" src="assets/profilepic.svg" />
          </div>
          <div className="about-me__info__intro">
            Hello,
            <span> I'm </span>
            <span className="special-font">{import.meta.env.VITE_USER_FIRST_NAME}</span>
            <p>{import.meta.env.VITE_USER_DESIGNATION}</p>
          </div>
          <div className="about-me__info__headline">
            <p>
              {import.meta.env.VITE_USER_HEADLINE}
            </p>
          </div>
          <div className="about-me__info__socials">
            <div className="email">
              <span className="socials-icon fa fa-envelope"></span>
              <span className="socials-handle">
                {import.meta.env.VITE_USER_EMAIL}
              </span>
            </div>
            <div className="linkedin">
              <span className="socials-icon fa fa-linkedin-square"></span>
              <a
                href={import.meta.env.VITE_USER_LINKEDIN}
                target="_blank"
                className="socials-link socials-handle"
              >
                LinkedIn
              </a>
            </div>
            <div className="location">
              <span className="socials-icon fa fa-map-marker"></span>
              <span className="socials-handle">{import.meta.env.VITE_USER_LOCATION}</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AboutMe;
