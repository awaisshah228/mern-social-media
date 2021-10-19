import React from 'react'
import  Avatar from './Avatar'
const UserCard = ({user}) => {
    return (
       <><div className='d-flex shadow-lg   p-2  align-item-center bg-dark border-bottom'> 
       <div>
       <Avatar src={user.avatar} size="big-avatar"/>
       </div>
      
       <div className="mx-3" >
                        <span className="d-block " style={{textAlign: 'left'}}>{user.username}</span>
                        
                        <small style={{opacity: 0.7}}>
                            { user.fullname}
                        </small>
                    </div>
       </div></>
    )
}

export default UserCard
