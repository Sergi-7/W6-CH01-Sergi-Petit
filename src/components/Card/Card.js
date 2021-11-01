import PropTypes from "prop-types";

const Card = ({ id, title, description, actionOnClick }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{id}</p>
      <p>{description}</p>
      <input type="checkbox" />
      <button onClick={actionOnClick}>Delete</button>
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
