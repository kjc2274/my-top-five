import './UserDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteList, getOneUser, getUserLists } from '../../services/api-config';

export default function UserDetail(props) {
  const [user, setUser] = useState('');
  const [lists, setLists] = useState([])
  const [toggle, setToggle] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    const fetchUser = async()=>{
      const res = await getOneUser(id);
      setUser(res)
    }
    const fetchLists = async()=>{
      const res = await getUserLists(id);
      setLists(res)
    }
    fetchUser();
    fetchLists();
  },[id, toggle]);

  const handleDelete = async(list_id) => {
    await deleteList(id, list_id);
    setToggle(prevtoggle => !prevtoggle);
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <h4>{user.email}</h4>
      {lists.map((list)=>(
        <div key={list.id}>
          <ul>
            <li>{list.category.title}</li>
            <li>{list.first}</li>
            <li>{list.second}</li>
            <li>{list.third}</li>
            <li>{list.fourth}</li>
            <li>{list.fifth}</li>
          </ul>
          <p>{list.comment}</p>
          {props.currentUser?.id === user?.id ? 
          <button onClick={()=>handleDelete(list.id)}>Delete List</button>
          : null}
        </div>
      ))}
    </div>
  )
}
