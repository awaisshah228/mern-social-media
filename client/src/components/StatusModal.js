import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";

const StatusModal = ({ show, handleClose }) => {
  const [content, setcontent] = useState("");
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-flex flex-column">
              <div className="mb-3">
                <textarea
                  name="content"
                  id=""
                  rows="4"
                  cols="50"
                  className="form-control"
                  placeholder={`${auth.user.username} , What are You Thinking?`}
                  onChange={(e) => setcontent(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="file1" className="m-2">
                  <CameraAltIcon />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file1"
                  className="form-control d-none"
                />
                <label htmlFor="file2">
                  <ImageIcon />
                </label>
                <input
                  type="button"
                  name="file"
                  id="file2"
                  className="form-control d-none"
                />
              </div>
              <div className="" >
                  <Button variant="dark" className="outline-none w-100">Post</Button>
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
