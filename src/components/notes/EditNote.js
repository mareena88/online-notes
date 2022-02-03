import React from 'react';
import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase-config';


const EditNote = ({editForm, note}) => {

 const [newtitle, setNewTitle] = useState();
 const [newcontent, setNewContent] = useState();

 // const copyNote = [...notes];
 // console.log(copyNote);

 /* function to update note in firestore */

 const handleUpdate = async (e) => {
  // e.preventDefault()
  // const noteDocRef = doc(db, 'notes', note.id)
  // try{
  //   await updateDoc(noteDocRef, {
  //     title: newtitle,
  //     content: newcontent
  //   })
  //   editForm(false);
  // } catch (err) {
  //   alert(err)
  // }
  db.collection('notes').doc(doc.id).updateDoc({
   title: newtitle,
   content: newcontent
  });
}


 const pageModel = (
  <div className='edit-form container white'>
   <form className='white'>
    <h5 className='grey-text text-darken-3'>Edit your note</h5>
    <div className='input-field'>
     <label htmlFor='title'></label>
     <input onChange={(e) => setNewTitle(e.target.value)} type='text' id='title' defaultValue={note.title}/>
    </div>

    <div className='input-field'>
     <label htmlFor='content'></label>
     <textarea onChange={(e) => setNewContent(e.target.value)} id='content' className='materialize-textarea' defaultValue={note.content}></textarea>
    </div>

    <div className='input-field'>
     <button onClick={handleUpdate} className='btn pink lighten-1 z-depth-0'>Update Note</button>
    </div>
    </form>

  </div>

  // <div>
  //  <input type="text" placeholder='Title' defaultValue={note.title} onChange={(e) => setNewTitle(e.tardefaultValue)}></input>
  //  <input type="text" placeholder='Content' defaultValue={note.content} onChange={(e) => setNewContent(e.target.value)}></input>
  //  <button onClick={handleUpdate}>Update</button>
  // </div>
 )
 return pageModel;
}

export default EditNote;
