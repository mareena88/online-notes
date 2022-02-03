import React, { Component, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import NoteDetails from "./NoteDetails";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
   }  

  render() {
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <form className='white'>
             <h5 className='grey-text text-darken-3'>Edit your note</h5>
             <div className='input-field'>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title'/>
             </div>

             <div className='input-field'>
              <label htmlFor='content'>Content</label>
              <textarea id='content' className='materialize-textarea'></textarea>
             </div>

             <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Update Note</button>
             </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
