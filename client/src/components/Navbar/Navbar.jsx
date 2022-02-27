import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <Link to='/' className='home'><h1>My Top 5</h1></Link>
        {props.currentUser && props.currentUser?.id !== 4 ?
        <div className='links'>
          <Link to='/categories' className='cat'>Categories</Link>
          <Link to={`/users/${props.currentUser?.id}`} className='users'>My Profile</Link>
          <button onClick={props.logout} className='logout'>Log Out</button>
        </div>
        :
        <div className='links'>
         <Link to='/login' className='login'>Login</Link>
         <Link to='/sign-up' className='signup'>Sign Up</Link>
        </div>
        }
    </div>
  )
}
