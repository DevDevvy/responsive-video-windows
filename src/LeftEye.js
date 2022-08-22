
import { useEffect, useRef, useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const LeftEye = ({ setLeftClicked, leftClicked }) => {
    const [showInfo, setShowInfo] = useState(false)
    const ref = useRef(null)
    useEffect(() => {

    }, [])
    const clickedState = () => {
        setLeftClicked((prev) => !prev)
    }
    const exitButton = () => {
        setShowInfo(false)
        setLeftClicked(false)
    }
    return (
        <>
            <section className="left-eye-container">
                <div className="box-left">
                    <video muted
                        autoPlay={leftClicked ? true : false}
                        className="eye-video-left"
                        onMouseOver={event => event.target.play()}
                        onEnded={leftClicked ? () => setShowInfo(true) : () => ''}
                        onMouseOut={leftClicked ? event => event.target.play() : event => event.target.pause()}
                        src={`${leftClicked ? vid2 : vid1}`}
                        ref={ref}
                        // poster is initial photo before video play
                        poster={leftClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg"}>
                    </video>
                    {leftClicked ? '' : <button className="video-buttons" id="left-eye-button" onClick={() => clickedState()}>Left Video</button>}
                {
                    showInfo ?
                        <div className="info-box">
                            <div id="exit-left" onClick={() => exitButton()}>⚔︎</div>
                            <h3>INFO</h3>
                            <ul>
                                <li>First bit of info</li>
                                <li>Second bit of info</li>
                                <li>Third bit of info</li>
                                <li>Fourth bit of info</li>
                                <li>Fifth bit of info</li>
                            </ul>
                        </div>
                        :
                        ''
                }
                </div>

            </section>
        </>
    )
}