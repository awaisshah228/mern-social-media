import React,{useEffect, useState} from "react";
import { Nav } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux'
import { getDataAPI } from '../../utils/fetchData'
import UserCard from "../UserCard";
import {Link,useHistory} from 'react-router-dom'
import { GLOBALTYPES } from "../../redux/actions/globalType";
import '../../styles/search.css'
import { CircularProgress } from "@mui/material";
//import 'client\src\styles\search.css'
const Search = () => {
  const [search, setsearch] = useState('')
  const [loading, setloading] = useState(false)
  const [users, setusers] = useState('')
  const {auth} = useSelector(state => state)
  const history=useHistory()

  const dispatch = useDispatch()
  
  const handleSubmit=(e)=>{
      setloading(true)
      e.preventDefault()
      history.push({
        pathname : '/search',
        state : {
          username : search
        }
      })
      setloading(false)
      setsearch('')
      setusers([])

  }
  useEffect(()=>{
    if(!search){
      setusers('')
    }
      if(search && auth.token){
        setloading(true)
        getDataAPI(`search?username=${search}`,auth.token).then(res=> setusers(res.data.users)).catch(err=> {
          dispatch({type: GLOBALTYPES.ALERT, payload:{error: err.response.data.msg} })
        })
        setloading(false)
        // console.log(users)
      }
     
  },[search,auth.token,dispatch])
  return (
    <>
      <Nav className="me-auto d-flex justify-content-center  flex-column">
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0 d-flex  mx-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search this blog"
              size='50'
              htmlFor='search-box'
              onChange={e=> {setsearch(e.target.value)}}
              
            />
            { 
              loading && <small style={{position: 'absolute', right: '50px', top:'5px'}} className=''><CircularProgress style={{width:'25px',height:'25px'}} /></small> 
            }
              
            
            

            <div className="input-group-append" style={{opacity : search ? 100 : 0.3}} >
              <button className="btn btn-secondary" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          
         
        </form>
            <div className="dropd">  
                {
                  users && users.map(user=>(
                  //  
                  <Link className='nav-link py-1 ' to={`/profile/${user._id}`} key={user._id} onClick={()=>{setsearch('')
                  setusers([])}}> 
                    <UserCard user={user} ></UserCard>
                  </Link>
                  //console.log(user)
                  ))
                }
            </div>
       
        {/* <div >
          
          </div> */}
       </Nav>
    </>
  );
};

export default Search;
