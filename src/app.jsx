import { useState } from "react";


export default function App(){
    const[information, setInformation] = useState({
        firstName: 'big bob',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    function changeFirstName(e){
        setInformation({
            firstName: e.target.value,
            lastName: information.lastName,
            email: information.email,
            phoneNumber: information.phoneNumber
        });
    }

    function changeLastName(e){
        setInformation({
            firstName: information.firstName,
            lastName: e.target.value,
            email: information.email,
            phoneNumber: information.phoneNumber
        })
    }

    function changeEmail(e){
        setInformation({
            firstName: information.firstName,
            lastName: information.lastName,
            email: e.target.value,
            phoneNumber: information.phoneNumber
        })
    }

    function changePhoneNum(e){
        setInformation({
            firstName: information.firstName,
            lastName: information.lastName,
            email: information.email,
            phoneNumber: e.target.value
        })
    }


    return (
        <>
            <h1>CV Application</h1>
            <label>
                {/* Label for the input box */}
                First Name
                {/* When the value of the input box is changed it calls the changefirst name function */}
                <input onChange={changeFirstName} />
            </label>


            <div className = "application">
                {/* Prints the first name that is being changed  */}
                {"first name:" + information.firstName}
            </div>
        </>
    )
}