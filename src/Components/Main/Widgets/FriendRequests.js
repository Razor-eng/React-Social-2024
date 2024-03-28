import React from 'react'

const FriendRequests = () => {
    const requests = [
        {
            name: 'Hajia Bintu',
            photo: '/images/profile-7.jpg',
            mutual: '8'
        },
        {
            name: 'Elizabeth Longfort',
            photo: '/images/profile-9.jpg',
            mutual: '2'
        },
        {
            name: 'Bilal Rob',
            photo: '/images/profile-15.jpg',
            mutual: '32'
        },
    ]

    return (
        <div className='friend-requests'>
            <h4>Requests</h4>
            {requests.map((request, id) => (
                <div className="request" key={id}>
                    <div className="info">
                        <div className="profile-photo">
                            <img src={request.photo} alt="" />
                        </div>
                        <div>
                            <h5>{request.name}</h5>
                            {
                                request.mutual &&
                                <p className="text-muted">
                                    {request.mutual} mutual friends
                                </p>
                            }
                        </div>
                    </div>
                    <div className="action">
                        <button className="btn btn-primary">
                            Accept
                        </button>
                        <button className="btn">
                            Decline
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FriendRequests