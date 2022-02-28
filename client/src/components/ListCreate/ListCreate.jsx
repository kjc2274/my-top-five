import './ListCreate.css'
import { useState } from 'react'
import { createList } from '../../services/api-config';
import { useNavigate, useParams } from 'react-router-dom';

export default function ListCreate() {
  const [author, setAuthor] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [comment, setComment] = useState('');
  const {category_id} = useParams();
  const navigate = useNavigate();

  return (
    <form onSubmit={async(e)=>{
      e.preventDefault();
      const list = {
          author,
          first,
          second,
          third,
          fourth,
          fifth,
          comment
      }
      await createList(category_id, list);
      navigate(`/categories/${category_id}`)
      }}
    className='list-create'>
      <label>Author:
        <input type='text' value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder='Enter your name or username here'/>
      </label>
      <label>First:  
        <input type='text' value={first} onChange={(e)=> setFirst(e.target.value)}/>
      </label>
      <label>Second:
        <input type='text' value={second} onChange={(e)=> setSecond(e.target.value)}/>
      </label>
      <label>Third:
        <input type='text' value={third} onChange={(e)=> setThird(e.target.value)}/>
      </label>
      <label>Fourth:
        <input type='text' value={fourth} onChange={(e)=> setFourth(e.target.value)}/>
      </label>
      <label>Fifth:
        <input type='text' value={fifth} onChange={(e)=> setFifth(e.target.value)}/>
      </label>
      <label>Comments:
        <input type='text' value={comment} onChange={(e)=> setComment(e.target.value)}/>
      </label>
        <button>Create</button>
    </form>
  )
}
