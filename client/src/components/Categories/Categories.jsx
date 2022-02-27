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
    <div>
      <h2>Categories</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor deserunt esse quasi rem voluptas. At nam eum et? Fuga, minus assumenda! Tempore quidem, sapiente dignissimos distinctio voluptatibus debitis minima.</p>
      {categories.map((category)=>(
        <Link to={`/categories/${category.id}`} key={category.id}>
          <img src={category.image} alt={category.title} />
          <h4>{category.title}</h4>
        </Link>
      ))}
    </div>
  )
}
