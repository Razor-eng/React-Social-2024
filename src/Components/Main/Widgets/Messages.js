import React, { useEffect, useState } from 'react'

const Messages = ({ shadow }) => {
    const [selectedCategory, setSelectedCategory] = useState('Primary');
    const [search, setSearch] = useState('');

    const categories = [
        {
            type: 'Primary'
        },
        {
            type: 'General'
        },
        {
            type: 'Requests',
            requests: 7,
            class: 'message-requests'
        },
    ]

    const messages = [
        {
            userImage: '/images/profile-17.jpg',
            userName: 'Cristian Dunst',
            text: 'Just Woke up bruh..!',
            primary: true
        },
        {
            userImage: '/images/profile-3.jpg',
            userName: 'Danille Jackson',
            text: '2 new messages',
            textBold: true,
        },
        {
            userImage: '/images/profile-18.jpg',
            userName: 'Jennifer Winget',
            text: 'Gonna get late.',
            active: true
        },
        {
            userImage: '/images/profile-19.jpg',
            userName: 'Millian Cerphy',
            text: 'Should catch up soon...',
        },
        {
            userImage: '/images/profile-6.jpg',
            userName: 'Jenna Ortega',
            text: '6 new messages',
            textBold: true,
            primary: true,
            active: true
        },
    ]

    const searchMessage = (search) => {
        document.querySelectorAll('.message').forEach(chat => {
            if (chat.querySelector('h5').textContent.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1) {
                chat.style.display = 'flex';
            } else {
                chat.style.display = 'none';
            }
        })
    }

    useEffect(() => {
        searchMessage(search);
    }, [search])


    return (
        <div className='messages' style={{ boxShadow: `${shadow ? '0 0 1rem var(--color-primary)' : ''}` }}>
            <div className="heading">
                <h4>Messages</h4>
                <i className="uil uil-edit"></i>
            </div>

            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder='Search messages' id="message-search" onChange={e => setSearch(e.target.value)} />
            </div>

            <div className="category">
                {categories.map((category, id) => (
                    <h6 key={id} className={`${category.class} ${category.type === selectedCategory ? "active" : ""}`} onClick={() => setSelectedCategory(category.type)}>
                        {category.type}
                        {category.requests && `(${category.requests})`}
                    </h6>
                ))}
            </div>

            {selectedCategory === 'Primary' ? (
                messages.map((message, id) => message.primary && (
                    <div className="message" key={id}>
                        <div className="profile-photo" >
                            <img src={message.userImage} alt="" />
                            {message.active && <div className='active'></div>}
                        </div>
                        <div className="message-body">
                            <h5>{message.userName}</h5>
                            <p className={`${message.textBold ? "text-bold" : "text-muted"}`}>{message.text}</p>
                        </div>
                    </div>
                ))
            ) : (
                messages.map((message, id) => (
                    <div className="message">
                        <div className="profile-photo" key={id}>
                            <img src={message.userImage} alt="" />
                            {message.active && <div className='active'></div>}
                        </div>
                        <div className="message-body">
                            <h5>{message.userName}</h5>
                            <p className={`${message.textBold ? "text-bold" : "text-muted"}`}>{message.text}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Messages