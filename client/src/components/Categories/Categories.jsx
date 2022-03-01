import './Categories.css';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../services/api-config';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{
    const fetchCategories = async()=>{
      const res = await getAllCategories();
      setCategories(res);
      setFilteredCategories(res)
    }
    fetchCategories();
  },[]);

  const search = (e) =>{
    // e.preventDefault();
    const input = e.target.value;
    if (input !== ''){
        const filtered = categories.filter((category)=>{
            return category.title.toLowerCase().includes(input.toLowerCase());
        })
        setFilteredCategories(filtered);
    }else{
        setFilteredCategories(categories);
    }
    setQ(input);
}

  return (
    <div className='categories-page'>
      <h2 id='cat-page-title'>Categories</h2>
      <p className='cat-explain'>Select a category to see all of the lists posted under that category. See what other people enjoy, and maybe create your own list to share!</p>
      <input type="search" value={q} onChange={search}/>
      <div className='cats'>
        {filteredCategories.map((category)=>(
          <div className='cat-card'>
            <Link to={`/categories/${category.id}`} key={category.id}>
              <img src={category.image} alt={category.title} className='category-image'/>
              <h4>{category.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
