import _ from 'lodash'

export const postReducer = (state={},action) => {

    switch(action.type){
        case 'CREATE_POST':
            return {...state,[action.payload.id]:action.payload}
            
            case 'SIGNLE_POST':
                return {...state,[action.payload.id]:action.payload}
                
                case 'EDIT_POST':
                    return {...state,[action.payload.id]:action.payload}       
                   
                   case 'ALL_POST':
                    return {...state,..._.mapKeys(action.payload,'id')}

                    case 'DELETE_POST':
                   return _.omit(state,action.payload)

            default :
            return state

    }
 
}

