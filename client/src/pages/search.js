import React from 'react'
import { useLocation } from 'react-router'
import UserCard from '../components/UserCard'

const Search = () => {
    const location=useLocation()
    const state=location.state
    return (
        <>
            
        <h1>{state.username}</h1> 
        </>
    )
}

export default Search
