import "./Interests.css";
import Card from "../Card/Card";

const Interests = () => {
  const interests = JSON.parse(import.meta.env.VITE_USER_INTERESTS);
  return (
    <div id="interests" className="interests text-center">
      <section className="interests__section">
        <h2>Interests</h2>
        <div className="interests__flex_div frow">
          {interests.map((interest) => {
            return (
              <Card key={interest.id} className="frow interest__card">
                <div className={interest.icon}></div>
                <div>
                  <p>{interest.text}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Interests;
