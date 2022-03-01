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
    <div id='list-detail'>
      <h2 id='list-details-title'>List Details</h2>
      <ul id='list-display'>
        {list.user?.id !== 4 ? 
        <Link to={`/users/${list.user?.id}`}><li id='list-author'>{list.author}</li></Link>
        : 
        <li>{list.author}</li>
        }
        <li>1. {list.first}</li>
        <li>2. {list.second}</li>
        <li>3. {list.third}</li>
        <li>4. {list.fourth}</li>
        <li>5. {list.fifth}</li>
      </ul>
      <p id='list-comment'>Author Comments: {list.comment}</p>
      {props.currentUser?.id === list.user?.id && props.currentUser?.id !== 4 ? 
          <Link to={`/categories/${category_id}/${list_id}/edit`}><button id='update-list'>Update List</button></Link>
          : null}
    </div>
  )
}
