import './ListDetail.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneList } from '../../services/api-config';

export default function ListDetail(props) {
  const [list, setList] = useState({});
  const {category_id, list_id} = useParams()

  useEffect(()=>{
    const fetchList = async()=>{
      const res = await getOneList(category_id, list_id);
      setList(res)
    }
    fetchList();
  },[category_id, list_id]);

  return (
    <div>
      <ul>
        {list.user?.id ? 
        <Link to={`/users/${list.user.id}`}><li>{list.author}</li></Link>
        : 
        <li>{list.author}</li>
        }
        <li>{list.first}</li>
        <li>{list.second}</li>
        <li>{list.third}</li>
        <li>{list.fourth}</li>
        <li>{list.fifth}</li>
      </ul>
      <p>{list.comment}</p>
      {props.currentUser?.id === list.user?.id ? 
          <Link to={`/categories/${category_id}/${list_id}/edit`}><button>Update List</button></Link>
          : null}
    </div>
  )
}
