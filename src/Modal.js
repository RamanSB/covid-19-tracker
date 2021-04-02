import React from 'react';
import './Modal.css';


const handleCloseClick = (state, setModalState) => {
  console.log(`handleCloseClick: ${JSON.stringify(state)}`);
  setModalState({
    ...state,
    show: false
  });
}

const Modal = ({state, setModalState}) => {

  if(!state['show']){
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Modal - Header */}
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
        </div>
        {/* Modal - Body */}
        <div className="modal-body">
          This is modal content
        </div>
        {/* Modal - Footer */}
        <div className="modal-footer">
          <button className="button" onClick={() => handleCloseClick(state, setModalState)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
