import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {ALL_USERS,Update_Pass} from '../../Store/actions'
import Modals from '../../Shared/Modal'
import classes from './single.module.css'
import Spinner from '../../Shared/Spinner'

const SingleUser = (props) => {

  const [showInput,setShowInput] = useState(false)
  const [input,setInput] = useState({oldpass:'',newpass:''})
  const [show, setShow] = useState(false);

  const params = useParams()
  const user = props.user[params.id]
  const {isError,isLoading} = props.error;

  useEffect(()=>{

    props.ALL_USERS()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function onChangeHandler(e){

    const {name,value} = e.target;
    setInput({...input,[name]:value})



  }

 async function onSubmitHandler(e){
    e.preventDefault()

    const recData = {
      oldPassword : input.oldpass,
      newPassword:input.newpass
    }

    props.Update_Pass(params.id,recData)
    setShow(true)
    

  //  let user;
  //   try{

  //     user = await axios.patch(`/api/updatepass/${params.id}`,recData)


  //   }catch(err){
  //     console.log(err.response.data.message)

  //   }
  //   console.log(user.data)
   
  }

  
  const handleClose =() =>{
    
    setShow(false)
    }
    
  

    


const onClickHandler=()=>{
  
  setShow(false)
 }

 if(!user){
  return (
    <p>loading....</p>
  )
 }


  return (
<React.Fragment>
  {isLoading?<Spinner />:(<div className={classes.main}>
     <div className={classes.imgs}>
      <img src={`${process.env.REACT_APP_PHOTO}/${user.image}`} alt="" />
     </div>
     <div className={classes.text}>
      <h1 style={{textAlign:'center',marginLeft:'50px',color:'black',fontSize:'16px'}} className='ui button'>Dear, <h5 style={{display:'inline-block',color:'blue',fontWeight:'bold',marginRight:'3px'}}>{user.username}</h5> welcome to your profile</h1>
    <div className={classes.icons}>
 {user.places.length !==0 && <Link to={`/myblog/${user.id}`}><button style={{marginRight:"100px"}} className='ui negative button'>You shared {user.places.length}  posts </button></Link>}
 {user.places.length ===0 && <Link to='/create'><button className='ui negative button'>Please Shared a posts </button></Link>}
    
    </div>
     </div>
     <div className={classes.pass}>
      <button onClick={()=>setShowInput(!showInput)} className='ui primary button'>Click here to Update Your Profile</button>
     </div>
    {showInput ?(<div className={classes.forms}>
    <h2>Update Your Password</h2>
      <form onSubmit={onSubmitHandler}>
       <div> <label htmlFor="">Old Password</label>
        <input  onChange={onChangeHandler}  name='oldpass' required type='password' /></div>
        <div> <label htmlFor="">New Password</label>
        <input onChange={onChangeHandler} name='newpass' required type="password" /></div>
        <button type='submit' className='ui negative button'>Submit</button>
      </form>
      
      {isError && !isLoading &&  <Modals title='Warning' desc={isError} btn='try again' show={show} setShow={setShow} handleClose={handleClose} onClickHandler={onClickHandler}/> }
      {!isError && !isLoading && <Modals title='Message' desc='password update successfully' btn='close' show={show} setShow={setShow} handleClose={handleClose} onClickHandler={onClickHandler}/>}
    </div>):null}

  </div>)}
</React.Fragment>
  )
}

const mapStateToProps = (state)=>{

  return {user:state.users,error:state.error}

}

export default connect(mapStateToProps,{ALL_USERS,Update_Pass})(SingleUser)