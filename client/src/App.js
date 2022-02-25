import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/api-config';

function App() {
  //create currentUser variable for auth 
  const [currentUser, setCurrentUser] = useState(null)
  
  //if there is an authToken in localStorage set that token's user as currentUser
  useEffect(()=>{
    const fetchUser = async()=>{
      const user = await verifyUser();
      setCurrentUser(user);
    }
    fetchUser();
  },[])

  // remove authToken from localStorage and reset currentUser
  const logout = () => {
    localStorage.removeItem('authToken');
    setCurrentUser(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route to/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
