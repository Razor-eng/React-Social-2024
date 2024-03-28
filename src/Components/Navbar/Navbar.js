import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <h2 className="logo">
                    React-Social
                </h2>
                <div className="search-bar">
                    <i className="uil uil-search"></i>
                    <input type="search" placeholder='Search for users, inspirations, and projects' />
                </div>
                <div className="create">
                    <label className='btn btn-primary' id='create' htmlFor="create-post">Create</label>
                    <div className="profile-photo">
                        <img src="/images/user.jpg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar