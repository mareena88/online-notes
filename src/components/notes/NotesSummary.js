import React from 'react';

const NotesSummary = ({ note }) => {
 return (
  <div className='card z-depth-0 note-summary'>
    <div className='card-content grey-text text-darken-3'>
     <span className='card-title'>{ note.title }</span>
     <p>Posted on:</p>
     <p className='grey-text'>28th January 2022</p>
    </div>
   </div>
 )
}

export default NotesSummary;