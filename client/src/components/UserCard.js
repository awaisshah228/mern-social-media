import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
const UserCard = ({ children,user,handleClose}) => {
  
  return (
    <div className="d-flex shadow-lg   p-2  align-item-center bg-dark border-bottom">
    <Link className='nav-link py-1 hoveri  ' to={`/profile/${user._id}`} style={{color : "white"}} >

     <div className="d-flex " onClick={handleClose}>
        <div>
          <Avatar src={user.avatar} size="big-avatar" />
        </div>

        <div className="mx-3">
          <span className="d-block " style={{ textAlign: "left" }}>
            {user.username}
          </span>

          <small style={{ opacity: 0.7 }}>{user.fullname}</small>
        </div>
        
        
      </div>
    </Link>
    <div className="my-auto" style={{marginLeft: "auto"}}>
        {children}
        </div>
     
    </div>
  );
};

export default UserCard;
