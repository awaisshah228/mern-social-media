import React,{useEffect,useState}from 'react'
import { useParams } from 'react-router'
import Info from '../../components/profile/info'
import Posts from '../../components/profile/posts'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../../components/alert/ProfileLoader'
const Profile = () => {
    const {id}=useParams()
    const {profile} = useSelector(state => state)
  
    return (
        <div>
            {
                profile.loading ? <Loading />: <Info />
            }
            {/* <Info /> */}
            <Posts />

        </div>
    )
}

export default Profile
