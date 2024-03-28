import React from 'react'

const Stories = ({ setPost, setSelectPost }) => {
    const storyPosts = [
        {
            image: '/images/profile-8.jpg',
            story: '/images/story-1.jpg',
            text: 'Your Story'
        },
        {
            image: '/images/profile-9.jpg',
            story: '/images/story-2.jpg',
            text: 'Lilla James'
        },
        {
            image: '/images/profile-10.jpg',
            story: '/images/story-3.jpg',
            text: 'Winnie Hale'
        },
        {
            image: '/images/profile-11.jpg',
            story: '/images/story-4.jpg',
            text: 'Daniel Bale'
        },
        {
            image: '/images/profile-12.jpg',
            story: '/images/story-5.jpg',
            text: 'Jane Doe'
        },
        {
            image: '/images/profile-13.jpg',
            story: '/images/story-6.jpg',
            text: 'Tina White'
        },
    ]

    return (
        <div className='stories'>
            {storyPosts.map((story, id) => (
                <div key={id} className="story" style={{ background: `url(${story.story}) no-repeat center center/cover` }} onClick={() => { setPost(story); setSelectPost(true) }}>
                    <div className="profile-photo">
                        <img src={story.image} alt="" />
                    </div>
                    <p className="name">{story.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Stories