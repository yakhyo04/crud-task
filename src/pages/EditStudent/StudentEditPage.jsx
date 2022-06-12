import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditStudent from './EditStudent';
import { GET_USER } from '../../services/Services';
import StudentForm from '../AddStudent/StudentForm';

const StudentEditPage = () => {
    const [user, setUser] = useState(null);
    const params = useParams();

    useEffect(() => {
        if(params && params.id){
            getUser(params.id)
        }
    }, [])


    const getUser = async (id) => {
        try{
            const res = await GET_USER(id);
            setUser(res)
        }catch(err){
            console.log("err: ", err.message)
        }
    }

    // fullName: data.fullName,
    // universityName: data.universityName,
    // entranceYear: data.entranceYear,
    // graduationYear: data.graduationYear,
    // faculty: data.faculty,
    // speciality: data.speciality,
    // studyType: data.studyType,
    // academicType: data.academicLevel,
    // diplomaSerial: data.diplomaSerial,
    // diplomaRegistrationNumber: data.diplomaRegistrationNumber,
    // givenDate: data.givenDate,
    // academicLevel: data.academicLevel,
    // appendixNumber: data.appendixNumber,
    // organizationId: data.organizationId,

    return (
        <>
         {user && (
            <div style={{"textAlign": "center"}}>
                {/* <h2><b>FullName: </b>{user.fullName}</h2>
                <h3><b>universityName: </b>{user.universityName}</h3>
                <p><b>entranceYear: </b>{user.entranceYear}</p>
                <p><b>graduationYear: </b>{user.graduationYear}</p>
                <p><b>faculty: </b>{user.faculty}</p>
                <p><b>speciality: </b>{user.speciality}</p>
                <p><b>studyType: </b>{user.studyType}</p>
                <p><b>academicType: </b>{user.academicType}</p>
                <p><b>diplomaSerial: </b>{user.diplomaSerial}</p>
                <p><b>diplomaRegistrationNumber: </b>{user.diplomaRegistrationNumber}</p>
                <p><b>givenDate: </b>{user.givenDate}</p>
                <p><b>academicLevel: </b>{user.academicLevel}</p>
                <p><b>appendixNumber: </b>{user.appendixNumber}</p>
                <p><b>organizationId: </b>{user.organizationId}</p> */}
			    <h1 style={{"color": "rgb(0, 225, 255)", padding: "50px 0 0 0", "textAlign": "center"}}>Edit User</h1>
                <EditStudent userValue={user}/>
            </div>
         )}   
        </>
    );
}

export default StudentEditPage;
