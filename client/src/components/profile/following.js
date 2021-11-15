import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import UserCard from '../UserCard';
import FollowBtn from '../FollowBtn';
import { useSelector } from 'react-redux';

const Following = ({users, setShowFollowing, showFollowing}) => {
    const handleClose = () => setShowFollowing(false);
    const handleShow = () => setShowFollowing(true);

    const {auth} = useSelector(state => state)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showFollowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal following</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
}

export default Following
