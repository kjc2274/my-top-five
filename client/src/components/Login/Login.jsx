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
        const res = await loginUser(user);
        props.setCurrentUser(res);
        navigate('/')
    }}>
      <label>Username:
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
      </label>
      <label>Password:
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </label>
        <button>Login</button>
    </form>
  )
}
