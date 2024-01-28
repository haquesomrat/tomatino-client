import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./PrimaryButton.css";
import PropTypes from "prop-types";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <AwesomeButton type="primary" className="w-full">
        {children}
      </AwesomeButton>
    </div>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node,
};
