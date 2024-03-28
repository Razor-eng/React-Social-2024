import './Modal.css'

const ImageModal = ({ post, setSelectPost }) => {
    return (
        <div className='createModal ImageModal'>
            <div className="card">
                <div className='user'>
                    <div className='userHead'>
                        <div className="profile-photo">
                            <img src={post.image || post.userPhoto} alt="" />
                        </div>
                        <div>
                            <h2>{post.text || post.userName}</h2>
                            <p>{post.postUpdate && post.postUpdate + " ago"} </p>
                        </div>
                    </div>
                </div>
                <div className="close" onClick={() => setSelectPost(false)} >
                    <i className="uil uil-times"></i>
                </div>
                <div className='content'>
                    <img src={post.story || post.postImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ImageModal