import PropTypes from "prop-types";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

classNames.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default classNames;
