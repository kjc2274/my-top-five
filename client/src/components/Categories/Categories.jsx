import './Categories.css';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../services/api-config';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const fetchCategories = async()=>{
      const res = await getAllCategories();
      setCategories(res);
    }
    fetchCategories();
  },[]);

  return (
    <div className='categories-page'>
      <h2>Categories</h2>
      <p>Select a category to see all of the lists posted under that category. See what other people enjoy, and maybe create your own list to share!</p>
      {categories.map((category)=>(
        <Link to={`/categories/${category.id}`} key={category.id}>
          <img src={category.image} alt={category.title} className='category-image'/>
          <h4>{category.title}</h4>
        </Link>
      ))}
    </div>
  )
}
