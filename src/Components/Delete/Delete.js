import React,{useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import { Delete_Post } from '../../Store/actions'
import { Modal } from "react-bootstrap";

const Delete = (props) => {

  const {isSignIn} = props.auth

  const navabars = useNavigate()
  const params = useParams()

  const [show, setShow] = useState(false);

  const handleClose = () =>{
    navabars('/')
  };
  const handleShow = () => setShow(true);


  useEffect(()=>{
   handleShow()

  },[])

  function onDeleteHandler(){

    props.Delete_Post(params.id,isSignIn)
  }

  function onClickHandler(){
    navabars('/')

  }

  return (

    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure You want to delete this Post?</Modal.Body>
      <Modal.Footer>
        <button className='ui button' onClick={onClickHandler}>
          Close
        </button>
        <button className='ui primary button' onClick={onDeleteHandler}>
          Delete
        </button>
      </Modal.Footer>
    </Modal>
  </>
   


  )
}
const mapStateToProps = (state) =>{

  return {auth:state.auth}

}

export default connect(mapStateToProps,{Delete_Post})(Delete)




// {/* <div className={classes.btns}>
// <div  className="ui cards">
// <div style={{padding:'10px',width:'450px',height:'180px'}} className="card">
//   <div className="content">   
//     <div className="description">
//      <h3 style={{textAlign:'center',fontWeight:'bold'}}>Are you sure you want to <br /> Delete this Post ?</h3>
//     </div>
//   </div>
//   <div className="extra content">
//     <div className="ui two buttons">
//       <button onClick={onDeleteHandler} style={{marginRight:'10px'}} className="ui red button">Delete</button>
//       <button onClick={onClickHandler} className="ui button">Cancel</button>
//     </div>
//   </div>
// </div>
// </div>
// </div> */}