import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

function Sidebar() {

    const [extended , setextended] = useState(false)

    return (
        <div className='sidebar'>

            <div className="top">
                <img onClick={(prev) => setextended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" width="20px"/>
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" width="20px"/>
                   {extended?<p>New Chat</p>:null} 
                 </div>
                 {extended? <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry recent-alla"> I
                        <img src={assets.message_icon} alt="" width="20px" />
                        <p>What is react ...</p>
                    </div>
                </div> : null} 
                
            </div>
            <div className="bottom">

            <div className="bottom-item recent-entry">
                 <img src={assets.question_icon} alt="" width="20px"/>
                  {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                 <img src={assets.history_icon} alt="" width="20px"/>
                 {extended? <p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                 <img src={assets.setting_icon} alt="" width="20px"/>
                 {extended ? <p>Setting</p>:null}
            </div>


          
        </div>

        </div>
    )
}

export default Sidebar
