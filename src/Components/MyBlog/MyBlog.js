import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { PostBy_Creator } from '../../Store/actions'
import Spinner from '../../Shared/Spinner'
import classes from './myblog.module.css'
//


const MyBlog = (props) => {


const params = useParams()
const {isLoading} = props.error;

  useEffect(()=>{

    props.PostBy_Creator(params.id)

  },[])


const post = props.post

if(post.length===0){
  return (
    <div className={classes.btns}>
    <div  className="ui cards">
    <div style={{padding:'10px',width:'450px',height:'180px'}} className="card">
      <div className="content">   
        <div className="description">
         <h3 style={{textAlign:'center',fontWeight:'bold'}}>You didn't Share a blog yet</h3>
        </div>
        <div className="extra content">
        <div  className="ui two buttons">      
     <Link to='/create'> <button style={{marginRight:'135px',marginTop:'40px'}}  className="ui negative button"> Please Share a Blog</button></Link>
    </div>
    </div>
      </div>  
    </div>
    </div>
    </div>)
}
const renderList = post.map((items)=>(
  <div className={classes.items} key={items.id}>
 <div>
<div className="card text-center">

<div className="card-body">
  <img className={classes.myimg}  src={`${process.env.REACT_APP_PHOTO}/${items.image}`} alt="hello" /> 
  <h2 style={{fontFamily:'initial',fontWeight:'bold',marginTop:'10px'}} className="card-title">{items.title}</h2>
  <p className="card-text">{items.description}</p>
   <div className={classes.icons}>
   <Link to={`/update/${items.id}`}><button className='ui primary button'>Edit</button></Link>
   <Link to={`/delete/${items.id}`}><button className='ui red button'>Delete</button></Link>
   </div>  
</div>  
</div>

  </div>
  </div>
))



  return (
    <React.Fragment>
    {isLoading?<Spinner />:( <div className={classes.final}>{renderList}</div>)}


 
  


    
   </React.Fragment>
  )
}

const mapStateToProps = (state)=>{

  return {post:Object.values(state.allposts),error:state.error}

}

export default connect(mapStateToProps,{PostBy_Creator})(MyBlog)