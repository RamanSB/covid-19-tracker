import React from 'react';
import './Modal.css';


const handleCloseClick = (state, setModalState) => {
  console.log(`handleCloseClick: ${JSON.stringify(state)}`);
  setModalState({
    show: false
  });
}

const Modal = ({state, setModalState}) => {
  console.log(`[Modal]`);
  if(!state['show']){
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Modal - Header */}
        <div className="modal-header">
          <h5 className="modal-title">{state['country']}</h5>
        </div>
        {/* Modal - Body */}
        <div className="modal-body">
          <ModalContent/>
        </div>
        {/* Modal - Footer */}
        <div className="modal-footer">
          <button className="button" onClick={() => handleCloseClick(state, setModalState)}>Close</button>
        </div>
      </div>
    </div>
  );
}


function ModalContent() {
  return (
      <DataItem dataType={"Deaths"} data={30131}/>
  );
}

const DataItem = ({dataType, data}) => {
  return (
    <div className="data-item">
      <span>{dataType} | {data}</span>
    </div>
  );
}

export default Modal;
