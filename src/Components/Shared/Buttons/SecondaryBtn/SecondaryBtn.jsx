import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./SecondaryBtn.css";
import PropTypes from "prop-types";

const SecondaryBtn = ({ children }) => {
  return (
    <div className="text-base">
      <AwesomeButton type="secondary">{children}</AwesomeButton>
    </div>
  );
};

export default SecondaryBtn;

SecondaryBtn.propTypes = {
  children: PropTypes.node,
};
