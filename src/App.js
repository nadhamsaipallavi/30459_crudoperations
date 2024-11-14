import React from 'react';
import StudentList from './components/StudentList';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Management System</h1>
    <p className="developer-info">Developed by N SAI PALLAVI</p>
      <StudentList />
    </div>
  );
}

export default App;