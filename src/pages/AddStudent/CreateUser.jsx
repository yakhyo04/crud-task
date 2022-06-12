// import React, { useState } from 'react';
import StudentForm from './StudentForm';
import "./CreateUser.module.scss";

const CreateUser = () => {
    // const [fullName, setfullName] = useState("");
    // const [universityName, setuniversityName] = useState("");
    // const [entranceYear, setentranceYear] = useState("");
    // const [graduationYear, setgraduationYear] = useState("");
    // const [faculty, setfaculty] = useState("");
    // const [speciality, setspeciality] = useState("");
    // const [studyType, setstudyType] = useState("");
    // const [academicType, setacademicType] = useState("");
    // const [diplomaSerial, setdiplomaSerial] = useState("");
    // const [diplomaRegistrationNumber, setdiplomaRegistrationNumber] = useState("");
    // const [givenDate, setgivenDate] = useState("");
    // const [academicLevel, setacademicLevel] = useState("");
    // const [appendixNumber, setappendixNumber] = useState("");
    // const [organizationId, setorganizationId] = useState("");

    // async function addUser(){
    //     let item = {fullName, universityName, entranceYear, graduationYear, faculty, speciality, studyType, academicType, diplomaSerial, diplomaRegistrationNumber, givenDate, academicLevel, appendixNumber, organizationId}
    //     console.warn(item);

    //     let result = await fetch("https://online-excel-heroku.herokuapp.com/student/create", {
    //         method: 'POST',
    //         body: JSON.stringify(item),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })
    // }


    return (
        <div className='createUser'>
            <div className="container">
                {/* <input type="text" name='fullName' value={fullName} onChange={(e) => setfullName(e.target.value)} placeholder='fullName' required />
                <input type="text" name='universityName' value={universityName}
                onChange={(e) => setuniversityName(e.target.value)} placeholder='universityName' required />
                <input type="text" name='entranceYear' value={entranceYear} onChange={(e) => setentranceYear(e.target.value)} placeholder='entranceYear' required />
                <input type="text" name='graduationYear' value={graduationYear} onChange={(e) => setgraduationYear(e.target.value)} placeholder='graduationYear' required />
                <input type="text" name='faculty' value={faculty} onChange={(e) => setfaculty(e.target.value)} placeholder='faculty' required />
                <input type="text" name='speciality' value={speciality} onChange={(e) => setspeciality(e.target.value)} placeholder='speciality' required />
                <input type="text" name='studyType' value={studyType} onChange={(e)=>setstudyType(e.target.value)} placeholder='studyType' required />
                <input type="text" name='academicType' value={academicType} onChange={(e) => setacademicType(e.target.value)} placeholder='academicType' required />
                <input type="text" name='diplomaSerial' value={diplomaSerial} onChange={(e) => setdiplomaSerial(e.target.value)} placeholder='diplomaSerial' required />
                <input type="text" name='diplomaRegistrationNumber' value={diplomaRegistrationNumber} onChange={(e) => setdiplomaRegistrationNumber(e.target.value)} placeholder='diplomaRegistrationNumber' required />
                <input type="text" name='givenDate' value={givenDate} onChange={(e) => setgivenDate(e.target.value)} placeholder='givenDate' required />
                <input type="text" name='academicLevel' value={academicLevel} onChange={(e) => setacademicLevel(e.target.value)} placeholder='academicLevel' required />
                <input type="text" name='appendixNumber' value={appendixNumber}
                onChange={(e) => setappendixNumber(e.target.value)} placeholder='appendixNumber' required />
                <input type="number" name='organizationId' value={organizationId} onChange={(e) => setorganizationId(e.target.value)} placeholder='organizationId' required />
                <button onClick={addUser}>Submit</button> */}

                <StudentForm/>
            </div>
        </div>
    );
}

export default CreateUser;
