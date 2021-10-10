import { postDataAPI } from "../../utils/fetchData"
import { GLOBALTYPES } from "./globalType"
export const login=(data)=>async (dispatch)=>{
    try {
        dispatch({type : GLOBALTYPES.ALERT, payload:{loading:true}}) 
        const res=await postDataAPI('login',data)
        dispatch({type : GLOBALTYPES.AUTH,
        payload:{
            token: res.data.access_token,
            user : res.data.user
        }
    })
        //console.log(res)
        localStorage.setItem("firstLogin",true)
        dispatch({ 
            type: GLOBALTYPES.ALERT,
            payload : {
                success: res.data.msg
            }
        })
    } catch (error) {
        dispatch({
            type : GLOBALTYPES.ALERT,
            payload :{
                error: error.response.data.msg
            }
        })
        
    }
}
export const refreshToken=()=> async(dispatch)=>{
    const firstLogin =localStorage.getItem("firstLogin")
    if(firstLogin){
        dispatch({type : GLOBALTYPES.ALERT, payload: {loading : true}})
        try {
            console.log("I am started")
            const res=await postDataAPI('refresh_token')
              console.log(res)
            dispatch({type : GLOBALTYPES.AUTH,
            payload:{
                token: res.data.access_token,
                user : res.data.user
            }
        })
        dispatch({type : GLOBALTYPES.ALERT, payload: {}})
        } catch (error) {
        dispatch({
            type : GLOBALTYPES.ALERT,
            payload :{
                error: error.response.data.msg
            }
        })
        }

    }

}