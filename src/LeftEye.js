
import { useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const LeftEye = ({ setLeftClicked, leftClicked }) => {
    const [showInfo, setShowInfo] = useState(false)

    const clickedState = () => {
        setLeftClicked(true)
    }

    const exitButton = () => {
        setShowInfo(false)
        setLeftClicked(false)
    }

    return (
        <>
            <section className="left-eye-container">
                <div className="box-left">
                    {/* video is set up so mouseOver starts video and mouseOut pauses video, unless clicked state is true */}
                    <video muted
                        autoPlay={ leftClicked ? true : false }
                        className="eye-video-left"
                        onMouseOver={ event => event.target.play() }
                        onEnded={ leftClicked ? () => setShowInfo(true) : () => '' }
                        onMouseOut={ leftClicked ?
                            event => event.target.play()
                            : event => event.target.pause() }
                        // src points to which video it is depending on clicked state----- CHANGE THIS
                        src={ `${ leftClicked ? vid2 : vid1 }` }
                        // poster is initial photo before video play -------- CHANGE THIS
                        poster={ leftClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg" } >
                    </video>
                    {
                        leftClicked ?
                            ''
                            : <button className="video-buttons" id="left-eye-button"
                                // Change "Software" to whatever you want on the video button to be clicked --- CHANGE THIS
                                onClick={() => clickedState()}>
                                Software
                            </button>
                    }
                    {/* info box and all info needed -------------------------- CHANGE THESE*/}
                    {
                        showInfo ?
                            <div className="info-box">
                                <div id="exit-left"
                                    onClick={() => exitButton()}>⚔︎</div>
                                <h3>
                                    Full-Stack
                                    <br></br>
                                    Development
                                </h3>
                                <ul>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        React.js
                                    </li>
                                    <li>
                                        Python
                                    </li>
                                    <li>
                                        Django
                                    </li>
                                    <li>
                                        SQL
                                    </li>
                                </ul>
                            </div>
                            : ''
                    }
                </div>
            </section>
        </>
    )
}