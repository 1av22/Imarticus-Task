import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CoursePage from './components/CoursePage';
import CourseEnroll from './components/CourseEnroll';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/home' element={<CoursePage />} />
        <Route path='/enroll' element={<CourseEnroll />} />
      </Routes>
    </Router>
  );
}

export default App;
