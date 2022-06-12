import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_USER } from '../../services/Services';

const StudentProfile = () => {
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
            setUser(res);
        }catch(err){
            console.log("err: ", err.message)
        }
    }

    return (
        <div className='container'>
            {user && (
                <div>
                    <h1>About {user.fullName}</h1>
                 <p><b>FullName: </b>{user.fullName}</p>
                 <p><b>University Name: </b>{user.universityName}</p>
                 <p><b>Entrance Year: </b>{user.entranceYear}</p>
                 <p><b>GraduationYear: </b>{user.graduationYear}</p>
                 <p><b>Faculty: </b>{user.faculty}</p>
                 <p><b>Speciality: </b>{user.speciality}</p>
                 <p><b>Study Type: </b>{user.studyType}</p>
                 <p><b>Academic Type: </b>{user.academicType}</p>
                 <p><b>Diploma Serial: </b>{user.diplomaSerial}</p>
                 <p><b>Diploma Registration Number: </b>{user.diplomaRegistrationNumber}</p>
                 <p><b>Given Date: </b>{user.givenDate}</p>
                 <p><b>Academic Level: </b>{user.academicLevel}</p>
                 <p><b>Appendix Number: </b>{user.appendixNumber}</p>
                 <p><b>Organization Id: </b>{user.organizationId}</p>
                </div>
            )}
        </div>
    );
}

export default StudentProfile;
