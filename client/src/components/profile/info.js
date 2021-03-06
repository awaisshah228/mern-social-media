import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar";
import { Button } from "react-bootstrap";
import img1 from "../../images/bg.jpg";
import img2 from "../../images/bg1.jpg";
import EditProfile from "./EditProfile";
import { getProfileUsers } from "../../redux/actions/profileAction";
import FollowBtn from "../FollowBtn";
import Followers from "./followers";
import Following from "./following";
const Info = () => {
  const { id } = useParams();
  const { auth, profile } = useSelector((state) => state);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const dispatch = useDispatch();
  const [userData, setuserData] = useState([]);
  //console.log(id)
  useEffect(() => {
    if (id == auth.user._id) {
      setuserData([auth.user]);
      // console.log(userData);
    } else {
      dispatch(getProfileUsers({ users: profile.users, id, auth }));
      const newData = profile.users.filter((user) => user._id === id);
      setuserData(newData);
    }
  }, [id, auth, dispatch, profile.users]);
  //console.log(id)
  return (
    <div className="">
      {userData.map((user) => (
        <div key={user._id} className="container ">
          <div
            className="row p-4  "
            style={{
              backgroundImage: `url(${img2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundOrigin: "center",
            }}
          >
            <div className="col-4">
              <Avatar src={user.avatar} size="supper-avatar" />
            </div>
            <div
              className="col d-flex flex-column shadow p-3 infopro "
              style={{
                textAlign: "left",
                color: "white",
                background: "rgba(45, 41, 43, 0.8)",
                borderRadius: "3px",
              }}
            >
              <div className="d-flex justify-content-between">
                {user.username}
                {user._id === auth.user._id ? (
                  <EditProfile />
                ) : (
                  <FollowBtn user={user} />
                )}
              </div>

              <div className="d-flex  ">
                <span
                  className="follows"
                  style={{ marginRight: "5px" }}
                  onClick={() => setShowFollowers(true)}
                >
                  {user.followers.length} Followers
                </span>
                <span
                  className="follows"
                  onClick={() => setShowFollowing(true)}
                >
                  {user.following.length} Following
                </span>
              </div>
              <h6>
                {user.fullname} <br />
                {/* <span className="text-danger">{user.mobile}</span> */}
              </h6>
              <p className="m-0">Address : {user.address}</p>
              <h6 className="m-0">Email :{user.email}</h6>

              <a href={user.website} target="_blank" rel="noreferrer">
                {user.website}
              </a>
              <p style={{ textAlign: "center" }}>{user.story}</p>
            </div>
            {/* <img src={img1} alt="" /> */}
            {showFollowers && (
              <Followers
                users={user.followers}
                setShowFollowers={setShowFollowers}
                showFollowers={showFollowers}
              />
            )}
            {showFollowing && (
              <Following
                users={user.following}
                setShowFollowing={setShowFollowing}
                showFollowing={showFollowing}

              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
