import React, { useId, useRef } from 'react';
import { getRandomUser } from './Util/api';
import Instructor from './Instructor';
import { useState } from 'react';
import { useEffect } from 'react';
import InstructorFunc from './InstructorFunc';

const ClassBaseFunc = () => {
  const [state, setState] = useState(() => ({
    instructor: undefined,
    studentList: [],
    studentCount: 0,
    hideInstructor: false,
  }));
  const [inputName, setInputName] = useState(() => '');
  const [inputFeedback, setInputFeedback] = useState(() => '');
  const totalRender = useRef(0);
  const feedbackInputref = useRef(null);

  const prevStudentCount = useRef(0);
  const id = useId();
  useEffect(() => {
    const getUser = async () => {
      const respone = await getRandomUser();
      setState((preV) => ({
        ...preV,
        studentList: [
          ...preV.studentList,
          {
            name: respone.data.first_name + ' ' + respone.data.last_name,
          },
        ],
      }));
    };
    if (state.studentCount > prevStudentCount.current) {
      getUser();
    }
    if (state.studentCount < prevStudentCount.current) {
      setState((preV) => ({
        ...preV,
        studentList: state.studentList.slice(0, -1),
      }));
    }
  }, [state.studentCount]);

  useEffect(() => {
    console.log(prevStudentCount.current + ' ' + state.studentCount);
    prevStudentCount.current = state.studentCount;
    console.log(prevStudentCount.current + ' ' + state.studentCount);
  }, [state.studentCount]);

  useEffect(() => {
    totalRender.current += 1;
    console.log('total render: ' + totalRender.current);
    feedbackInputref.current.focus();
  });
  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((preV) => {
        return {
          ...preV,
          instructor: {
            name: response.data.first_name + ' ' + response.data.first_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);
  useEffect(() => {}, [inputFeedback]);
  useEffect(() => {
    return () => {};
  }, []);

  const handleAddStudent = () => {
    setState((preV) => {
      return { ...preV, studentCount: preV.studentCount + 1 };
    });
  };

  const handleRemoveAll = () => {
    setState((prevS) => {
      return { ...prevS, studentCount: prevS.studentCount - 1 };
    });
  };

  const handleToggleInstructor = () => {
    setState((preV) => {
      return {
        ...preV,
        hideInstructor: !preV.hideInstructor,
      };
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="rol-3">
          <i
            onClick={handleToggleInstructor}
            className={` bi ${
              state.hideInstructor ? 'bi-toggle-off ' : 'bi-toggle-on '
            } btn btn-success btn-sml`}
          ></i>
        </div>
        {!state.hideInstructor
          ? state.instructor && (
              <InstructorFunc
                instructor={state.instructor}
                handleToggleInstructor={handleToggleInstructor}
              ></InstructorFunc>
            )
          : null}
        <div className="p-3">{totalRender.current}</div>
        <div>
          <label className="h4 text-success" htmlFor={`${id}`}>
            FeedBack
          </label>
          <br />
          <input
            id={id}
            type="text"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          Value: {inputName}
          <br />
          <textarea
            name=""
            id=""
            value={inputFeedback}
            onChange={(e) => setInputFeedback(e.target.value)}
            ref={feedbackInputref}
          ></textarea>
          Value: {inputFeedback}
        </div>
        <div className="col-12">
          <span className="h4 text-success">Student</span>
          <div>Student Count: {state.studentCount}</div>
          <button onClick={handleAddStudent} className="btn btn-info btn-sm">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add Student
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button onClick={handleRemoveAll} className="btn btn-danger btn-sm">
            Remove All Student{' '}
          </button>
          {state.studentList &&
            state.studentList.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClassBaseFunc;
