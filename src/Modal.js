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

function ModalContent({country}) {
  console.log(`[ModalContent] ${JSON.stringify(country)}`);
  const endpoint = 'https://covid-19-data.p.rapidapi.com/country';

  let options = {
    method: 'GET',
    url: endpoint,
    params: {name: country},
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost
    }
  };

  const dataCategories = ['critical', 'confirmed', 'recovered'];


  async function getData1(){
    const response = await axios(options);
    console.log(`response : ${JSON.stringify(response)}`);
    return response;
  }

  function getData(){
    let response = axios(options).then(res => {
      console.log('ghehe'+JSON.stringify(res.data[0]));
      return res.data[0];
    }).catch(err => console.log(err));
    return response;
  }

  let responseData = getData();
  console.log(`responseData: ${JSON.stringify(responseData)}`);

  let dataItems = dataCategories.map((category, index) => {
    return <DataItem key={index} dataType={category} data={responseData[category]}/>
  });

  return (
      <ul>{dataItems}></ul>
  );
}

function DataItem({dataType, data}){
  return (
    <div className="data-item">
      <span>{dataType} | {data}</span>
    </div>
  );
}

export default Modal;
