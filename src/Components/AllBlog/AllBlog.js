import React, { useEffect,useRef } from 'react'
import {connect} from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import Carousels from '../../Shared/Carousel'
import Spinner from '../../Shared/Spinner'
import { All_Post, ALL_USERS} from '../../Store/actions'
import classes from './allblog.module.css'

const AllBlog = (props) => {

  const navigate = useNavigate()
  
  const categoryRef = useRef()
  const post = props.post;
  const {isLoading} = props.error;

  


  useEffect(()=>{

    props.All_Post()
    props.ALL_USERS()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const renderList = post.map((items)=>(
    <div className={classes.items} key={items.id}>
   <div>
<div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
      <Link to={`/vlog/${items.id}`}><button className='ui primary button'>View Blog</button></Link>
      </li>     
    </ul>
  </div>
  <div className="card-body">
    <img className={classes.img1}  src={`${process.env.REACT_APP_PHOTO}/${items.image}`} alt="hello" /> 
    <h2 style={{fontFamily:'initial',fontWeight:'bold',marginTop:'10px'}} className="card-title">{items.title}</h2>
    <p style={{textAlign:'justify'}} className="card-text">{items.description}</p>
    <div className={classes.icons}> </div>  
  </div>  
</div>

    </div>
    </div>
  ))


  function onSubmitHandler(e){
    e.preventDefault()

    const selectedCategory = categoryRef.current.value;   
    navigate(`/search/${selectedCategory}`)

  }

  return (
   <React.Fragment>
   <div className={classes.carousels}><Carousels /></div>
    {isLoading?<Spinner />:(
      <div className={classes.final}>
      <div className={classes.final2}>
       {renderList} 
       </div>
       <div className={classes.extra}>        
       <button style={{width:'200px',borderRadius:'5px',marginBottom:'15px',marginRight:'10px'}} className='ui negative button'>Search Post by Category</button>
<div className="ui search">

  <div className="results" />
</div>

   <form onSubmit={onSubmitHandler}>   
       <select ref={categoryRef}  id="category">        
        <option value="/">--Select Category--</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Gaming">Gaming</option>
        <option value="Travelling">Travelling</option>
        <option value="Education">Education</option>
        <option value="Technology">Technology</option>
       </select>   
       <button style={{marginLeft:'10px'}} className='ui primary button' type='submit'>Submit</button>  
   </form>
      <div className={classes.recent}>
        <h2>Recent Post</h2>
        {post.map((items)=>{
          return (
            <div key={items.id} className={classes.texts}>
            <div><button style={{marginBottom:'10px'}}  className='ui button'>{items.title}</button></div>
           
            </div>
          )
        })}
       </div>
       </div>      
      </div>
       
       )}
   </React.Fragment>
  )
}

const mapStateToProps = (state)=>{

    return {post:Object.values(state.posts),error:state.error}
  
  }

export default connect(mapStateToProps,{All_Post,ALL_USERS})(AllBlog)