import React from 'react'
import { Toast,ToastContainer } from 'react-bootstrap'
import  SingleToast from'./SingleToast'
import { useSelector,useDispatch } from 'react-redux'
import {GLOBALTYPES} from '../../redux/actions/globalType'
const Toasts = () => {
    const alert = useSelector(state => state.alert)
    const  dispatch = useDispatch()
    
   return (
        <>
         
  <ToastContainer position="top-end" className="p-3" style={{zIndex : 50,position:"static"}}>
      {alert.error && <SingleToast msg={alert.error} bg='danger' title='Error' handleshow={()=>{dispatch({type: GLOBALTYPES.ALERT,payload:{}})}}/>}
      {alert.success && <SingleToast msg={alert.success} bg='success' title='Success'  handleshow={()=>{dispatch({type: GLOBALTYPES.ALERT,payload:{}})}}/>}
   {/* <SingleToast/> */}
  </ToastContainer>

</>
    )
}

export default Toasts
