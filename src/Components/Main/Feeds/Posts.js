import React from 'react'

const Posts = ({ setPost, setSelectPost }) => {
    const FeedPosts = [
        {
            userPhoto: '/images/profile-12.jpg',
            userName: 'Lana Rose',
            postUpdate: 'Dubai, 15 Minutes',
            postImage: '/images/feed-1.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-10.jpg'
                },
                {
                    likedUser: '/images/profile-4.jpg'
                },
                {
                    likedUser: '/images/profile-15.jpg'
                },
            ],
            likedUser: 'Ernest Achiever',
            likes: '2,323',
            comments: '277',
            caption: 'A christmas present..!',
            tags: [
                'lifestyle'
            ]
        },
        {
            userPhoto: '/images/profile-16.jpg',
            userName: 'Benjamin Dwan',
            postUpdate: 'Hong Kong , 2 Hours',
            postImage: '/images/feed-2.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-11.jpg'
                },
                {
                    likedUser: '/images/profile-5.jpg'
                },
                {
                    likedUser: '/images/profile-13.jpg'
                },
            ],
            likedUser: 'Dwayne Johnson',
            likes: '12,365',
            comments: '2300',
            caption: 'Just a cute picture.',
            tags: [
                'Cute', 'Moody'
            ]
        },
        {
            userPhoto: '/images/profile-7.jpg',
            userName: 'Franklin Scott',
            postUpdate: 'United States , 8 Hours',
            postImage: '/images/feed-3.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-8.jpg'
                },
                {
                    likedUser: '/images/profile-9.jpg'
                },
                {
                    likedUser: '/images/profile-10.jpg'
                },
            ],
            likedUser: 'Robert Pattinson',
            likes: '18,872',
            comments: '9800',
            caption: 'Just a cute picture.',
            tags: [
                'Beautiful_day'
            ]
        },
        {
            userPhoto: '/images/profile-1.jpg',
            userName: 'Jane Foster',
            postUpdate: 'Japan , 5 Days',
            postImage: '/images/feed-4.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-2.jpg'
                },
                {
                    likedUser: '/images/profile-3.jpg'
                },
                {
                    likedUser: '/images/profile-4.jpg'
                },
            ],
            likedUser: 'Jennifer Lopez',
            likes: '5,982',
            comments: '657',
            caption: 'A wonderful get together!',
            tags: [
                'Friends'
            ]
        },
        {
            userPhoto: '/images/profile-8.jpg',
            userName: 'Alexander',
            postUpdate: 'New York , 5 Hours',
            postImage: '/images/feed-5.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-12.jpg'
                },
                {
                    likedUser: '/images/profile-8.jpg'
                },
                {
                    likedUser: '/images/profile-19.jpg'
                },
            ],
            likedUser: 'Justin',
            likes: '2,383',
            comments: '390',
            caption: 'Lets get a pose correct.',
            tags: []
        },
        {
            userPhoto: '/images/profile-6.jpg',
            userName: 'Renne Grace',
            postUpdate: 'United States , 52 Minutes',
            postImage: '/images/feed-6.jpg',
            likedBy: [
                {
                    likedUser: '/images/profile-8.jpg'
                },
                {
                    likedUser: '/images/profile-9.jpg'
                },
                {
                    likedUser: '/images/profile-16.jpg'
                },
            ],
            likedUser: 'Josh Brown',
            likes: '5,672',
            comments: '882',
            caption: 'Work load...!',
            tags: [
                'Tired'
            ]
        },
    ]

    return (
        <div className='feeds'>
            {FeedPosts.map((post, id) => (
                <div className="feed" key={id} onClick={() => { setPost(post); setSelectPost(true) }}>
                    <div className="head">
                        <div className="user">
                            <div className="profile-photo">
                                <img src={post.userPhoto} alt="user" />
                            </div>
                            <div className="info">
                                <h3>{post.userName}</h3>
                                <small>{post.postUpdate} ago</small>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipdid-h"></i>
                            </span>
                        </div>
                    </div>

                    <div className="photo">
                        <img src={post.postImage} alt="feed" />
                    </div>

                    <div className="action-button">
                        <div className="interaction-buttons">
                            <span><i className="uil uil-heart"></i></span>
                            <span><i className="uil uil-comment-dots"></i></span>
                            <span><i className="uil uil-share-alt"></i></span>
                        </div>
                        <div className="bookmark">
                            <span><i className="uil uil-bookmark-full"></i></span>
                        </div>
                    </div>

                    <div className="liked-by">
                        {post.likedBy.map((like, id) => (
                            <span key={id}><img src={like.likedUser} alt="likeduser" /></span>
                        ))}
                        <p>Liked by <b>{post.likedUser}</b> and <b>{post.likes} others</b></p>
                    </div>

                    <div className="caption">
                        <p>
                            <b>{post.userName}</b>
                            {" "}{post.caption}
                            {post.tags.map((tag, id) => (
                                <span key={id} className="hash-tag">
                                    #{tag}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="comments text-muted">View all {post.comments} comments</div>
                </div>
            ))}
        </div>
    )
}

export default Posts