import React from 'react';
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
    if (state.studentCount > state.studentList.length) {
      getUser();
    }
    if (state.studentCount < state.studentList.length) {
      setState((preV) => ({
        ...preV,
        studentList: state.studentList.slice(0, -1),
      }));
    }
  }, [state.studentCount]);
  useEffect(() => {
    console.log('This will be call every render');
  });
  useEffect(() => {
    console.log('This will be call only the first time');
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
    if (state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);
  useEffect(() => {
    console.log(
      'This will be call whenever the value of the state inside the array change'
    );
  }, [inputFeedback]);
  useEffect(() => {
    console.log('this will be call first time-2');
    return () => {
      console.log('this will be call when component unmount');
    };
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

  console.log('render--------------');
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

        <div>
          <span className="h4 text-success ">FeedBack</span>
          <br />
          <input
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
