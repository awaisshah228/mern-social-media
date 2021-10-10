import { Toast } from "react-bootstrap"
import { useState } from "react"
const SingleToast=(props)=>{
    const [show, setshow] = useState(true)
    return(

        <>
         <Toast bg={props.bg} onClose={()=>{setshow(false)
        props.handleshow() }} show={show}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{props.title}</strong>
        <small className="text-muted">just now</small>
      </Toast.Header>
      <Toast.Body style={{color: "white"}}>{props.msg}</Toast.Body>
    </Toast>
        </>
    )
}
export default SingleToast