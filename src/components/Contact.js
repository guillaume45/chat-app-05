import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt={props.character} />
      <div className="status">
        <h3 className="name">{props.name}</h3>
        <span
          className={props.status ? "status-online" : "status-offline"}
        ></span>{" "}
        <h4 className="status-text">{props.status ? "online" : "offline"}</h4>
      </div>
    </div>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};
export default Contact;
