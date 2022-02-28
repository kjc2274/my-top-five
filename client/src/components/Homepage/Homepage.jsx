import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api-config';

export default function Homepage(props) {
  const navigate = useNavigate();

  const handleClick = async()=>{
    const user = {
      username: "Guest",
      password: "123456"
    }
    const res = await loginUser(user);
        props.setCurrentUser(res);
        navigate('/categories')
  }

  return (
    <div className='homepage'>
      <h2 id='welcome'>Welcome!</h2>
      <img src="https://cdn.iconscout.com/icon/free/png-256/list-collection-number-rank-position-categories-30514.png" alt="list" className='list-image'/>
      <p id='welcome-paragraph'><span id='my-top-5'>My Top 5</span> is a forum for sharing the things that bring us joy! Feel free to come on in and have a look around!</p>
      {props.currentUser && props.currentUser.id !== 4 ? 
      <button onClick={()=> navigate('/categories')} id='continue-button'>Click here to continue, <span id='username'>{props.currentUser.username}</span></button> 
      : 
      <div>
        <button onClick={()=> handleClick()} id='guest-button'>Continue as Guest</button>
        <button onClick={()=> navigate('/login')} id='login-button'>Login</button>
      </div>
      }
    </div>
  )
}
