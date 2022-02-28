import './UserUpdate.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../services/api-config';

export default function UserUpdate(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    return (
      <form onSubmit={async(e)=>{
          e.preventDefault();
          const user = {
              username,
              email,
              password
          }
          // prevent account update if password does not match confirmPassword
          if(password !== confirmPassword){
           return alert("Password must match password confirmation!") 
          }
          const res = await updateUser(id, user);
          props.setCurrentUser(res);        
          //navigate to UserDetail to confirm changes
          navigate(`/users/${id}`)
      }} id='user-update'>
        <div id='user-edit-form'>
          <label className='edit-input'>Username:
            <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
          </label>
          <label className='edit-input'>E-mail:  
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </label>
          <label className='edit-input'>Password:
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </label>
          <label className='edit-input'>Confirm Password:
            <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
          </label>
        </div>
          <button>Update</button>
      </form>
    )
}
