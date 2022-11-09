import axios from 'axios'
import history from '../../Shared/history'



export const Extra_LogIn = (uid,token) =>{
    return {
        type:'LOGIN_ENTRY',
        payload:uid,
        token:token
    }
}

export const SIGN_UP =(formValue)=> async dispatch=>{
    
    try{
        dispatch({type:'WAY'})
        const res = await axios.post(process.env.REACT_APP_PHOTO+'/api/signup',formValue)
        localStorage.setItem('userData',JSON.stringify({userId:res.data.userId,token:res.data.token}))
        dispatch({type:'SIGN_UP',payload:res.data.userId})
        //dispatch({type:'LOGIN_ENTRY',payload:res.data.userId,token:res.data.token})       
       await dispatch(Extra_LogIn(res.data.userId,res.data.token))
        dispatch({type:'SET_TOKEN',token:res.data.token})
        dispatch({type:'SUCCESS'})
        history.push('/')
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }
}


export const SIGN_IN =(formValue)=> async dispatch=>{

    
    
    try{
        dispatch({type:'WAY'})
        const res = await axios.post(process.env.REACT_APP_PHOTO+'/api/signin',formValue)
        dispatch({type:'SIGN_IN',payload:res.data.userId})
        localStorage.setItem('userData',JSON.stringify({userId:res.data.userId,token:res.data.token}))
        //dispatch({type:'LOGIN_ENTRY',payload:res.data.userId,token:res.data.token})       
        await dispatch(Extra_LogIn(res.data.userId,res.data.token))
        dispatch({type:'SET_TOKEN',token:res.data.token})
        dispatch({type:'SUCCESS'})
        history.push('/')
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }
}


export const ALL_USERS =()=> async dispatch=>{
    
    try{
        dispatch({type:'WAY'})
        const res = await axios.get(process.env.REACT_APP_PHOTO+'/api/allusers')
        dispatch({type:'ALL_USERS',payload:res.data.user})      
        dispatch({type:'SUCCESS'})       
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }
}




export const Craete_Post = (formValue,token) => async dispatch =>{

    try{
        dispatch({type:'WAY'})
       const res = await axios.post(process.env.REACT_APP_PHOTO+'/api/createpost',formValue,{
        headers:{
            Authorization : 'Bearer '+token
        }
       })
       dispatch({type:'CREATE_POST',payload:res.data.posts})       
       dispatch({type:'SUCCESS'})
       history.push('/')
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}

export const All_Post = () => async dispatch =>{

    try{
        dispatch({type:'WAY'})
       const res = await axios.get(process.env.REACT_APP_PHOTO+'/api/allpost')
       dispatch({type:'ALL_POST',payload:res.data.posts})       
       dispatch({type:'SUCCESS'})      
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}


export const PostBy_Creator = (id) => async dispatch =>{

    try{
        dispatch({type:'WAY'})
       const res = await axios.get(`${process.env.REACT_APP_PHOTO}/api/getpostbycreator/${id}`)
       dispatch({type:'POSTBY_CREATOR',payload:res.data.postbycreator})       
       dispatch({type:'SUCCESS'})      
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}


export const Single_Post = (id) => async dispatch =>{

    try{
        dispatch({type:'WAY'})
       const res = await axios.get(`${process.env.REACT_APP_PHOTO}/api/singlepost/${id}`)
       dispatch({type:'SIGNLE_POST',payload:res.data.post})       
       dispatch({type:'SUCCESS'})      
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}


export const Update_Post = (id,formValue,token) => async dispatch =>{

    try{
        dispatch({type:'WAY'})
       const res = await axios.patch(`${process.env.REACT_APP_PHOTO}/api/updatepost/${id}`,formValue,{
        headers:{
            Authorization : 'Bearer '+token
        }
       })
       dispatch({type:'EDIT_POST',payload:res.data.post})       
       dispatch({type:'SUCCESS'})    
       history.push('/')  
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}


export const Delete_Post = (id,token) =>async dispatch=>{

    try{
        dispatch({type:'WAY'})
         await axios.delete(`${process.env.REACT_APP_PHOTO}/api/deletepost/${id}`,{
            headers:{
                Authorization : 'Bearer '+token
            }
           })
        dispatch({type:'DELETE_POST',payload:id})       
        dispatch({type:'SUCCESS'})    
        history.push('/')  
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}



export const Single_User = (id) =>async dispatch=>{

    try{
        dispatch({type:'WAY'})
        const res =  await axios.get(`${process.env.REACT_APP_PHOTO}/api/singleuser/${id}`)
        dispatch({type:'SINGLE_USERS',payload:res.data.user})       
        dispatch({type:'SUCCESS'})       
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}


export const Update_Pass = (id,formValue) =>async dispatch=>{

    try{
        dispatch({type:'WAY'})
        const res =  await axios.patch(`${process.env.REACT_APP_PHOTO}/api/updatepass/${id}`,formValue)
        dispatch({type:'UPDATE_PASS',payload:res.data.user})       
        dispatch({type:'SUCCESS'})       
    }catch(err){
        dispatch({type:'ERROR',payload:err.response.data.message})
    }

}






export const Log_Out = ()=>{

    localStorage.removeItem('userData')
    return {
        type:'LOGOUT_ENTRY'
    }
}