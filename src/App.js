/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {unstable_HistoryRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import AllBlogsPage from './Pages/AllBlogsPage'
import AllUsersPage from './Pages/AllUsersPage'
import AuthPage from './Pages/AuthPage'
import CreateBlogPage from './Pages/CreateBlogPage'
import MyBlogPage from './Pages/MyBlogPage'
import NavbarPage from './Pages/NavbarPage'
import history from './Shared/history'
import ViewVlogPage from './Pages/ViewVlogPage'
import EditPage from './Pages/EditPage'
import DeletePage from './Pages/DeletePage'
import SingleUserPage from './Pages/SingleUserPage'
import CategoryPage from './Pages/CategoryPage'
import ViewUserPage from './Pages/ViewUserPage'
import {Extra_LogIn} from './Store/actions'



const App = (props) => {

  const {isSignIn} = props.auth

  useEffect(()=>{

  const storeData =  JSON.parse(localStorage.getItem('userData'))
  if(storeData && storeData.token){
    props.Extra_LogIn(storeData.userId,storeData.token)

  }

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let users;
  if(isSignIn){
    users =(
      <Routes>
       <Route path='/' element={<AllBlogsPage />} />
      <Route path='/myblog/:id' element={<MyBlogPage />} />
      <Route path='/users' element={<AllUsersPage />} />
      <Route path='/create' element={<CreateBlogPage />} />
      <Route path='/vlog/:id' element={<ViewVlogPage />} />
      <Route path='/update/:id' element={<EditPage />} />
      <Route path='/delete/:id' element={<DeletePage />} />
      <Route path='/profile/:id' element={<SingleUserPage />} />
      <Route path='/search/:id' element={<CategoryPage />} />
      <Route path='/user/:id' element={<ViewUserPage />} />
      <Route path='*' element={<Navigate to='/' replace/>}/> 
      </Routes>
    )
  }else{
    users = (
      <Routes>
        <Route path='/' element={<AllBlogsPage />} />
        <Route path='/users' element={<AllUsersPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/vlog/:id' element={<ViewVlogPage />} />
        <Route path='/search/:id' element={<CategoryPage />} />
        <Route path='/user/:id' element={<ViewUserPage />} />
        <Route path='*' element={<Navigate to='/auth' replace/>}/> 
      </Routes>

    )
  }

  return (
    <Router history={history}>
    <NavbarPage />
      <main>
     {users}
      </main>
    </Router>
  )
}

const mapStateToProps = (state)=>{

  return {auth:state.auth}

}

export default connect(mapStateToProps,{Extra_LogIn})(App)