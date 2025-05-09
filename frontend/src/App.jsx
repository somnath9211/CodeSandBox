import React, { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping'
import { Route, Routes } from 'react-router-dom';
import CreateProject from './pages/createProject.jsx';

function App() {

  useEffect(() => {
    pingApi();
  }, [])
  return (
    <Routes>
      <Route path='/' element={<CreateProject />} />
    </Routes>
  )
}

export default App
