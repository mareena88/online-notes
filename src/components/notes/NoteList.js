import React from 'react';
import NotesSummary from './NotesSummary';

const NoteList = ({ notes }) => {
 return (
  <div className='note-list section'>
   { notes && notes.map(note => {
    return (
     // <NotesSummary note={note} key={note.id}/>
     <div className='card z-depth-0 note-summary'>
      <div className='card-content grey-text text-darken-3'>
       <span className='card-title'>{ note.title }</span>
       <p>Posted on:</p>
       <p className='grey-text'>28th January 2022</p>
      </div>
     </div>
    )
   })}
  </div>
 )
}

export default NoteList;