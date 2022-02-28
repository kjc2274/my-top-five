import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api-config';

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

  return (
    <form onSubmit={async(e)=>{
        e.preventDefault();
        // create object to pass in as loginData
        const user = {
            username,
            password
        }
        // use loginUser to set authtoken in localStorage and return authenticated user
        try {
          const res = await loginUser(user);
          props.setCurrentUser(res);
          navigate('/')          
        } catch (error) {
          alert("Unable to process login. Plese make sure your username and password are correct.")
        }
    }} className='login-form'>
      <div id='login-div'>
        <label className='login-input'>Username:
          <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label className='login-input'>Password:
          <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>
      </div>
        <button className='login-submit'>Login</button>
    </form>
  )
}
