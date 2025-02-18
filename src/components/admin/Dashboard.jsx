import React, { useContext } from 'react'
import { AdminAuth } from '../context/AdminAuth';

const Dashboard = () => {
    const {logout} = useContext(AdminAuth);
  return (
    <div>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard