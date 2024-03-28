import React from 'react'

const SidebarUser = () => {
    return (
        <div className="profile">
            <div className="profile-photo">
                <img src="/images/user.jpg" alt="user" />
            </div>
            <div className="handle">
                <h4>Rajat Maharana</h4>
                <p className="text-muted">
                    @rajat
                </p>
            </div>
        </div>
    )
}

export default SidebarUser