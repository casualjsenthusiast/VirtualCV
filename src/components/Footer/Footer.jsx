import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer frow">
      <p>
        {import.meta.env.VITE_USER_FIRST_NAME +
          " " +
          import.meta.env.VITE_USER_LAST_NAME}
      </p>
      <p>
        <span className="fa fa-envelope">&nbsp;</span>
        <span>{import.meta.env.VITE_USER_EMAIL}</span>
      </p>
    </div>
  );
};

export default Footer;
