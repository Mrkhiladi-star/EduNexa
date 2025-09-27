import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import DmDashboard from './pages/dm/dmDashboard';
import MinistryDashboard from './pages/ministry/ministryDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
    <Router>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

          {/* Login Pages */}
          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/DMlogin" element={<LoginPage role="District Magistrate" />} />
          <Route path="/Ministrylogin" element={<LoginPage role="Ministry" />} />

          {/* Admin Register */}
          <Route path="/Adminregister" element={<AdminRegisterPage />} />

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      }

      {/* Role Based Dashboards */}
      {currentRole === "Admin" &&
        <AdminDashboard />
      }

      {currentRole === "Student" &&
        <StudentDashboard />
      }

      {currentRole === "Teacher" &&
        <TeacherDashboard />
      }

      {currentRole === "District Magistrate" &&
        <DmDashboard />
      }

      {currentRole === "Ministry" &&
        <MinistryDashboard />
      }
    </Router>
  )
}

export default App
