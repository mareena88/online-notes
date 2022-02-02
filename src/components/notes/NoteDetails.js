import React from 'react';
import { useParams } from 'react-router-dom'

const NoteDetails = () => {
 const id = useParams();
 return (
  <div className='container section note-details'>
   <div className='card z-depth-0'>
    <div className='card-content'>
     <span className='card-title'>Note Title - {id.id}</span>
     <p>Lorem ipsum text over here random text for now</p>
    </div>
    <div className='card-action grey lighten-4 grey-text'>
     <div>Posted on:</div>
     <div>28th January 2022</div>
    </div>
   </div>

  </div>
 )
}

export default NoteDetails;