import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/profile.css'
import {GLOBALTYPES} from '../../redux/actions/globalType'
import {updateProfileUser} from '../../redux/actions/profileAction'
import {checkImage} from '../../utils/imageUpload'
import Alert  from "../alert/Alert";

const EditProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initState = {
    fullname: "",
    mobile: "",
    address: "",
    website: "",
    story: "",
    gender: "",
  };
  const [userData, setUserData] = useState(initState);
  const { fullname, mobile, address, website, story, gender } = userData;

  const [avatar, setAvatar] = useState("");

  const { auth, theme,alert} = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setUserData(auth.user)
}, [auth.user])
  const handleInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]:value })
}

const changeAvatar = (e) => {
    const file = e.target.files[0]

    const err = checkImage(file)
    if(err) {
      console.log(err)
      return dispatch({
        type: GLOBALTYPES.ALERT, payload: {error: err}
    })
    }

   

    setAvatar(file)
}
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(updateProfileUser({userData, avatar, auth}))
  // if(alert.success =='Update Success!'){
  //   handleClose()
  // }

}


  return (
    <>
    {/* <Alert /> */}
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Button
        variant="outline-light"
        size="sm"
        className="shadow-none "
        onClick={handleShow}
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <form onSubmit={handleSubmit} className="m-4">
            <div className="info_avatar mb-3" >
              <img
                src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                alt="avatar"
                style={{ filter: theme ? "invert(1)" : "invert(0)" }}
              />
              <span>
                <i className="fas fa-camera" />
                <p>Change</p>
                <input
                  type="file"
                  name="file"
                  id="file_up"
                  accept="image/*"
                  onChange={changeAvatar}
                />
              </span>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="fullname"
                value={fullname}
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="mobile"
                value={mobile}
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Mobile</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="address"
                value={address}
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="story"
                value={story}
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Story</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="website"
                value={website}
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Website</label>
            </div>
            <div className='mb-5 d-flex justify-content-start p-auto'>
                  <div className="form-check form-check-inline ">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Male"
                        value="male"
                        defaultChecked
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="Male">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Female"
                        value="female"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="Female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Other"
                        value="other"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="Other">Other</label>
                    </div>
                  </div>
                 
          

            <div className="d-grid">
              <button
                className="btn btn-primary btn-login text-uppercase fw-bold"
                type="submit"
              >
                Edit Profile
              </button>
            </div>
            <hr className="my-4" />
            {/* <div className="d-grid mb-2">
                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                    </button>
                  </div> */}
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
    </>
  );
};

export default EditProfile;
