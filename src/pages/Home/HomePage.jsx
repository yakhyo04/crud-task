import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DELETE_USER, GET_USERS } from '../../services/Services';

const HomePage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try{
            const res = await GET_USERS();
            setStudents(res)
        }catch(err){
            console.log("err: ", err.message)
        }
    }

    const deleteUser = async (id) => {
        try{
            const res = await DELETE_USER(id);
            getUsers();
        }catch(err){
            console.log("err: ", err.message)
        }
    }

    return (
        <div className="container">
          <h1 style={{"textAlign": "center"}}>Student List</h1>
            <ul style={{listStyleType: "none"}}>
           {students.data?.map((item, index) => (
            <li key={index}>
                {' '}
                <div style={{"display": "flex", justifyContent: "space-between", height: "40px", alignItems: "center"}} key={index}>
                <span><b>Id:</b> {item.id} </span>
                {/* <span style={{"width": "300px"}}>  {item.fullName}</span> */}
                <Link to={`/student/profile/${item.id}`} style={{"color": "black", "width": "300px"}} ><b>FullName: </b>{item.fullName}</Link>
                <Link to={`/students/${item.id}`} >Edit</Link>
                <button onClick={() => deleteUser(item.id)} style={{"border": "1px solid red", "backgroundColor": "red", "borderRadius": "10px", "color": "white", cursor: "pointer"}}>Delete</button>
                </div>
            </li>
           ))}
        </ul>
        </div>
    );
}

export default HomePage;
