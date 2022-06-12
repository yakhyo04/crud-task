import axios from "axios";

const url = 'https://online-excel-heroku.herokuapp.com';

export const SIGNIN = async (data) => {
    try{
        const res = await axios.post(`${url}/auth/token`, {
            username: data.username,
            password: data.password
        });
        return res.data.data
    }catch(err){
        console.log("err: ", err.message)
    }
}

export const SIGNUP = async (data) => {
    try{

    }catch(err){
        console.log("err: ", err.message)
    }
}

export const UPDATE_TOKEN = async (data) => {

};

export const GET_USERS = async () => {
    try{
        const res = await axios.post(`${url}/student/list`);
        return res.data.data
    }catch(err){
        console.log("get-users err: ", err.message)
    }
}

export const DELETE_USER = async (id) => {
    try{
        const res = await axios.delete(`${url}/student/delete/${id}`)
        return res.data.data
    }catch(err){
        console.log("err: ", err.message)
    }
}

export const GET_USER = async (id) => {
    try{
        const res = await axios.get(`${url}/student/get/${id}`);
        return res.data.data.data;
    }catch(err){
        console.log("get-user err: ", err.message)
    }
}

export const GET_ORGANIZATIONS = async () => {
    try{
        const res = await axios.get(`${url}/organization/list/`);
        return res.data.data.data;
    }catch(err){
        console.log("err: ", err.message)
    }
}

export const CREATE_STUDENT = async (data) => {
    try{
        const res = await axios.post(`${url}/student/create`, {
            fullName: data.fullName,
            universityName: data.universityName,
            entranceYear: data.entranceYear,
            graduationYear: data.graduationYear,
            faculty: data.faculty,
            speciality: data.speciality,
            studyType: data.studyType,
            academicType: data.academicLevel,
            diplomaSerial: data.diplomaSerial,
            diplomaRegistrationNumber: data.diplomaRegistrationNumber,
            givenDate: data.givenDate,
            academicLevel: data.academicLevel,
            appendixNumber: data.appendixNumber,
            organizationId: data.organizationId,
        });
        return res.data.data
    }catch(err){
        console.log("err: ", err.message)
    }
}

export const UPDATE_STUDENT = async (id, data) => {
    try{
        const res = await axios.post(`${url}/student/update`, {
            id: id,
            fullName: data.fullName,
            universityName: data.universityName,
            entranceYear: data.entranceYear,
            graduationYear: data.graduationYear,
            faculty: data.faculty,
            speciality: data.speciality,
            studyType: data.studyType,
            academicType: data.academicLevel,
            diplomaSerial: data.diplomaSerial,
            diplomaRegistrationNumber: data.diplomaRegistrationNumber,
            givenDate: data.givenDate,
            academicLevel: data.academicLevel,
            appendixNumber: data.appendixNumber,
            organizationId: data.organizationId,
        });
        return res.data.data
    }catch(err){
        console.log("err: ", err.message)
    }
}