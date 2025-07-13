
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AuthForm from '../components/AuthForm';
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/Dashboard"

function App() {
  const {token} = useAuth();
  
  return (<div className="container">{token ? <Dashboard /> : <AuthForm />}</div>);
}

export default App;