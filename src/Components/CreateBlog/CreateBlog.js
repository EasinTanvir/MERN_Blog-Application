import React,{useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../Shared/Spinner'
import {Craete_Post} from '../../Store/actions'
import classes from './createblog.module.css'

const CreateBlog = (props) => {
    const fileUploader = useRef()
    const categoryRef = useRef()

    const {userId,isSignIn} = props.auth
    
    const {isLoading} = props.error

    const [file,setFile] = useState()
    const [preview,setPreview] = useState()
    const [input,setInput] = useState({title:'',description:''})

    useEffect(()=>{

        if(!file){
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            setPreview(fileReader.result)
        }
        fileReader.readAsDataURL(file)

    },[file])

    function onImageHandler(){
        fileUploader.current.click()
    }


    function onChangeHandler(e){
        const {name,value} = e.target

        setInput({...input,[name]:value})

    }

    function onSubmitHandler(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('title',input.title)
        formData.append('description',input.description)
        formData.append('image',file)
        formData.append('category',categoryRef.current.value)
        formData.append('creator',userId)

        props.Craete_Post(formData,isSignIn)
        
    }

  return (
   <React.Fragment>
    {isLoading?<Spinner />:( <div className={classes.main}>
        <form onSubmit={onSubmitHandler} className={classes.forms}>
            
            <input required onChange={(e)=>setFile(e.target.files[0])} ref={fileUploader} style={{display:'none'}} type="file" />
           {!file && <div style={{marginBottom:'100px',marginTop:'50px'}}><button onClick={onImageHandler} className='ui negative button' type='button'>Select an Image</button></div>}
           <div className={classes.category} style={{marginLeft:'-90px'}}>     
             <select  className='ui button' style={{marginLeft:'10px',backgroundColor:'#444',color:'white'}} ref={categoryRef}  id="category">        
        <option >--Select Category--</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Gaming">Gaming</option>
        <option value="Travelling">Travelling</option>
        <option value="Education">Education</option>
        <option value="Technology">Technology</option>
       </select>
        </div>
       
            {preview && <div className={classes.imagess}><img  src={preview} alt="imagess" /></div>}
            <input onChange={onChangeHandler} name='title' autoFocus type="text" placeholder='Title' required/>
            <textarea rows='4' onChange={onChangeHandler} name='description' type="text" placeholder='Tell your story' required/>
            <div className={classes.btns}><button disabled={file?null:'true'}  className='ui primary button' type='submit'>Publish</button></div>
            
        </form>
{}
    </div>)}
   </React.Fragment>
  )
}
const mapStateToProps = (state)=>{
    return {       
        error:state.error,
        auth:state.auth
    }
  
  }

export default connect(mapStateToProps,{Craete_Post})(CreateBlog)