import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Student = ({ _id, name, rollnumber, ut1marks, ut2marks, ut3marks, assignment1, assignment2,assignment3,tutorial1, tutorial2, tutorial3, attendance, removeStudent }) => {
  var total = (((ut1marks/5)+(ut2marks/5)+(ut3marks/5))+((assignment1+assignment2+assignment3)/3)+((tutorial1+tutorial2+tutorial3)/5)+(attendance/20));
  return(
    <tr>
      <td>{ name }</td>
      <td className='roll'>{ rollnumber }</td>
      <td>{ ut1marks }</td>
      <td>{ ut2marks }</td>
      <td>{ ut3marks }</td>
      <td>{ assignment1 }</td>
      <td>{ assignment2 }</td>
      <td>{ assignment3 }</td>
      <td>{ tutorial1 }</td>
      <td>{ tutorial2 }</td>
      <td>{ tutorial3 }</td>
      <td>{ attendance }</td>
      <td>{ total }</td>
      <td>
        <button onClick={ () => removeStudent(_id) } className="Action-Button fa fa-trash"></button>
        <Link to={{ pathname: '/edit', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>
      </td>

    </tr>
  );
};

export default Student;
