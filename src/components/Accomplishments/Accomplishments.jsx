import "./Accomplishments.css";

const Accomplishments = () => {
  const accomplishments = JSON.parse(import.meta.env.VITE_USER_ACCOMPLISHMENTS);
  return (
    <div id="accomplishments" className="accomplishments text-center">
      <section className="accomplishments__section">
        <h2>Accomplishments</h2>
        {accomplishments.map((acc, idx) => {
          return (
            <div key={`acc-${idx}`} className="accomplishments__flex">
              <div className="accomplishments__icon fa fa-check-circle-o"></div>
              <div className="accomplishments__para"><p>{ acc }</p></div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Accomplishments;
