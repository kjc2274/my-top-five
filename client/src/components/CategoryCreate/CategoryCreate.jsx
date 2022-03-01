import './CategoryCreate.css';
import { useState } from 'react';
import { createCategory } from '../../services/api-config';
import { useNavigate } from 'react-router-dom';

export default function CategoryCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('https://t3.ftcdn.net/jpg/02/00/52/34/360_F_200523424_HzY3FumKGTn10RdqjbUNBuJ6QbwFKVFS.jpg');
  const navigate = useNavigate();


  return (
    <form onSubmit={async(e)=>{
      e.preventDefault();
      const category = {
          title,
          description,
          image
      }
      await createCategory(category);
      navigate(`/categories`)
      }}
      id='cat-create-page'>
       <h2 id='create-cat-title'>Create a Category!</h2>
      <div id='cat-create-div'>
        <label className='cat-create-form'>Title: 
          <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} />
        </label>
        <label className='cat-create-form'>Description:   
          <textarea type='text' value={description} onChange={(e)=> setDescription(e.target.value)} required/>
        </label>
        <label className='cat-create-form'>Image URL: 
          <input type='text' value={image} onChange={(e)=> setImage(e.target.value)} required/>
        </label>
        <h6>Use provided URL or replace with your own.</h6>
      </div>
        <button id='create-cat-button'>Create</button>
    </form>
  )
}
