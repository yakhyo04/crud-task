import './App.css';
import 'antd/dist/antd.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import CreateUser from './pages/AddStudent/CreateUser';
import { useEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import StudentEditPage from './pages/EditStudent/StudentEditPage';
import StudentProfile from './pages/AddStudent/StudentProfile';

function App() {
  const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("user-info")){
            navigate('/login')
        }
    }, [])
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/students/:id' element={<StudentEditPage/>} />
      <Route path='/student/profile/:id' element={<StudentProfile/>} />
      <Route path='/createuser' element={<CreateUser/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
