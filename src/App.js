import './App.css'
import React from 'react'
import ToDoBoard from './ToDoBoard'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDoBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
