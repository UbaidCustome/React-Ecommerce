import React from 'react'
import Sidebar from '../common/Sidebar'
import { Link } from 'react-router-dom'

const Sample = () => {
  return (
    <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-between mt-5 pb-3'>
            <h3 className='pb-0 mb-0'>Your Title</h3>
            <Link to='#' className='btn btn-primary'>Add New</Link>
          </div>
          <div className='col-md-3'>
            <Sidebar/>
          </div>
          <div className='col-md-9'>
            <div className='card shadow'>
                <div className='card-body p-4'>

                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sample