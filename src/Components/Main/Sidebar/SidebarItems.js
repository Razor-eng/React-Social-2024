import React, { useEffect, useState } from 'react'

const SidebarItems = ({ setShadow }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (active === 3) {
            setShadow(true);
        } else {
            setShadow(false);
        }

        if (active === 2) {
            document.querySelector('.notifications-popup').style.display = 'block';
        } else {
            document.querySelector('.notifications-popup').style.display = 'none';
        }
    }, [active, setShadow])


    const SidebarItems = [
        {
            iconName: 'home',
            label: 'Home',
        },
        {
            iconName: 'compass',
            label: 'Explore'
        },
        {
            iconName: 'bell',
            label: 'Notifications',
            id: 'notifications',
        },
        {
            iconName: 'envelope-alt',
            label: 'Messages',
            id: 'messages-notifications',
            messages: 6
        },
        {
            iconName: 'bookmark',
            label: 'Bookmarks'
        },
        {
            iconName: 'chart-line',
            label: 'Analytics'
        },
        {
            iconName: 'palette',
            label: 'Theme',
            id: 'theme'
        },
        {
            iconName: 'setting',
            label: 'Settings'
        }
    ]

    return (
        <div className='sidebar'>
            {SidebarItems.map((item, id) => (id < 2 || id > 2) ? (
                <div className={`menu-item ${id === active ? "active" : ""}`} id={item.id} key={id} onClick={() => setActive(id)}>
                    <span>
                        <i className={`uil uil-${item.iconName}`}>
                            {id === active ? null :
                                (item.messages && <small className='notification-count'>{item.messages}</small>)
                            }
                        </i>
                    </span>
                    <h3>{item.label}</h3>
                </div>
            ) : (
                <div className={`menu-item ${id === active ? "active" : ""}`} id={item.id} key={id} onClick={() => setActive(id)}>
                    <span>
                        <i className={`uil uil-${item.iconName}`}>
                            {id === active ? null :
                                <small className='notification-count'>9+</small>
                            }
                        </i>
                    </span>
                    <h3>{item.label}</h3>
                    <div className="notifications-popup">
                        <div>
                            <div className="profile-photo">
                                <img src="/images/profile-1.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Keke Benjamin</b> acceptrd your friend request
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="/images/profile-2.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>John Doe</b> commented on your post
                                <small className="text-muted">1 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="/images/profile-3.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Marry Oppong</b> and <b>283 others</b> liked your post
                                <small className="text-muted">4 Hours AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="/images/profile-4.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Donald Trump</b> commented on a post you are tagged
                                <small className="text-muted">1 HOUR AGO</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )}
        </div >
    )
}

export default SidebarItems