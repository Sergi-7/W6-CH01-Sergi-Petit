import PropTypes from "prop-types";

const Card = ({ title, description }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <input type="checkbox" />
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
