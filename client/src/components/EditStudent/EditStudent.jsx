import React, { Component } from "react";
import './EditStudent.css';
import axios from "axios";
import { withRouter } from 'react-router'
import { toast, ToastContainer } from "react-toastify";

class EditStudent extends Component {
  state = {
    id: '',
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

  async componentDidMount() {
    try {
      let search = this.props.location.search,
        id = search.substring(1, search.length);
      const updateStudent = await axios(`/api/students/${id}`);
      const { name, rollnumber, ut1marks, ut2marks, ut3marks, assignment1, assignment2,assignment3,tutorial1, tutorial2, tutorial3, attendance} = updateStudent.data.student;
      this.setState({ id, name, rollnumber, ut1marks, ut2marks, ut3marks, assignment1, assignment2,assignment3,tutorial1, tutorial2, tutorial3, attendance});
    } catch (err) {
      this.setState({ response: "Student not found!" })
    }
  };

  updateStudentHandler = async (e) => {
    e.preventDefault();
    try {
      const student = await axios.put(`/api/students/${this.state.id}`, {
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
      });
      toast(student.data.message, { type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Student not found!")
      return <h1>Student not found!</h1>
    return (
      <div className="Edit-Student-Wrapper">
        <h1>Edit page</h1>
        <form onSubmit={this.updateStudentHandler}>


          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the students here"
            value={this.state.name}
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Edit-Student-Input"
            required

            id="name"
          />
          <label htmlFor="rollnumber">Roll_Number:</label>
          <input
            type="number"
            placeholder="Enter the RollNo of the students here"
            value={this.state.rollnumber}
            name="rollnumber"
            onChange={this.onChangeHandler}
            ref="rollnumber"
            className="Edit-Student-Input"
            required

            id="rollnumber"
          />
          <label htmlFor="ut1marks">UnitTest_1 Marks:</label>
          <input
            type="number"
            value={this.state.ut1marks}
            name="ut1marks"
            onChange={this.onChangeHandler}
            ref="ut1marks"
            className="Edit-Student-Input"
            required

            id="ut1marks"
          />
          <label htmlFor="ut2marks">UnitTest_2 Marks:</label>
          <input
            type="number"
            value={this.state.ut2marks}
            name="ut2marks"
            onChange={this.onChangeHandler}
            ref="ut2marks"
            className="Edit-Student-Input"
            required

            id="ut2marks"
          />
          <label htmlFor="ut3marks">UnitTest_3 Marks:</label>
          <input
            type="number"
            value={this.state.ut3marks}
            name="ut3marks"
            onChange={this.onChangeHandler}
            ref="ut3marks"
            className="Edit-Student-Input"
            required

            id="ut3marks"
          />
          <label htmlFor="assignment1">Assignment_1 Marks:</label>
          <input
            type="number"
            value={this.state.assignment1}
            name="assignment1"
            onChange={this.onChangeHandler}
            ref="assignment1"
            className="Edit-Student-Input"
            required

            id="assignment1"
          />
          <label htmlFor="assignment2">Assignment_2 Marks:</label>
          <input
            type="number"
            value={this.state.assignment2}
            name="assignment2"
            onChange={this.onChangeHandler}
            ref="assignment2"
            className="Edit-Student-Input"
            required

            id="assignment2"
          />
          <label htmlFor="assignment3">Assignment_3 Marks:</label>
          <input
            type="number"
            value={this.state.assignment3}
            name="assignment3"
            onChange={this.onChangeHandler}
            ref="assignment3"
            className="Edit-Student-Input"
            required

            id="assignment3"
          />
          <label htmlFor="tutorial1">Tutorial_1 Marks:</label>
          <input
            type="number"
            value={this.state.tutorial1}
            name="tutorial1"
            onChange={this.onChangeHandler}
            ref="tutorial1"
            className="Edit-Student-Input"
            required

            id="tutorial1"
          />
          <label htmlFor="tutorial2">Tutorial_2 Marks:</label>
          <input
            type="number"
            value={this.state.tutorial2}
            name="tutorial2"
            onChange={this.onChangeHandler}
            ref="tutorial2"
            className="Edit-Student-Input"
            required

            id="tutorial2"
          />
          <label htmlFor="tutorial3">Tutorial_3 Marks:</label>
          <input
            type="number"
            value={this.state.tutorial3}
            name="tutorial3"
            onChange={this.onChangeHandler}
            ref="tutorial3"
            className="Edit-Student-Input"
            required

            id="tutorial3"
          />
          <label htmlFor="attendance">Attendance Percentage:</label>
          <input
            type="number"
            value={this.state.attendance}
            name="attendance"
            onChange={this.onChangeHandler}
            ref="attendance"
            className="Edit-Student-Input"
            required

            id="attendance"
          />
          <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditStudent);
