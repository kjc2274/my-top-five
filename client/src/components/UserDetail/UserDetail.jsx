import './UserDetail.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    <div className='user-info'>
      <h2 id='user-detail-title'>{user.username}</h2>
      {props.currentUser.id === user.id ? 
      <div>
        <h4>{user.email}</h4>
        <Link to={`/users/${user.id}/edit`}><button>Edit User</button></Link>
      </div>
      :
      null
      }
      <div className='user-lists'>
      {lists.map((list)=>(
        <div key={list.id} className='user-ul'>
          <Link to={`/categories/${list.category.id}/${list.id}`} key={list.id}>
            <ul className='user-li'>
              <li id='title'>{list.category.title}</li>
              <li>{list.first}</li>
              <li>{list.second}</li>
              <li>{list.third}</li>
              <li>{list.fourth}</li>
              <li>{list.fifth}</li>
            </ul>
          </Link>
          {props.currentUser?.id === user?.id ? 
          <button onClick={()=>handleDelete(list.id)}>Delete List</button>
          : null}
        </div>
      ))}
      </div>
    </div>
  )
}
