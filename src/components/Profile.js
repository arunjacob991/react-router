import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Profile() {

    let navigate = useNavigate();

    let { username } = useParams();

  return (
    <div>
        This is Profile page for { username }
        <button
            onClick = {() => {
                navigate('/about')
            }}
        >
            Click for redirecting
        </button>
    </div>
  )
}

export default Profile