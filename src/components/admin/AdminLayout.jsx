import React from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({children}) => {
  return (
    <div>
      <AdminHeader />
      <div className="d-flex">
          <main className="flex-grow-1 p-4" style={{marginTop: "56px" }}>{children}</main>
      </div>
      <AdminFooter />
    </div>
  )
}

export default AdminLayout