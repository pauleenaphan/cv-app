import { useState } from "react";


export default function App(){
    const[personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    function changeName(e){
        setPersonalInfo({
            name: e.target.value,
            email: personalInfo.email,
            phoneNumber: personalInfo.phoneNumber
        });
    }

    function changeEmail(e){
        setPersonalInfo({
            name: personalInfo.name,
            email: e.target.value,
            phoneNumber: personalInfo.phoneNumber
        });
    }

    function changePhoneNum(e){
        setPersonalInfo({
            name: personalInfo.name,
            email: personalInfo.email,
            phoneNumber: e.target.value
        });
    }

    const[edInfo, setEdInfo] = useState({
        institutionName: ''
    });

    function displayEd(e){
        setEdInfo({
            institutionName: document.getElementById("institutionName").value
        });
    }

    return (
        <>
            <h1>CV Application</h1>
            
            {/* Personal Information */}
            <div className = "personal_info">
                <li>   
                    <label>Name</label>
                    <input type = "text" id = "name" onChange = {changeName}></input>
                </li>
                <li>
                    <label>Email</label>
                    <input type = "text" id = "email" onChange = {changeEmail}></input>
                </li>
                <li>
                    <label>Number</label>
                    <input type = "text" id = "phoneNumber" onChange = {changePhoneNum}></input>
                </li>
            </div>
            

            {/* Educational information */}
            <form name="educationInfo" onSubmit={displayEd}>
                <li>
                    <label>Institution</label>
                    <input type = "text" id = "institutionName"></input>
                </li>
                <li>
                    <input type = "submit" value = "submit"></input>
                </li>
            </form>
            
            <div className = "application">
                <div className = "personalInfo">
                    {/* Prints the first name that is being changed  */}
                    {"First name:" + personalInfo.name}
                    {"Email " + personalInfo.email}
                    {"Phone number " + personalInfo.phoneNumber}
                </div>
                <div className = "educationInfo">
                    {"Institution:" + edInfo.institutionName}
                </div>
            </div>
        </>
    )
}