import { Toast } from "react-bootstrap";
import { useState,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalType";
const SingleToast = (props) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch()
  const alert = useSelector(state => state.alert)
  useEffect(() => {
    const timeout = setTimeout(() => {
       setshow(false);
     }, 3000);
     return () => {
      clearTimeout(timeout)
    }
    

   },[]);
  return (
    <>
      <Toast
        bg={props.bg}
        onClose={() => {
          setshow(false);
          props.handleshow();
        }}
        show={show}
        className='fade'
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.title}</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>{props.msg}</Toast.Body>
      </Toast>
    </>
  );
};
export default SingleToast;
