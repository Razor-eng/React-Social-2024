import Stories from './Stories'
import UserForm from './UserForm'
import Posts from './Posts'
import './Feeds.css'
import { useState } from 'react'
import ImageModal from '../../Modals/ImageModal'

const Feed = () => {
    const [selectPost, setSelectPost] = useState(false);
    const [post, setPost] = useState(null);

    return (
        <>
            {selectPost && <ImageModal post={post} setSelectPost={setSelectPost} />}
            <Stories setPost={setPost} setSelectPost={setSelectPost} />
            <UserForm />
            <Posts setPost={setPost} setSelectPost={setSelectPost} />
        </>
    )
}

export default Feed