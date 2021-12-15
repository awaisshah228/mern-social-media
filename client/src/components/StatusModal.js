import React, { useState,useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";
import { GLOBALTYPES } from "../redux/actions/globalType";
import { createPost } from "../redux/actions/postAction"
const StatusModal = ({ show, handleClose }) => {
  const [content, setcontent] = useState("");
  const [images, setImages] = useState([])
  const [stream, setStream] = useState(false)
  const videoRef = useRef()
  const refCanvas = useRef()
  const [tracks, setTracks] = useState('')


  const { auth,theme ,status} = useSelector((state) => state);
  const dispatch=useDispatch()

  const handleChangeImages=(e)=>{
    //   console.log(e.target.files)
    const files = [...e.target.files]
    
    let err = ""
    let newImages = []

    files.forEach(file => {
        console.log(file)
        if(!file) return err = "File does not exist."

        if(file.size > 1024 * 1024 * 5){
            console.log("done")
            return err = "The image/video largest is 5mb."
        }

        return newImages.push(file)
    })

    if(err) dispatch({ type: GLOBALTYPES.ALERT, payload: {error: err} })
    setImages([...images, ...newImages])
  }
  const deleteImages = (index) => {
    const newArr = [...images]
    newArr.splice(index, 1)
    setImages(newArr)
}

const handleStream = () => {
    setStream(true)
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true})
        .then(mediaStream => {
            videoRef.current.srcObject = mediaStream
            videoRef.current.play()

            const track = mediaStream.getTracks()
            setTracks(track[0])
        }).catch(err => console.log(err))
    }
}
const handleStopStream = () => {
    tracks.stop()
    setStream(false)
}
const handleCapture = () => {
    const width = videoRef.current.clientWidth;
    const height = videoRef.current.clientHeight;

    refCanvas.current.setAttribute("width", width)
    refCanvas.current.setAttribute("height", height)

    const ctx = refCanvas.current.getContext('2d')
    ctx.drawImage(videoRef.current, 0, 0, width, height)
    let URL = refCanvas.current.toDataURL()
    setImages([...images, {camera: URL}])
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(images.length === 0)
  return dispatch({ 
      type: GLOBALTYPES.ALERT, payload: {error: "Please add your photo."}
  })

  // if(status.onEdit){
  //     dispatch(updatePost({content, images, auth, status}))
  // }else{
      dispatch(createPost({content, images, auth}))
  // }
  

  setcontent('')
  setImages([])
  if(tracks) tracks.stop()
  dispatch({ type: GLOBALTYPES.STATUS, payload: false})
  handleClose()
}

  return (
    <div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
              <div className="mb-3">
                <textarea
                  name="content"
                  id=""
                  rows="4"
                  cols="50"
                  className="form-control mb-3"
                  placeholder={`${auth.user.username} , What are You Thinking?`}
                  onChange={(e) => setcontent(e.target.value)}
                ></textarea>

                <div className="d-flex flex-row flex-wrap mb-3" >
                        {
                            images.map((image,index)=>(
                                <div key={index} style={{flexBasis:"32%" ,margin:2 ,backgroundColor: "black" ,position:"relative"}} >
                                  <img src={image.camera ? image.camera : URL.createObjectURL(image)} alt="images" style={{objectFit:"contain",width:"100%",height:"100%"}} className="" />
                                  <span className="close-img btn" onClick={()=>deleteImages(index)} > &times;</span>

                                  
                                </div>
                            ))
                        }
                </div>
                {
                        stream && 
                        <div className="stream " style={{position: "relative"}}>
                            <video autoPlay muted ref={videoRef} width="100%" height="100%"
                            style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                            
                            <span className="close-img" onClick={handleStopStream}>&times;</span>
                            <canvas ref={refCanvas} style={{display: 'none'}} />
                        </div>
                    }
              </div>
              <div className="mb-3">
                  {
                      stream ?<label htmlFor="camera" className="m-2 btn" onClick={handleCapture}>
                      <CameraAltIcon style={{color: "blue"}}/>
                    </label> : <label htmlFor="camera" className="m-2 btn" onClick={handleStream}>
                  <CameraAltIcon />
                </label>
                  }
                
                <input
                  type="button"
                  name="file"
                  id="camera"
                  className="form-control d-none "
                 
                />
                <label htmlFor="file2">
                  <ImageIcon />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file2"
                  className="form-control d-none"
                  onChange={handleChangeImages}
                  multiple
                  accept="image/*,video/*"
                />
              </div>
              <div className="" >
                  <Button variant="dark" className="outline-none w-100" type="submit">Post</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default StatusModal;
