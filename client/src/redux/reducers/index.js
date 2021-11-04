import { combineReducers } from "redux"
import auth from './authReducer'
import alert from "./alertReducer"
import theme from './themeReducer'
import search from './usersReducer'
import profile from './profileReducer'
export default combineReducers({
    auth,
    alert,
    theme,
    search,
    profile
})