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
    getUser();
  }, []);
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
  // constructor(props) {
  //   super(props);
  //   this.state = JSON.parse(localStorage.getItem('cyclopediaState')) || {
  //     instructor: undefined,
  //     studentList: [],
  //     studentCount: 0,
  //     hideInstructor: false,
  //     inputName: '',
  //     inputFeedBack: '',
  //   };
  // }
  // componentDidMount = async () => {
  //   console.log('componentDidMount');

  //   if (JSON.parse(localStorage.getItem('cyclopediaState'))) {
  //   } else {
  //     const response = await getRandomUser();
  //     this.setState((preV) => {
  //       return {
  //         instructor: {
  //           name: response.data.first_name + ' ' + response.data.first_name,
  //           email: response.data.email,
  //           phone: response.data.phone_number,
  //         },
  //       };
  //     });
  //   }

  //   //console.log(response);
  // };
  // componentDidUpdate = async (previousProps, previousState) => {
  //   console.log('componentDidUpdate');
  //   // localStorage.setItem('cyclopediaState', JSON.stringify(this.state));
  //   console.log(previousState.studentCount);
  //   console.log(this.state.studentCount);
  //   if (previousState.studentCount < this.state.studentCount) {
  //     const response = await getRandomUser();
  //     this.setState((prevS) => {
  //       return {
  //         studentList: [
  //           ...prevS.studentList,
  //           {
  //             name: response.data.first_name + ' ' + response.data.last_name,
  //           },
  //         ],
  //       };
  //     });
  //     console.log(this.state.studentList);
  //   } else if (previousState.studentCount > this.state.studentCount) {
  //     console.log(previousState.studentCount + ' - ' + this.state.studentCount);
  //     this.setState((prevS) => {
  //       return {
  //         studentList: prevS.studentList.slice(0, -1),
  //       };
  //       //here
  //     });
  //   }
  // };
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }
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
