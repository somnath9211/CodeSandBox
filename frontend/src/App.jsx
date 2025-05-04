import React, { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping'

function App() {

  useEffect(() => {
    pingApi();
  }, [])
  return (
    <>

    </>
  )
}

export default App
