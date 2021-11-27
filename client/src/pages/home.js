import React from 'react'
import Status from '../components/home/Status'
import Post from '../components/home/Post'

const Home = () => {
    return (
        <div className="row mx-0 col-md-8 ">
          <div>
          <Status/>
          <Post />
          </div>
          <div className="col-md-4">

          </div>
            
        </div>
    )
}

export default Home
