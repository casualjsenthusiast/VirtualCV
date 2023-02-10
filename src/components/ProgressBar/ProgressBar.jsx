import "./ProgressBar.css";

const ProgressBar = (props) => {
  const outerProgressBarClasses = `progress-bar__outer ${props.outer || ""}`;
  const innerProgressBarClasses = `progress-bar__inner ${props.inner || ""}`;

  return (
    <div>
      <p className="fw-700">{props.skill}</p>
      <div className={outerProgressBarClasses}>
        <div className={innerProgressBarClasses} style={{ 'width': `${props.width}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
