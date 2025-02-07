import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Container from './Components/Container'
import Dashboard from './admin/pages/Dashboard';

function App() {

  const Adminpanel = () => {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/admin" element={<Adminpanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
