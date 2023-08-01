import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {Button, Modal} from 'react-bootstrap'
import resumePdf from '../Assets/Harrison Busby Resume.pdf'
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
          <iframe src={resumePdf} target='_blank' style={{height:600, width:500}}/>  
      </Modal>
      </>
  )
}
