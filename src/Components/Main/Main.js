import Sidebar from './Sidebar/Sidebar'
import Feed from './Feeds/Feed'
import './Main.css'
import Widgets from './Widgets/Widgets'
import { useState } from 'react'

const Main = () => {
    const [shadow, setShadow] = useState(false);

    return (
        <main>
            <div className="container">
                <div className="left">
                    <Sidebar setShadow={setShadow} />
                </div>

                <div className="middle">
                    <Feed />
                </div>

                <div className="right">
                    <Widgets shadow={shadow} />
                </div>
            </div>
        </main>
    )
}

export default Main