const Initial_State = {
    isSignIn:false,
    userId:null,
    token:null
   
}

export const AuthReducer = (state=Initial_State,action)=>{

    switch(action.type){
        case 'LOGIN_ENTRY':
            return {...state,userId:action.payload,isSignIn:action.token}
            case 'LOGOUT_ENTRY':
                return {...state,isSignIn:null,userId:null}

                case 'SET_TOKEN':
                    return {...state,token:action.token}

            default :
            return state

    }

}