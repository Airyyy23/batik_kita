import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/register' Component={Register} />
      </Routes>
    </Router>
  )
}

export default App