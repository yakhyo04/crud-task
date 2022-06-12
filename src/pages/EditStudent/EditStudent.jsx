import React, {useState} from 'react';
import classes from "./EditStudent.module.scss";
import { useNavigate, useParams } from 'react-router-dom';
import { GET_USERS, UPDATE_STUDENT } from '../../services/Services';

const EditStudent = ({userValue}) => {

    const [students, setStudents] = useState();
    const navigate = useNavigate();

    const [studentValue, setStudentValue] = useState(
		userValue
	);
    
    

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStudentValue({
			...studentValue,
			[name]: value,
		});
	};

    const getUsers = async () => {
        try{
            const res = await GET_USERS();
            setStudents(res)
            setStudentValue(res)
        }catch(err){
            console.log("err: ", err.message)
        }
    }

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await UPDATE_STUDENT(studentValue.id ,studentValue);
            getUsers();
            navigate("/");
            alert(`You have updated the student with id: ${studentValue.id} `)
		} catch (err) {
			console.log('submit err: ', err.message);
		}

		console.log('student: ', studentValue);
	};




    return (
        <div className='container'>
			<form className={classes.wrapper} onSubmit={handleSubmit}>
				<label className={classes.wrapper__label}>Full Name: </label>
				<input
					type='text'
					name='fullName'
					value={studentValue.fullName}
					onChange={handleChange}
					required
					placeholder='Full Name'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>University Name: </label>
				<input
					type='text'
					name='universityName'
					value={studentValue.universityName}
					onChange={handleChange}
					required
					placeholder='University Name'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Entrance Year: </label>
				<input
					type='text'
					name='entranceYear'
					value={studentValue.entranceYear}
					onChange={handleChange}
					required
					placeholder='Entrance Year'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Graduation Year: </label>
				<input
					type='text'
					name='graduationYear'
					value={studentValue.graduationYear}
					onChange={handleChange}
					required
					placeholder='Graduation Year'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Faculty: </label>
				<input
					type='text'
					name='faculty'
					value={studentValue.faculty}
					onChange={handleChange}
					required
					placeholder='Faculty'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Speciality: </label>
				<input
					type='text'
					name='speciality'
					value={studentValue.speciality}
					onChange={handleChange}
					required
					placeholder='Speciality'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Study Type: </label>
				<input
					type='text'
					name='studyType'
					value={studentValue.studyType}
					onChange={handleChange}
					required
					placeholder='Study Type'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Academic Type: </label>
				<input
					type='text'
					name='academicType'
					value={studentValue.academicType}
					onChange={handleChange}
					required
					placeholder='Academic Type'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Diploma Serial: </label>
				<input
					type='text'
					name='diplomaSerial'
					value={studentValue.diplomaSerial}
					onChange={handleChange}
					required
					placeholder='Diploma Serial'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Diploma Registration Number: </label>
				<input
					type='text'
					name='diplomaRegistrationNumber'
					value={studentValue.diplomaRegistrationNumber}
					onChange={handleChange}
					required
					placeholder='Diploma Registration Number'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Given Date: </label>
				<input
					type='text'
					name='givenDate'
					value={studentValue.givenDate}
					onChange={handleChange}
					required
					placeholder='Given Date'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Academic Level: </label>
				<input
					type='text'
					name='academicLevel'
					value={studentValue.academicLevel}
					onChange={handleChange}
					required
					placeholder='Academic Level'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Appendix Number: </label>
				<input
					type='text'
					name='appendixNumber'
					value={studentValue.appendixNumber}
					onChange={handleChange}
					required
					placeholder='Appendix Number'
					className={classes.wrapper__input}
				/>
				<label className={classes.wrapper__label}>Organization Id: </label>
				<input
					type='number'
					name='organizationId'
					value={studentValue.organizationId}
					onChange={handleChange}
					required
					placeholder='Organization Id'
					className={classes.wrapper__input}
				/>

				<input className={classes.wrapper__btn} type={'submit'} value='Submit' />
			</form>
            
		</div>
    );
}

export default EditStudent;
