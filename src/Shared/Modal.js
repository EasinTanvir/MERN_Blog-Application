import React from 'react'
import { Modal } from "react-bootstrap";




const Modals = (props) => {

 

  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><p style={{color:'red'}}>{props.desc}</p></Modal.Body>
      <Modal.Footer>
        <button className='ui button' onClick={props.onClickHandler}>
         {props.btn}
        </button>
       
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Modals