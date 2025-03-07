import React from 'react'
import './User.css'

const User = () => {
  return (
    <div className='user'>
        <div className='user-img'>
          <img src="http://localhost:5173/img/profile-img.png" alt="" className='img-fluid' />
        </div>
        <div className='user-info'>
          <p className='user-name'>홍길동</p>
          <p className='user-account'>관리자</p>
        </div>
    </div>
  )
}

export default User