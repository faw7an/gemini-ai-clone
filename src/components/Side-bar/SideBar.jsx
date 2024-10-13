import React, { useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
function SideBar() {
    const [extended, setEtended] = useState(false);

    return (
        <div className='sideBar'>
            <div className="top">
                <img onClick={()=>setEtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu-icon" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="plus-icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">
                        Recent
                    </p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" srcset="" />
                        <p>What is react ...</p>
                    </div>
                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                   {extended? <p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended? <p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended? <p>Settings</p>:null}
                   
                </div>
            </div>
        </div>
    )
}

export default SideBar