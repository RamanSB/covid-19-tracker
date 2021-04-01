import React from 'react';

const Modal = (props) => {
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
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
