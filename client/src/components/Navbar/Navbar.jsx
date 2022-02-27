import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <Link to='/'><h1>My Top 5</h1></Link>
      <Link to='/categories'>Categories</Link>
        {props.currentUser ?
        <>
          <Link to={`/users/${props.currentUser.id}`}>My Profile</Link>
          <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
         <Link to='/login'>Login</Link>
         <Link to='/sign-up'>Sign Up</Link>
        </>
        }
    </div>
  )
}
