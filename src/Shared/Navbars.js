import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Log_Out } from '../Store/actions'

const Navbars = (props) => {
  const {isSignIn,userId} = props.auth
 


  const [small,setSmaill] = useState(false)


  const checkScreenSize = ()=>{
    

      setSmaill(window.innerWidth <900)
  }
  

  function onButtonHandler(){
    props.Log_Out()
  }

  useEffect(()=>{
      checkScreenSize()
      window.addEventListener('resize',checkScreenSize)

      return ()=>window.removeEventListener('resize',checkScreenSize)


  },[])

  return (
    <div className='navbars'>
   {small? (
<React.Fragment>
<div className='items3'><h3>BlogPost <i style={{marginLeft:'5px'}} className="fa-solid fa-rss"></i></h3></div>

<nav className='extra'>
   
   <ul className='itemss'>  

   <div className="ui compact menu">
<div className="ui simple dropdown item">Menu
<i style={{color:'red',paddingRight:'22px'}} className="fa-solid fa-bars"></i>
<i className="dropdown icon"></i>
<div className="menu">
<div className="item"><li><Link to='/'><i style={{marginRight:'5px'}} className="fa-sharp fa-solid fa-house"></i>Home</Link></li></div>
<div className="item"> <li><Link to='/users'>All Users</Link></li></div>
{isSignIn && <div className="item"><li><Link to='/create'>Create Blog</Link></li></div>}
{!isSignIn && <div className="item"><li><Link to='/auth'>Authonication</Link></li></div>}
{isSignIn && <div className="item"> <li><Link to={`/myblog/${userId}`}>My Blog</Link></li></div>}
{isSignIn && <div className="item"> <li><Link to={`/profile/${userId}`}>Profile</Link></li></div>}
{isSignIn && <div className="item"> <li><Link to='/auth'><button onClick={onButtonHandler}  className='ui negative button'>LogOut</button></Link></li></div>}
</div>
</div>
</div>         
    
   </ul>
</nav>
</React.Fragment>

   ):(<React.Fragment>
    <div className='items3'><h3>BlogPost <i style={{marginLeft:'5px'}} className="fa-solid fa-rss"></i></h3></div>
    <div>
      <ul className='items1'>
        <li><Link to='/'><i style={{marginRight:'5px'}} className="fa-sharp fa-solid fa-house"></i>Home</Link></li>
        <li><Link to='/users'>All Users</Link></li>
      { isSignIn && <li><Link to='/create'>Create Blog</Link></li>}
       {isSignIn && <li><Link to={`/myblog/${userId}`}>My Blog</Link></li>}
      { isSignIn && <li><Link to={`/profile/${userId}`}>Profile</Link></li>}
      </ul>
    </div>
    <div>
      <ul  className='items2'>
    {  !isSignIn && <li><Link to='/auth'><i  style={{marginRight:'5px',fontSize:'20px'}} className="fa-sharp fa-solid fa-user-plus"></i>Authonication</Link></li>}
     {isSignIn && <li><Link to='/auth'><button onClick={onButtonHandler}  className='ui negative button'>LogOut</button></Link></li>}
      </ul>
    </div>
   </React.Fragment>)}
    </div>
  )
}

const mapStateToProp = (state)=>{
  return {auth:state.auth}

}

export default connect(mapStateToProp,{Log_Out})(Navbars)