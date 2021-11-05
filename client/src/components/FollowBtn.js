import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { follow,unfollow} from "../redux/actions/profileAction";


const FollowBtn = ({ user }) => {
  const [followed, setfollowed] = useState(false);
  
  const {auth,profile} = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log(user);
  const handleFollow=()=>{
      setfollowed(true)
      dispatch(follow({users: profile.users,user,auth}))
     
  }
  const handleUnFollow=()=>{
      setfollowed(false)
      dispatch(unfollow({users: profile.users,user,auth}))
     
  }
  return (
    <div>
      {followed ? (
        <Button variant="outline-danger" size="sm" className="shadow-none " onClick={handleUnFollow}>
          Unfollow
        </Button>
      ) : (
        <Button variant="outline-primary" size="sm" className="shadow-none " onClick={handleFollow}>
          Follow
        </Button>
      )}
    </div>
  );
};

export default FollowBtn;
