import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {Button, Modal} from 'react-bootstrap'
import resumePdf from '../Assets/HarrisonBusbyResume.pdf'
import '../App.css';

export default function ModalComponent() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <>
    <button className='resumeBtn' onClick={openModal}>
        Resume
      </button>

      <Modal show={showModal} onHide={closeModal}>
          <iframe src={resumePdf} style={{height:600, width:500}}/>  
      </Modal>
      </>
  )
}
