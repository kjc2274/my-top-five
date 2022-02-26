import './UserCreate.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api-config';

export default function UserCreate(props) {
  const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

  return (
    <form onSubmit={async(e)=>{
        e.preventDefault();
        const user = {
            username,
            email,
            password
        }
        // prevent account creation if password does not match confirmPassword
        if(password !== confirmPassword){
         return alert("Password must match password confirmation!") 
        }
        const res = await registerUser(user);
        props.setCurrentUser(res);
        navigate('/')
    }}>
      <label>Username:
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
      </label>
      <label>E-mail:  
        <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </label>
      <label>Password:
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </label>
      <label>Confirm Password:
        <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
      </label>
        <button>Sign Up</button>
    </form>
  )
}
