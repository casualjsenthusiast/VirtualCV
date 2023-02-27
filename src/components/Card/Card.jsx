import "./Card.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const Card = (props) => {
  const themeContext = useContext(ThemeContext);

  const classes = "card " + (props.className || "");
  return (
    <div
      className={classes}
      style={{ backgroundColor: themeContext.theme.theme.background }}
    >
      {props.children}
    </div>
  );
};

export default Card;
