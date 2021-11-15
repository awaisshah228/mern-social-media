import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";

const Followers = ({ users, setShowFollowers, showFollowers }) => {
  const { auth } = useSelector((state) => state);

  const handleClose = () => setShowFollowers(false);
  const handleShow = () => setShowFollowers(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showFollowers} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
              <h5 className="text-center">Followers</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <hr /> */}

          <div className="follow_content" style={{ color: "white" }}>
            {users.map((user) => (
              <UserCard key={user._id} user={user} handleClose={handleClose}>
                {auth.user._id !== user._id && <FollowBtn user={user} />}
              </UserCard>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Followers;
