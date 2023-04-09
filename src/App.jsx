import './App.css'
// material UI 重置
import './assets/css/normalize.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React from 'react'
import ToDoBoard from './ToDoBoard'
import Login from './components/Login'
import SignUp from './components/SIgnUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ToDoBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
