import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

    const {onSent ,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Javis</p>
               
                <img src={assets.me_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult?
                 <>
                 <div className="greet">
                        <p><span>Hello ,Fawzy.</span></p>
                        <p>How can i help you today?</p>
                    </div><div className="cards">
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
                        </>
                :
                <div className="result">
                    <div className="result-title">
                        <img src={assets.me_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.ai_icon} alt="" />
                        {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                        
                    </div>
                </div>
                }
               
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={
                            (e)=>setInput(e.target.value)
                        } value={input} type="text" placeholder='Enter prompt here' name="" id="" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
<<<<<<< HEAD
                        Javis may display inaccurate info, including about people, so double-check its responses. Your ptivacy and Javis Apps
=======
                        Javis may display inaccurate info, including about people, so double-check its responses. Your ptivacy and Gemini Apps
>>>>>>> f87f6506d2a8d90039583dedabc90c4f155d0820
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main