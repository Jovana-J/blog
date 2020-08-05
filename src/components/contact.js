import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  myClickHandler = () => {
    this.props.data.contacts.push(this.state);
  };

  render() {
    return (
      <div className="Section">
        <div className="Contact" id="Contact">
          <div className="labelContact">{this.props.data.label}</div>
          <input
            type="text"
            className="nameContact"
            placeholder="Name"
            onChange={this.myChangeHandler}
            name="name"
          ></input>
          <input
            type="email"
            className="emailContact"
            placeholder="Email"
            name="email"
            onChange={this.myChangeHandler}
          ></input>
          <textarea
            placeholder="Message"
            className="Message"
            name="message"
            onChange={this.myChangeHandler}
          ></textarea>
          <input
            type="submit"
            className="submitContact"
            value="Send"
            onClick={this.myClickHandler}
          ></input>
        </div>
      </div>
    );
  }
}
export default Contact;
