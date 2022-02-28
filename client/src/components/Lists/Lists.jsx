import './Lists.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryLists, getOneCategory } from '../../services/api-config';

export default function Lists() {
  const [lists, setLists] = useState([]);
  const [category, setCategory] = useState({});
  const {category_id} = useParams();

  useEffect(()=>{
    const fetchCategory = async()=>{
      const res = await getOneCategory(category_id);
      setCategory(res);
    }
    fetchCategory();
  },[category_id]);
  
  useEffect(()=>{
    const fetchLists = async()=>{
      const res = await getCategoryLists(category_id);
      setLists(res);
    }
    fetchLists();
  },[category_id]);

  return (
    <div className='list-page'>
      <h2>{category.title}</h2>
      <img src={category.image} alt={category.title} className='cat-image'/>
      <p>{category.description}</p>
      <Link to={`/categories/${category_id}/new`}><button>Add List</button></Link>
      <div className='lists-div'>
        {lists.map((list)=>(
          <Link to={`/categories/${category_id}/${list.id}`} key={list.id}>
            <ul className='lists'>
              <li id='author'>{list.author}</li>
              <li>{list.first}</li>
              <li>{list.second}</li>
              <li>{list.third}</li>
              <li>{list.fourth}</li>
              <li>{list.fifth}</li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  )
}
