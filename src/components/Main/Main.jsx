import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <p>to be removed</p>
                <img src={assets.me_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello ,Dev.</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activity for our work retreat</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve readability of the following code</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to see on upcoming road trip </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter prompt here' name="" id="" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your ptivacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main