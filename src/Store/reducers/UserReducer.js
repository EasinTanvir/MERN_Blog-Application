import _ from 'lodash'
export const usersReducers = (state={},action)=>{

    switch(action.type){
        case 'SIGN_UP':
            return {...state,[action.payload]:action.payload}

            case 'SIGN_IN':
                return {...state,[action.payload]:action.payload}

                case 'ALL_USERS':
                return {...state,..._.mapKeys(action.payload,'id')}

                case 'SINGLE_USERS':
                    return {...state,[action.payload.id]:action.payload}
                    case 'UPDATE_PASS':
                    return {...state,[action.payload.id]:action.payload}

                    
            
                default :
            return state

    }

}