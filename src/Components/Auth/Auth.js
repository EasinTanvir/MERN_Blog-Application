import React,{ useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import Modals from '../../Shared/Modal';
import Spinner from '../../Shared/Spinner';
import { SIGN_UP,SIGN_IN } from '../../Store/actions'




const Auth = (props) => {

  const {isLoading,isError} = props.error;
  const [show, setShow] = useState(false);

  const imageUpload = useRef()
  const [input,setInput] = useState({username:'',email:'',password:''})
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  const [file,setFile] = useState()
  const [preview,setPreview] = useState(null)

useEffect(()=>{

  if(!file){
    return
  }

  const fileReader = new FileReader()
  fileReader.onload =()=>{
    setPreview(fileReader.result)
  }
  fileReader.readAsDataURL(file)

},[file])


  function onImageClick(){
    imageUpload.current.click()
  }


  function onChangeHandler(e){

    const {name,value} = e.target;
    setInput({...input,[name]:value})

  }

  function onSubmitHandler(e){
    e.preventDefault()

    if(isLoggedIn){

      const recValues = {
        email:input.email,
        password:input.password
      }
      
      props.SIGN_IN(recValues)
      setShow(true)

    }else{
//signup here
    
   

    const formData = new FormData()
    formData.append('username',input.username)
    formData.append('email',input.email)
    formData.append('password',input.password)
    formData.append('image',file)

    props.SIGN_UP(formData)
    setShow(true)
    }

   
  }


  //start




  

 




  const handleClose = () =>{
    
    setShow(false)
    };
    
    

    


const onClickHandler=()=>{
  
  setShow(false)
 }

  return (
   <React.Fragment>
{isLoading ? <Spinner />:(<React.Fragment>
  {!isLoading && ( <div className='auth'>    
      <form onSubmit={onSubmitHandler} className={isLoggedIn?'forms':'forms2'}>
      <h2>{isLoggedIn? 'SignIn here':'Register here'} {isLoggedIn?<i style={{marginLeft:'5px'}} className="fa-sharp fa-solid fa-user"></i>:<i style={{marginLeft:'5px'}} className="fa-solid fa-users"></i>}</h2>
      <hr />
       {!isLoggedIn && <div>
          <label htmlFor="user">UserName : </label>
          <input  onChange={onChangeHandler} name='username' required autoFocus id='user' type="text" placeholder='type your username'/>
        </div>}
        <div>
          <label htmlFor="email">Email : </label>
          <input  onChange={onChangeHandler} name='email' required  id='email' type="email" placeholder='type your email'/>
        </div>
        <div>
          <label htmlFor="pass">Password : </label>
          <input  onChange={onChangeHandler} name='password' required id="pss" type="password" placeholder='type your password'/>
        </div>       
       {!preview && !isLoggedIn && <div>        
          <input  onChange={(e)=>setFile(e.target.files[0])} ref={imageUpload} style={{display:'none'}}  type="file" />
        </div>}
       {!isLoggedIn && !preview && <div ><button onClick={onImageClick} type='button' style={{borderRadius:'5px'}} className="negative ui button">Select an Image <i style={{marginLeft:'5px',fontSize:'16px'}} className="fa-regular fa-image"></i></button></div>}
      {preview && !isLoggedIn && <div><img style={{width:'100px',height:'100px',borderRadius:'7px'}} src={preview} alt="images" /></div>}
      {isLoggedIn && <div className='icons'><button  className="ui primary button">Submit</button></div>}
      {!isLoggedIn && <div className='icons'><button disabled={file?null:'true'}  className="ui primary button">Register</button></div>}
        <div className='btn'><button onClick={()=>setIsLoggedIn(!isLoggedIn)} type='button' className="positive ui button">{isLoggedIn? 'Switch to SignUp':'Switch to LogIn'}</button></div>
    
    {isError && isLoggedIn && <Modals title='Warning' desc={isError} btn='try again' show={show} setShow={setShow} handleClose={handleClose} onClickHandler={onClickHandler}/> }
    {isError && !isLoggedIn && <Modals title='Warning' desc={isError} btn='try again' show={show} setShow={setShow} handleClose={handleClose} onClickHandler={onClickHandler}/> }
     </form>
    </div>)}
</React.Fragment> )}
   </React.Fragment>
  )
}

const mapStateToProps = (state)=>{
  return {users:state.users,error:state.error}

}

export default connect(mapStateToProps,{SIGN_UP,SIGN_IN})(Auth)