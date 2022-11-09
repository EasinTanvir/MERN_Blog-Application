const Initial_State = {
    isLoading:false,
    isError:null
}

export const errorReducer = (state=Initial_State,action)=>{

    switch(action.type){
        case 'WAY':
            return {...state,isLoading:true,isError:null}
            case 'SUCCESS':
                return {...state,isLoading:false,isError:null}

                case 'ERROR':
                    return {...state,isLoading:false,isError:action.payload}

            default :
            return state

    }

}