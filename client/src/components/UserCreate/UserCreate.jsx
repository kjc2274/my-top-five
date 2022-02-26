import './UserCreate.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api-config';

export default function UserCreate(props) {
  const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

  return (
    <form onSubmit={async(e)=>{
        e.preventDefault();
        const user = {
            username,
            email,
            password
        }
        const res = await registerUser(user);
        props.setCurrentUser(res);
        navigate('/')
    }}>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button>Sign Up</button>
    </form>
  )
}
