import React from "react";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const { homePosts } = useSelector((state) => state);
  return (
    <div className="row mx-0 col-md-8 ">
      <div>
        <Status />
        {
          homePosts.loading ? <CircularProgress/> :
          homePosts.result===0 
              ? <h2>No Post</h2> : <Posts/>
        }
        {/* <Post /> */}
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Home;
