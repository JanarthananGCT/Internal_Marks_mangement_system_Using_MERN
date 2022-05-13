import React, { Component } from "react";
import "./SearchStudents.css";
import { Form } from "react-bootstrap";
class SearchStudents extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchStudents(this.state.value);
    });
  }

  render() {
    return (
      <Form.Control type="text" placeholder="Filter by name..." name="name" onChange={ this.onChangeHandler } className="Search-Student-Input" id="inpt"/>
      
    );
  }
}

export default SearchStudents;
