
import { useEffect, useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const RightEye = ({ setRightClicked, rightClicked }) => {
    const [showRightInfo, setShowRightInfo] = useState(false)

    useEffect(() => {

    }, [])
    const clickedState = () => {
        setRightClicked((prev) => !prev)
    }
    const exitButton = () => {
        setShowRightInfo(false)
        setRightClicked(false)
    }
    return (
        <>
            <section className="right-eye-container">
                <div className="box-right">
                    <video muted
                        autoPlay={rightClicked ? true : false}
                        className="eye-video-right"
                        onMouseOver={event => event.target.play()}
                        onEnded={rightClicked ? () => setShowRightInfo(true) : () => ''}
                        onMouseOut={rightClicked ? event => event.target.play() : event => event.target.pause()}
                        src={`${rightClicked ? vid2 : vid1}`}
                        // poster is initial photo before video play
                        poster={rightClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg"}>
                    </video>
                    {rightClicked ? '' : <button className="video-buttons" id="right-eye-button" onClick={() => clickedState()}>Right Video</button>}
                {
                    showRightInfo ?
                        <div className="info-box-right">
                            <div id="exit-right" onClick={() => exitButton()}>⚔︎</div>
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