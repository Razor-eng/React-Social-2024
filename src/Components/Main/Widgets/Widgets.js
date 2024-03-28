import FriendRequests from './FriendRequests'
import Messages from './Messages'
import './Widgets.css'

const Widgets = ({ shadow }) => {
    return (
        <>
            <Messages shadow={shadow} />
            <FriendRequests />
        </>
    )
}

export default Widgets