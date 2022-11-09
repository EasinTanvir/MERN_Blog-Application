import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import { Single_User,ALL_USERS } from '../../Store/actions'
import Spinner from '../../Shared/Spinner'
import classes from './viewUser.module.css'

const ViewUser = (props) => {
  const params = useParams().id
  const {isLoading} = props.error

  const users = props.user[params]
  

  useEffect(()=>{

    props.Single_User(params)
   

  },[params])



  return (
   
<React.Fragment>
{isLoading?<Spinner />:(<div className={classes.view}>
    <img width='200px' height='200px' style={{borderRadius:'50%'}} src={`${process.env.REACT_APP_PHOTO}/${users.image}`} alt="" />
     <div className={classes.items}>
     <table className="ui selectable inverted table">
  <thead>
    <tr>
      <th>UserName</th>
      <th>Email</th>
      <th>Total Post</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{users.username}</td>
      <td>{users.email}</td>
      <td>{users.places.length}</td>      
    </tr>    
    
  </tbody>
</table>
     </div>

    </div>)}
</React.Fragment>
  )
}
const mapStateToProps = (state)=>{

  return {user:state.users,error:state.error}

}

export default connect(mapStateToProps,{Single_User,ALL_USERS})(ViewUser)