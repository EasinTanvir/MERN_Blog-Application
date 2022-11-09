import _ from 'lodash'

export const AllPostReducer = (state={},action) => {

    switch(action.type){
     

                    case 'POSTBY_CREATOR':
                        return {..._.mapKeys(action.payload,'id')}
                   
               

            default :
            return state

    }
 
}

