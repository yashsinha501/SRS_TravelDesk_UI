import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import FormDisplay from './components/FormDisplay';
import DashBoard from './components/TravelAdmin/DashBoard';
import TravelRequests from './components/TravelRequests';

function App() {

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-custom-gradient">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/bookingForm" element={<BookingForm />} />
          <Route path="/bookingDetails" element={<BookingDetails />} />
          <Route path="/formDisplay" element={<FormDisplay />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/travelrequests" element={<TravelRequests />} />
          <Route path="*" element={<h1 className="text-xl text-center">404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
