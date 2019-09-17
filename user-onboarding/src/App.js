import React, { useState } from 'react'

import './App.css'

import UserForm from './components/UserForm'
import Users from './components/Users'


export default function App() {
  const [users, setUsers] = useState([])

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
  }
  
  return (
    <div className="App">
      <UserForm users={users} addNewUser={addNewUser} />
      <Users users={users} />
    </div>
  )
}

