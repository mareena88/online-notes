import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const CreateNote = () => {

 // DECLARE STATES
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');

 const navigate = useNavigate();

 // handle submit function
 const handleSubmit = (e) => {
  e.preventDefault();
 }

 const handleTitleChange = (e) => {
  setTitle(e.target.value)
 }

 const handleContentChange = (e) => {
  setContent(e.target.value)
 }

 console.log(title, content);

 // add new note to db
 const notesCollectionRef = collection(db, "notes");


 const createNote = async () => {
  await addDoc(notesCollectionRef,{ title: title, content: content});
  navigate("/");
 }

 const pageModel = (
  <div className='container'>
    <form onSubmit={handleSubmit} className='white'>
     <h5 className='grey-text text-darken-3'>Create a new note</h5>
     <div className='input-field'>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' onChange={handleTitleChange}/>
     </div>

     <div className='input-field'>
      <label htmlFor='content'>Content</label>
      <textarea id='content' className='materialize-textarea' onChange={handleContentChange}></textarea>
     </div>

     <div className='input-field'>
      <button className='btn pink lighten-1 z-depth-0' onClick={createNote}>Add Note</button>
     </div>

    </form>
   </div>
 )
 return pageModel;
}

export default CreateNote;
