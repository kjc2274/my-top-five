import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <Link to='/'><h1>My Top 5</h1></Link>
        {props.currentUser && props.currentUser?.id !== 4 ?
        <>
          <Link to='/categories'>Categories</Link>
          <Link to={`/users/${props.currentUser?.id}`}>My Profile</Link>
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
