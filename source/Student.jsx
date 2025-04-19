import React from 'react';
import './Student.css';
//import meriPic from "./assets/meri_pic.jpg";
//import meriPic from "./assets/meri_pic.png";

//import PropTypes from "prop-types"; 

// Function component
function Student(props) {
  return (
    <div className="Student-Class">
      <img src={props.image} alt={props.name} />
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p> {/* Updated for Role */}
      <p>Responsibility: {props.responsibility}</p> {/* Updated for Responsibility */}
    </div>
  );
}

export default Student;

