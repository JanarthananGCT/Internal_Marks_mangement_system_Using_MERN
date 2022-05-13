import React, { Component } from "react";
import './AddStudent.css';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Form, Col, Row } from "react-bootstrap";
class AddStudent extends Component {
  state = {
    name: "",
    rollnumber: "",
    ut1marks: "",
    ut2marks: "",
    ut3marks: "",
    assignment1: "",
    assignment2: "",
    assignment3: "",
    tutorial1: "",
    tutorial2: "",
    tutorial3: "",
    attendance: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newStudent = await axios.post("/api/students/", {
        name: this.refs.name.value,
        rollnumber: this.refs.rollnumber.value,
        ut1marks: this.refs.ut1marks.value,
        ut2marks: this.refs.ut2marks.value,
        ut3marks: this.refs.ut3marks.value,
        assignment1: this.refs.assignment1.value,
        assignment2: this.refs.assignment2.value,
        assignment3: this.refs.assignment3.value,
        tutorial1: this.refs.tutorial1.value,
        tutorial2: this.refs.tutorial2.value,
        tutorial3: this.refs.tutorial3.value,
        attendance: this.refs.attendance.value

      }
      );

      toast("Student " + newStudent.data.newStudent.name + " created successfully", { type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddStudent-Wrapper">
        <Container><br /><h3>Add Internal Marks..,</h3><br /></Container>
        <form onSubmit={this.addStudent}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the students here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="rollnumber">Roll_Number:</label>
          <input
            type="number"
            placeholder="Enter the RollNo of the students here"
            name="rollnumber"
            onChange={this.onChangeHandler}
            ref="rollnumber"
            className="Add-Student-Input"
            required

            id="rollnumber"
          />
          <label htmlFor="ut1marks">UnitTest_1 Marks:</label>
          <input
            type="number"

            name="ut1marks"
            onChange={this.onChangeHandler}
            ref="ut1marks"
            className="Add-Student-Input"
            required

            id="ut1marks"
          />
          <label htmlFor="ut2marks">UnitTest_2 Marks:</label>
          <input
            type="number"

            name="ut2marks"
            onChange={this.onChangeHandler}
            ref="ut2marks"
            className="Add-Student-Input"
            required

            id="ut2marks"
          />
          <label htmlFor="ut3marks">UnitTest_3 Marks:</label>
          <input
            type="number"

            name="ut3marks"
            onChange={this.onChangeHandler}
            ref="ut3marks"
            className="Add-Student-Input"
            required

            id="ut3marks"
          />
          <label htmlFor="assignment1">Assignment_1 Marks:</label>
          <input
            type="number"

            name="assignment1"
            onChange={this.onChangeHandler}
            ref="assignment1"
            className="Add-Student-Input"
            required

            id="assignment1"
          />
          <label htmlFor="assignment2">Assignment_2 Marks:</label>
          <input
            type="number"

            name="assignment2"
            onChange={this.onChangeHandler}
            ref="assignment2"
            className="Add-Student-Input"
            required

            id="assignment2"
          />
          <label htmlFor="assignment3">Assignment_3 Marks:</label>
          <input
            type="number"

            name="assignment3"
            onChange={this.onChangeHandler}
            ref="assignment3"
            className="Add-Student-Input"
            required

            id="assignment3"
          />
          <label htmlFor="tutorial1">Tutorial_1 Marks:</label>
          <input
            type="number"

            name="tutorial1"
            onChange={this.onChangeHandler}
            ref="tutorial1"
            className="Add-Student-Input"
            required

            id="tutorial1"
          />
          <label htmlFor="tutorial2">Tutorial_2 Marks:</label>
          <input
            type="number"

            name="tutorial2"
            onChange={this.onChangeHandler}
            ref="tutorial2"
            className="Add-Student-Input"
            required

            id="tutorial2"
          />
          <label htmlFor="tutorial3">Tutorial_3 Marks:</label>
          <input
            type="number"

            name="tutorial3"
            onChange={this.onChangeHandler}
            ref="tutorial3"
            className="Add-Student-Input"
            required

            id="tutorial3"
          />
          <label htmlFor="attendance">Attendance Percentage:</label>
          <input
            type="number"

            name="attendance"
            onChange={this.onChangeHandler}
            ref="attendance"
            className="Add-Student-Input"
            required

            id="attendance"
          />

          <button type="submit" className="Add-Student-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Student-Reset fa fa-refresh"></button>
        </form>


        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
/* 


        */