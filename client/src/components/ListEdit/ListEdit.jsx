import './ListEdit.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneList, updateList } from '../../services/api-config';

export default function ListEdit() {
  const [author, setAuthor] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [comment, setComment] = useState('');
  const {category_id, list_id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchList = async()=>{
      const res = await getOneList(category_id, list_id);
      setAuthor(res.author);
      setFirst(res.first);
      setSecond(res.second);
      setThird(res.third);
      setFourth(res.fourth);
      setFifth(res.fifth);
      setComment(res.comment)
    }
    fetchList();
  },[category_id, list_id])

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
      await updateList(category_id, list_id, list);
      navigate(`/categories/${category_id}/${list_id}`)
      }}
    id='list-edit'>
      <div id='edit-form'>
        <label className='edit-form-input'>Author:
          <input type='text' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
        </label>
        <label className='edit-form-input'>First:  
          <input type='text' value={first} onChange={(e)=> setFirst(e.target.value)}/>
        </label>
        <label className='edit-form-input'>Second:
          <input type='text' value={second} onChange={(e)=> setSecond(e.target.value)}/>
        </label>
        <label className='edit-form-input'>Third:
          <input type='text' value={third} onChange={(e)=> setThird(e.target.value)}/>
        </label>
        <label className='edit-form-input'>Fourth:
          <input type='text' value={fourth} onChange={(e)=> setFourth(e.target.value)}/>
        </label>
        <label className='edit-form-input'>Fifth:
          <input type='text' value={fifth} onChange={(e)=> setFifth(e.target.value)}/>
        </label>
        <label className='edit-form-input'>Comments:
          <textarea type='text' value={comment} onChange={(e)=> setComment(e.target.value)}/>
        </label>
      </div>
        <button id='update-button'>Update</button>
    </form>
  )
}
