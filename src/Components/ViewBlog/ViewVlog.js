import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Spinner from '../../Shared/Spinner'
import { Single_Post } from '../../Store/actions'
import classes from './viewblog.module.css'

const ViewVlog = (props) => {

    const params = useParams()
    const {isLoading} = props.error;
    const {userId} = props.userId

const finalPost = props.post[params.id]
const userIdentity = finalPost.creator

    useEffect(()=>{

  props.Single_Post(params.id)



    },[])

  return (
    <div>
{isLoading?<Spinner />:(<div className="card text-center">

<div className="card-body">
  <img style={{width:'500px',height:'300px',objectFit:'cover',borderRadius:'10px'}} src={`${process.env.REACT_APP_PHOTO}/${finalPost.image}`} alt="hello" /> 
 {userId !==userIdentity && <div className={classes.icons2}> <Link to={`/user/${userIdentity}`}><button className='ui primary button'>View Author</button></Link></div>}
  <h1 style={{fontFamily:'initial',fontWeight:'bold',marginTop:'10px'}} className="card-title">{finalPost.title}</h1>
  <p style={{textAlign:'justify',width:'80%',margin:'auto'}} className="card-text">{finalPost.description}</p>
{userId === finalPost.creator && (  <div className={classes.icons}>
    <Link to={`/update/${finalPost.id}`}><button className='ui primary button'>Edit</button></Link>
   <Link to={`/delete/${finalPost.id}`}><button className='ui red button'>Delete</button></Link>
   </div>  )}
</div>  
</div>)}

  </div>
  )
}

const mapStateToProps = (state)=>{

    return {post:state.posts,error:state.error,userId:state.auth}
  
  }

export default connect(mapStateToProps,{Single_Post})(ViewVlog)