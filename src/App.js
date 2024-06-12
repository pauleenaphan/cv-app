import './App.css';

import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import githubIconn from "./githubicon.png";

function App() {
  const [dropDownOne, setDropDownOne] = useState("false");
  const [dropDownTwo, setDropDownTwo] = useState("false");
  const [dropDownThree, setDropDownThree] = useState("false");
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  })

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    major: "",
    started: "",
    ended: "",
  })

  const [workExp, setWorkExp] = useState([{
    companyName: "",
    position: "",
    started: "",
    ended: "",
    description: "",
  }])

  const updatePersonalInfo = (field, value) =>{
    setPersonalInfo(prevData => ({
      ...prevData,
      [field]: value
    }))
  }

  const updateEducationInfo = (field, value) =>{
    setEducationInfo(prevData => ({
      ...prevData,
      [field]: value
    }))
  }

  const updateWorkExperience = (index, field, value) => {
    setWorkExp(prevExperiences => prevExperiences.map((experience, i) => {
      if (i === index) {
        return {
          ...experience,
          [field]: value
        };
      }
      return experience;
    }));
  };

  const handleInputChange = (index, field, e) => {
    updateWorkExperience(index, field, e.target.value);
  };

  const addWorkExperience = () => {
    setWorkExp([...workExp, {
      companyName: "",
      position: "",
      started: "",
      ended: "",
      description: "",
    }]);
  };


  return (
    <section className="pageContainer">
      <section className="userInfoContainer">
        <p id="projectTitle"> Resume Builder </p>
        <section className="generalInfo">
          <h1 onClick={() =>{setDropDownOne(!dropDownOne)}}> General Information </h1>
          <CSSTransition
            in={dropDownOne}
            timeout={100}
            classNames="slide"
            unmountOnExit
          >
            <form>
            <p> Full Name </p>
            <input type="text" placeholder="Apple Johnseed" value={personalInfo.name} onChange={(e) => updatePersonalInfo("name", e.target.value)}/>
            <p> Email </p>
            <input type="text" placeholder="Apple123@gmail.com" value={personalInfo.email} onChange={(e) => updatePersonalInfo("email", e.target.value)}/>
            <p> City </p>
            <input type="text" placeholder="Fullerton" value={personalInfo.city} onChange={(e) => updatePersonalInfo("city", e.target.value)}/>
            <p> Phone Number </p>
            <input type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={personalInfo.phone} onChange={(e) => updatePersonalInfo("phone", e.target.value)}/>
          </form>
          </CSSTransition>
        </section>
        <section className="educationInfo">
          <h1 onClick={() =>{setDropDownTwo(!dropDownTwo)}}> Education Information </h1>
          <CSSTransition
            in={dropDownTwo}
            timeout={100}
            classNames="slide"
            unmountOnExit
          >
          <form>
            <p> Institution Name </p>
            <input type="text" placeholder="California State University of Fullerton" value={educationInfo.schoolName} onChange={(e) => updateEducationInfo("schoolName", e.target.value)}/>
            <p> Major of Study </p>
            <input type="text" placeholder="Computer Science" value={educationInfo.major} onChange={(e) => updateEducationInfo("major", e.target.value)}/>
            <div className="dateContainer">
              <div className="dateHeader">
                <p> Start Date </p>
                <input type="text" placeholder="08-20-2020" value={educationInfo.started} onChange={(e) => updateEducationInfo("started", e.target.value)}/>
              </div>
              <div className="dateHeader">
                <p> End/Expected Date </p>
                <input type="text" placeholder="05-15-2024" value={educationInfo.ended} onChange={(e) => updateEducationInfo("ended", e.target.value)}/>
              </div>
            </div>
          </form>
          </CSSTransition>
        </section>
        <section className="workExpInfo">
          <h1 onClick={() =>{setDropDownThree(!dropDownThree)}}> Work Experience </h1>
          {workExp.map((experience, index) => (
            <CSSTransition
                in={dropDownThree}
                timeout={100}
                classNames="slide"
                unmountOnExit
              >
            <div key={index}>
              <h2>Experience {index + 1}</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <p> Company Name </p>
                <input type="text" placeholder="Apple" value={experience.companyName} onChange={(e) => handleInputChange(index, 'companyName', e)}/>
                <p> Position </p>
                <input type="text" placeholder="Cashier" value={experience.position} onChange={(e) => handleInputChange(index, 'position', e)}/>
                <div className="dateContainer">
                  <div className="dateHeader">
                    <p> Start Date </p>
                    <input type="text" placeholder="09-22-2015" value={experience.started} onChange={(e) => handleInputChange(index, 'started', e)}/>
                  </div>
                  <div className="dateHeader">
                    <p> End Date </p>
                    <input type="text" placeholder="09-23-2020" value={experience.ended} onChange={(e) => handleInputChange(index, 'ended', e)}/>
                  </div>
                </div>
                <p> Description </p>
                <textarea placeholder="I learned valuable lessons here..." value={experience.description} onChange={(e) => handleInputChange(index, 'description', e)}></textarea>
                <button onClick={addWorkExperience}> + Add another work experience </button>
              </form>
            </div>
            </CSSTransition>
          ))}  
        </section>
        <a href="https://github.com">
          <img src={githubIconn} alt="GitHub Icon" className="githubIcon"/>
        </a>
      </section>
      <section className="resumeOutputContainer">
          <div className="headerContainer">
            <h1> {personalInfo.name} </h1>
            <div className="subHeader">
              <p> {personalInfo.phone} | </p>
              <p> {personalInfo.email} | </p>
              <p> {personalInfo.city} </p>
            </div>
          </div>

          <div className="educationContainer">
            <h1 className="heading"> EDUCATION </h1>
            <div className="nameDateContainer">
              <h1> {educationInfo.schoolName} </h1>
              <div className="startEndDateContainer">
                <p> {educationInfo.started} - {educationInfo.ended} </p>
              </div>
            </div>
            <p> {educationInfo.major} </p>
          </div>

          <div className="workExpContainer">
          <h1 className="heading"> WORK EXPERIENCE </h1>
          {workExp.map((exp, index) =>(
            <div key={index}>
              <div className="nameDateContainer">
                <h1> {exp.companyName} </h1>
                <div className="startEndDateContainer">
                  <p> {exp.started} - {exp.ended} </p>
                </div>
              </div>
              <p> {exp.position} </p>
              <p className="workDesc"> {exp.description} </p>
            </div>
          ))}
          </div>
      </section>
    </section>
  )
}
export default App;
