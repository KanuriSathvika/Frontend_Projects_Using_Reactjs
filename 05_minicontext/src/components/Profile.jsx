import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext';

function Profile() {
  const {user}=useContext(UserContext);
  
  if(!user) {return <h1>Not Logged it</h1>}
  
  return (
    <div>Profile:{user.username}</div>
  )
}

export default Profile;  