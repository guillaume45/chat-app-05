import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

class Contact extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      name : this.props.name,
      avatar : this.props.avatar,
      onLine : this.props.status
    }
  };

 changeStatus(){
   this.setState({onLine : !this.state.onLine});
 }
  render() {
    return(
    <div className="Contact">
      <img className="avatar" src={this.state.avatar} alt={this.state.name} />
      <div className="status">
        <h3 className="name">{this.state.name}</h3>
        <span
          className={this.state.onLine ? "status-online" : "status-offline"}
        ></span>{" "}
        <h4 className="status-text" onClick={() => this.changeStatus()}>{this.state.onLine ? "online" : "offline"}</h4>
      </div>
    </div>)
  };
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  avatar  : PropTypes.string.isRequired,
};
export default Contact;
