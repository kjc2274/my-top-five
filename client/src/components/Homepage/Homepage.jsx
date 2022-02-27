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
    <div>
      <h2>Welcome!</h2>
      <img src="https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg" alt="list" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati provident dolorem ipsam cumque placeat voluptas? Fugit quasi excepturi nobis, temporibus tenetur veritatis. Consectetur, voluptatibus perspiciatis similique incidunt porro aliquam officiis?</p>
      {props.currentUser && props.currentUser.id !== 4 ? 
      <button onClick={()=> navigate('/categories')}>Click here to continue, {props.currentUser.username}</button> 
      : 
      <div>
        <button onClick={()=> handleClick()}>Enter as Guest</button>
        <button onClick={()=> navigate('/login')}>Login</button>
      </div>
      }
    </div>
  )
}
