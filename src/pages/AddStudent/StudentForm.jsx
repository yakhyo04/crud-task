import React, {  useState } from 'react';
import classes from "./CreateUser.module.scss";
import { CREATE_STUDENT } from '../../services/Services';
import { useNavigate } from 'react-router-dom';

// import { Button, Checkbox, Form, Input } from 'antd';


const StudentForm = () => {

  const navigate = useNavigate();
	
    const [studentValue, setStudentValue] = useState({
		fullName: '',
		universityName: '',
		entranceYear: '',
		graduationYear: '',
		faculty: '',
		speciality: '',
		studyType: '',
		academicType: '',
		diplomaSerial: '',
		diplomaRegistrationNumber: '',
		givenDate: '',
		academicLevel: '',
		appendixNumber: '',
		organizationId: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStudentValue({
			...studentValue,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await CREATE_STUDENT(studentValue);
      navigate("/");
      alert("Created a user")
		} catch (err) {
			console.log('submit err: ', err.message);
		}

		console.log('student: ', studentValue);
	};


    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };
    
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

	return (
		<div className='container'>
      <h1 className={classes.wrapper__title}>Add Student</h1>
			<form className={classes.wrapper} onSubmit={handleSubmit}>
				<input
					type='text'
					name='fullName'
					value={studentValue.fullName}
					onChange={handleChange}
					required
					placeholder='Full Name'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='universityName'
					value={studentValue.universityName}
					onChange={handleChange}
					required
					placeholder='University Name'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='entranceYear'
					value={studentValue.entranceYear}
					onChange={handleChange}
					required
					placeholder='Entrance Year'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='graduationYear'
					value={studentValue.graduationYear}
					onChange={handleChange}
					required
					placeholder='Graduation Year'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='faculty'
					value={studentValue.faculty}
					onChange={handleChange}
					required
					placeholder='Faculty'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='speciality'
					value={studentValue.speciality}
					onChange={handleChange}
					required
					placeholder='Speciality'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='studyType'
					value={studentValue.studyType}
					onChange={handleChange}
					required
					placeholder='Study Type'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='academicType'
					value={studentValue.academicType}
					onChange={handleChange}
					required
					placeholder='Academic Type'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='diplomaSerial'
					value={studentValue.diplomaSerial}
					onChange={handleChange}
					required
					placeholder='Diploma Serial'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='diplomaRegistrationNumber'
					value={studentValue.diplomaRegistrationNumber}
					onChange={handleChange}
					required
					placeholder='Diploma Registration Number'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='givenDate'
					value={studentValue.givenDate}
					onChange={handleChange}
					required
					placeholder='Given Date'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='academicLevel'
					value={studentValue.academicLevel}
					onChange={handleChange}
					required
					placeholder='Academic Level'
          className={classes.wrapper__input}
				/>
				<input
					type='text'
					name='appendixNumber'
					value={studentValue.appendixNumber}
					onChange={handleChange}
					required
					placeholder='Appendix Number'
          className={classes.wrapper__input}
				/>
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

    {/* <Form
    className='login__form'
    name="basic"
    labelCol={{
        span: 8,
    }}
      wrapperCol={{
          span: 8,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmit={handleSubmit}
    >
      <Form.Item
        label="Full Name"
        type='text'
		name='fullName'
		value={studentValue.fullName}
		onChange={handleChange}
		required
		placeholder='Full Name'
        rules={[
          {
            required: true,
            message: 'Please input your Full Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Entrance Year"
        type='text'
		name='entranceYear'
		value={studentValue.entranceYear}
		onChange={handleChange}
		required
		placeholder='Entrance Year'
        rules={[
          {
            required: true,
            message: 'Please input your entrance year!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="University Name"
        type='text'
		name='universityName'
		value={studentValue.universityName}
		onChange={handleChange}
		required
		placeholder='University Name'
        rules={[
          {
            required: true,
            message: 'Please input your university name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Graduation Year"
        type='text'
		name='graduationYear'
		value={studentValue.graduationYear}
		onChange={handleChange}
		required
		placeholder='Graduation Year'
        rules={[
          {
            required: true,
            message: 'Please input your Graduation Year!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Faculty"
        type='text'
        name='faculty'
        value={studentValue.faculty}
        onChange={handleChange}
        required
        placeholder='Faculty'
        rules={[
          {
            required: true,
            message: 'Please input your faculty!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Speciality"
        type='text'
		name='speciality'
		value={studentValue.speciality}
		onChange={handleChange}
		required
		placeholder='Speciality'
        rules={[
          {
            required: true,
            message: 'Please input your Speciality!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Study Type"
        type='text'
		name='studyType'
		value={studentValue.studyType}
		onChange={handleChange}
		required
		placeholder='Study Type'
        rules={[
          {
            required: true,
            message: 'Please input your Study Type!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Academic Type"
        type='text'
		name='academicType'
		value={studentValue.academicType}
		onChange={handleChange}
		required
		placeholder='Academic Type'
        rules={[
          {
            required: true,
            message: 'Please input your Academic Type!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Diploma Serial"
        type='text'
		name='diplomaSerial'
		value={studentValue.diplomaSerial}
		onChange={handleChange}
		required
		placeholder='Diploma Serial'
        rules={[
          {
            required: true,
            message: 'Please input your Diploma Serial!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Diploma Registration Number"
        type='text'
		name='diplomaRegistrationNumber'
		value={studentValue.diplomaRegistrationNumber}
		onChange={handleChange}
		required
		placeholder='Diploma Registration Number'
        rules={[
          {
            required: true,
            message: 'Please input your diplomaRegistrationNumber!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Given Date"
        type='text'
		name='givenDate'
		value={studentValue.givenDate}
		onChange={handleChange}
		required
		placeholder='Given Date'
        rules={[
          {
            required: true,
            message: 'Please input your givenDate!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Academic Level"
        type='text'
		name='academicLevel'
		value={studentValue.academicLevel}
		onChange={handleChange}
		required
		placeholder='Academic Level'
        rules={[
          {
            required: true,
            message: 'Please input your academicLevel!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Appendix Number"
        type='text'
		name='appendixNumber'
		value={studentValue.appendixNumber}
		onChange={handleChange}
		required
		placeholder='Appendix Number'
        rules={[
          {
            required: true,
            message: 'Please input your appendixNumber!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Appendix Number"
        type='text'
		name='appendixNumber'
		value={studentValue.appendixNumber}
		onChange={handleChange}
		required
		placeholder='Appendix Number'
        rules={[
          {
            required: true,
            message: 'Please input your appendixNumber!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Organization Id"
        type='number'
		name='organizationId'
		value={studentValue.organizationId}
		onChange={handleChange}
		required
		placeholder='Organization Id'
        rules={[
          {
            required: true,
            message: 'Please input your organizationId!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> */}
            
		</div>
	);
};

export default StudentForm;