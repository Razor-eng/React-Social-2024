import React from 'react'
import SidebarItems from './SidebarItems'
import SidebarUser from './SidebarUser'
import './Sidebar.css'

const Sidebar = ({ setShadow }) => {
    return (
        <>
            <SidebarUser />
            <SidebarItems setShadow={setShadow} />
            <label htmlFor="create-post" className='btn btn-primary' id='create' >Create Post</label>
        </>
    )
}

export default Sidebar