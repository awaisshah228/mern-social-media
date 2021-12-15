import { combineReducers } from "redux"
import auth from './authReducer'
import alert from "./alertReducer"
import theme from './themeReducer'
import search from './usersReducer'
import profile from './profileReducer'
import status from "./statusReducer"
import homePosts from "./postReducer"
export default combineReducers({
    auth,
    alert,
    theme,
    search,
    profile,
    status,
    homePosts
})