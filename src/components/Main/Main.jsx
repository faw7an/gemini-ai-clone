import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello ,Dev.</span></p>
                <p>How can i help you today?</p>
            </div>
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
    </div>
  )
}

export default Main