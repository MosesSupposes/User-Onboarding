import React from 'react'

export default function Users(props) {
    return (
        <div className="users">
            {props.users.map(function renderUser(user, i) {
                return <User key={i} user={user} />
            })}
        </div>
    )
}


function User(props) {
    return (
        <div className="user">
            <p><span className="label">Name:</span> {props.user.name}</p>
            <p><span className="label">Email:</span> {props.user.email}</p>
        </div>
    )
} 