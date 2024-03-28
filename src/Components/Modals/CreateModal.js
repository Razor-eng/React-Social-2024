import './Modal.css'

const CreateModal = () => {
    return (
        <div className='createModal'>
            <div className="card">
                <div className='user'>
                    <div className='userHead'>
                        <div className="profile-photo">
                            <img src="/images/user.jpg" alt="" />
                        </div>
                        <h2>Rajat Kumar Maharana</h2>
                    </div>
                    <div className='userInput'>
                        <input type="text" placeholder="Create a post..." name="title" id="title" required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="submitbtn">SUBMIT</button>
                </div>
                <div className="close" id='close'>
                    <i className="uil uil-times"></i>
                </div>
            </div>
        </div>
    )
}

export default CreateModal