import { GLOBALTYPES } from "../actions/globalType";
const initialState={}

const usersReducer =(state=initialState,action)=>{
    switch(action.type){
        case GLOBALTYPES.SEARCH:
            return action.payload
        default:
            return state
         
    }
    
}
export default usersReducer