import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";

class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchStudents = async username => {
    let allStudents = [...this.state.data.students];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students = this.state.data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) this.setState({ data: { students } });

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });
  };

  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.students.length)
        return (<Container><br /><h3 className="No-Students">No students!</h3></Container>);

    return (

      <div>
        <br />
        <SearchStudents searchStudents={this.searchStudents} />
        <br />

        <div >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll_No</th>
                <th>UnitTest_1</th>
                <th>UnitTest_2</th>
                <th>UnitTest_3</th>
                <th>Assignment_1</th>
                <th>Assignment_2</th>
                <th>Assignment_3</th>
                <th>Tutorial_1</th>
                <th>Tutorial_2</th>
                <th>Tutorial_3</th>
                <th>Attendance</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{students}</tbody>
          </Table>
        </div>


      </div>

    );
  }
}

export default Home;
