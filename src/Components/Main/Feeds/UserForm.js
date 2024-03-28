import React from 'react'

const UserForm = () => {
    return (
        <form className='create-post'>
            <div className="profile-photo">
                <img src="/images/user.jpg" alt="user" />
            </div>
            <input type="text" placeholder="What's on your mind, Rajat?" id='create-post' />
            <input type="submit" value="Post" className='btn btn-primary' />
        </form>
    )
}

export default UserForm