import React from 'react'
import writers from './writers'

const ProfileCard = ({writer}) => {
  return (
    <div className="card">
         <img src={`./images/${writer.avatar}.png`}
        width="300px"
        height="300px"
        alt=""
        />
        <div className="textGroup">
          <h3>writer.name</h3>
          <p>audre.lorde@hotmail.com</p>
          <p>+233-202-000-000</p>
        </div>
    </div>

  )
}

export default ProfileCard