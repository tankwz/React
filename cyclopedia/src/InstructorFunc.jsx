import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
      console.log('instructor  will unmount');
    };
  }, []);

  console.log('render Instructor Func');

  return (
    <div className="col-12">
      <h5 className="text-info">Instructor</h5>
      <p>Name: {props.instructor.name}</p>
      <p>Email: {props.instructor.email}</p>
      <p>Phone: {props.instructor.phone}</p>
    </div>
  );
};

export default InstructorFunc;
