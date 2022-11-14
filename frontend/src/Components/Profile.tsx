//import { Link, Navigate, useNavigate } from "react-router-dom"
import {User} from '../model/User'
import React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import * as userService from '../Service/UserService'
import ListItem from './ListItem';

interface Props {
    user:User
}

export const Profile:React.FC = (/*{user}: Props*/) => {

  const [user1, setUsers] = useState<any[]>([]);
  const loadUser = async () => {
    const res = await userService.getUser(user1[0].id);
    setUsers(res.data);
  }

  useEffect(() => {
    loadUser()
  }, [])

  
  return (
    <div className="App">
      {user1.map((user) => {
        return(
          <ListItem user={user} key={user._id}/>
        );
      })}
    </div>
  );
}
export default Profile;
