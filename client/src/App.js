import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/api-config';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import CategoryCreate from './components/CategoryCreate/CategoryCreate';

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
      <Navbar currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/create' element={<CategoryCreate/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
