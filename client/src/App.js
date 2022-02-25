import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/api-config';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import CategoryCreate from './components/CategoryCreate/CategoryCreate';
import Lists from './components/Lists/Lists';
import ListDetail from './components/ListDetail/ListDetail';
import ListEdit from './components/ListEdit/ListEdit';
import ListCreate from './components/ListCreate/ListCreate';
import UserCreate from './components/UserCreate/UserCreate';
import UserDetail from './components/UserDetail/UserDetail';

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
        <Route path='/categories/lists' element={<Lists/>}/>
        <Route path='/categories/lists/:id' element={<ListDetail/>}/>
        <Route path='/categories/lists/:id/edit' element={<ListEdit/>}/>
        <Route path='/categories/lists' element={<ListCreate/>}/>
        <Route path='/sign-up' element={<UserCreate/>}/>
        <Route path='/users/:id' element={<UserDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
