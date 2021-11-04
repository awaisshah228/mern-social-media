import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Loading from './Loading'
import './Toasts'
import Toasts from './Toasts'
const Alert = () => {
     const state = useSelector(state => state)
     const {alert}=state
    return (
        <div style={{zIndex:'1058'}}>
            {alert.loading && <Loading/>}
            <Toasts/>

            
           
        </div>
    )
}

export default Alert
