import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import '../../App.css';

const Dashboard = () => {

 // get & display all notes from db

 const [notes, setNotes] = useState([]);
 const notesCollectionRef = collection(db, "notes");

 useEffect(() => {
  const getNotes = async () => {
   const data = await getDocs(notesCollectionRef);
   setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };

  getNotes()
 }, [notes])

 // delete a note from the db

 const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id);
  await deleteDoc(noteDoc);
 }

 const pageModel = (
   <div className='dashboard container'>
    <h2>My Notes</h2>
    <div className='row note'>
        <div className="col s12 m12">
         <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Example title</span>
            <p>Note content over here</p>
          </div>
         </div>
        </div>
        <button className='btn lighten-1 z-depth-0 edit-btn'>
         Edit note
         <i className="material-icons">edit</i>
        </button>
        
        <button className='btn pink lighten-1 z-depth-0 edit-btn'>
         Delete note
         <i className="material-icons">delete</i>
        </button>
       </div>

       <div className='row note'>
        <div className="col s12 m12">
         <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Hardcoded title note here</span>
            <p>This is the note content which will be deleted later, the notes will come from the database.</p>
          </div>
         </div>
        </div>
        <button className='btn lighten-1 z-depth-0 edit-btn'>
         Edit note
         <i className="material-icons">edit</i>
        </button>
        
        <button className='btn pink lighten-1 z-depth-0 edit-btn'>
         Delete note
         <i className="material-icons">delete</i>
        </button>
       </div>

       {/* note from db  */}
    {notes.map((note) => {
      return <div className='row note'>
        <div className="col s12 m12">
         <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{note.title}</span>
            <p>{note.content}</p>
          </div>
         </div>
        </div>
        <button className='btn lighten-1 z-depth-0 edit-btn'>
         Edit note
         <i className="material-icons">edit</i>
        </button>
        
        <button onClick={() => {deleteNote(note.id)}} className='btn pink lighten-1 z-depth-0 edit-btn'>
         Delete note
         <i className="material-icons">delete</i>
        </button>
       </div>
     })}
   </div>
 )
 return pageModel;
}

export default Dashboard;
