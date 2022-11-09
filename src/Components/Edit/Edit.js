import React,{useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import Spinner from '../../Shared/Spinner'
import classes from './edit.module.css'
import { Update_Post } from '../../Store/actions'

const Edit = (props) => {

  const params = useParams()
  const {isSignIn} = props.auth

const post = props.post[params.id]


  const {isLoading} = props.error
  const [input,setInput] = useState({title:post.title,description:post.description})




  function onChangeHandler(e){

    const {name,value} = e.target

    setInput({...input,[name]:value})

  }


  function onSubmitHandler(e){
    e.preventDefault()

    const recValues = {
      title:input.title,
      description:input.description
    }
    props.Update_Post(params.id,recValues,isSignIn)

  }
  return (
    <React.Fragment>
   <div className={classes.text}> <h2>Update Your Post</h2></div>
    {isLoading?<Spinner />:( <div className={classes.main}>
        <form onSubmit={onSubmitHandler} className={classes.forms}>            
 
            <input value={input.title} onChange={onChangeHandler} name='title' autoFocus type="text" placeholder='Title' required/>
            <input value={input.description} onChange={onChangeHandler} name='description' type="text" placeholder='Tell your story' required/>
            <div className={classes.btns}><button   className='ui primary button' type='submit'>Update</button></div>
        </form>
    </div>)}
   </React.Fragment>
  )
}

const mapStateToProps = (state)=>{
  return {       
      
     post:state.posts,
      error:state.error,
      auth:state.auth
  }

}

export default connect(mapStateToProps,{Update_Post})(Edit)