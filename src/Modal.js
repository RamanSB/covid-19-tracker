import React from 'react';
import axios from 'axios';
import './Modal.css';
import apiCredentials from './api/credentials.js';

const handleCloseClick = (state, setModalState) => {
  console.log(`handleCloseClick: ${JSON.stringify(state)}`);
  setModalState({
    show: false
  });
}

const Modal = ({state, setModalState}) => {
  console.log(`[Modal]`);
  if(!state['show']){
    console.log(`Modal is not shown.`);
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
          <ModalContent country={state['country']}/>
        </div>
        {/* Modal - Footer */}
        <div className="modal-footer">
          <button className="button" onClick={() => handleCloseClick(state, setModalState)}>Close</button>
        </div>
      </div>
    </div>
  );
}

const {apiKey, apiHost} = apiCredentials;
const endpoint = 'https://covid-19-data.p.rapidapi.com/country';

let modalContent = {};

function ModalContent({country}) {
  React.useEffect(() => getModalContentData(), []);
  const [modalState, setModalState] = React.useState({});

 async function getModalContentData(){
   let options = {
     method: 'GET',
     url: endpoint,
     params: {name: country},
     headers: {
       'x-rapidapi-key': apiKey,
       'x-rapidapi-host': apiHost
     }
   };

    axios(options).then(
      response => {
        console.log(`Response from request: ${JSON.stringify(response.data[0])}`);
        modalContent = response.data[0];
        setModalState(prevState => modalContent);
      }
    );

  }

  console.log(`ModalState: ${JSON.stringify(modalState)}`);
  const attrOfInterest = ['confirmed', 'recovered', 'critical', 'deaths', 'lastUpdate'];
  let dataItems = attrOfInterest.map((elem, index) => {
    return <li key={index}><DataItem dataType={elem} data={modalState[elem]}/></li>
  });

  return (
    <ul style={{"listStyleType":"none"}}>
      {dataItems}
    </ul>
  );
}

function DataItem({dataType, data}){
  return (
    <div className="data-item">
      <span style={{"color":"white", "fontFamily":"Arial"}}>{dataType} : {data}</span>
    </div>
  );
}

export default Modal;
