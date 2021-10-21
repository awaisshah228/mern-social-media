import React,{useEffect,useState}from 'react'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import Avatar from '../Avatar'
import {Button} from 'react-bootstrap'
import img1 from '../../images/bg.jpg'
import img2 from '../../images/bg1.jpg'
const Info = () => {
    const {id}=useParams()
    const {auth} = useSelector(state => state)

    const dispatch =useDispatch()
    const [userData, setuserData] = useState([])
    //console.log(id)
    useEffect(() => {
        if(id==auth.user._id){
            setuserData([auth.user])
            console.log(userData)
        }
    },[id])
    //console.log(id)
    return (
        <div className=''>
          { userData.map(user=>(
              <div key={user._id} className='container '>
                  <div className='row p-4  ' style={{backgroundImage: `url(${img2})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundOrigin: 'center'}}>
                      <div className="col-4">
                      <Avatar src={user.avatar} size="supper-avatar"  />
                      </div>
                      <div className="col d-flex flex-column shadow p-3 " style={{textAlign: 'left', color:'white' ,background: 'rgba(45, 41, 43, 0.8)' ,borderRadius: '3px' }}>
                          <div className="d-flex justify-content-between">
                          {user.username}
                          <Button variant="outline-light" size="sm" className='shadow-none '>Edit Profile</Button>

                          </div>
                      
                      <div className='d-flex '>
                      <span className=''  style={{marginRight:'5px'}}>{user.followers.length} Followers</span>
                      <span>{user.following.lenght} Following</span>
                      </div>
                      <h6>{user.fullname} <span className="text-danger">{user.mobile}</span></h6>
                            <p className="m-0">{user.address}</p>
                            <h6 className="m-0">{user.email}</h6>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                            <p>{user.story}</p>
                      </div>
                      {/* <img src={img1} alt="" /> */}
                      
                  </div>
                 
                 
              </div>
          ))}
        </div>
        
    )
}

export default Info
