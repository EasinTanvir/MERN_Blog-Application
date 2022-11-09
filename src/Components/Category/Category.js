import React from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import classes from './category.module.css'

const Categorys = (props) => {

    const post = props.post;
    const params = useParams().id
    
   
    



    const renderList = post.filter((items)=>{
      return  items.category===params
})
   


const filterPost = renderList.map((items)=>(
    <div className={classes.items}>    
       <div style={{width:'420px'}} className="ui card">
       <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
      <Link to={`/vlog/${items.id}`}><button className='ui primary button'>View Blog</button></Link>
      </li>     
    </ul>
  </div>
  <div className="image">
    <img style={{objectFit:'cover',width:'370px',height:'230px'}} src={`${process.env.REACT_APP_PHOTO}/${items.image}`} alt=''/>
  </div>
  <div className="content">
    <h2 className="header">{items.title}</h2>    
    <div className="description">
     <p>{items.description}</p>
    </div>
  </div>  
</div>

    </div>
))

if(filterPost.length===0){
    return (
        <div className={classes.cats}>
          <div className={classes.cats1}><button style={{width:'400px',backgroundColor:'#555',color:'white'}} className='ui button'>No post Shared under that Category yet</button></div>
         <div><Link to='/create'> <button className='ui negative button'>Please Shared a Post</button></Link></div>
        </div>
    )
}

  return (
   
<div className={classes.post}>
<h1 >{params} Post</h1>
<hr style={{marginBottom:'20px'}}/>
    <div className={classes.final}>    
    {filterPost}
    </div>
   
</div>
  )
}

const mapStateToProps = (state)=>{

    return {post:Object.values(state.posts)}
  
  }

export default connect(mapStateToProps)(Categorys)