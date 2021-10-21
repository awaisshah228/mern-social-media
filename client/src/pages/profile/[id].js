import React,{useEffect,useState}from 'react'
import { useParams } from 'react-router'
import Info from '../../components/profile/info'
import Posts from '../../components/profile/posts'
import {useSelector,useDispatch} from 'react-redux'
const Profile = () => {
    const {id}=useParams()
    const {auth} = useSelector(state => state)
  
    return (
        <div>
            <Info />
            <Posts />

        </div>
    )
}

export default Profile
