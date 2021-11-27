import React,{useState} from 'react'

import Avatar from "../Avatar"
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from "../../redux/actions/globalType"
import StatusModal from '../StatusModal'


const Status = () => {
    const [show, setShow] = useState(false);

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <div className="status my-3 d-flex">
            <Avatar src={auth.user.avatar} size="big-avatar" />
            
            <button className="statusBtn flex-fill"
            onClick={handleShow}
            >
                {auth.user.username}, what are you thinking?
            </button>
        </div>
        
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <StatusModal show={show} handleShow={handleShow} handleClose={handleClose}/>

     
        </>)
}

export default Status
