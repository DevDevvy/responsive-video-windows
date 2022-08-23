
import { useEffect, useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const Mouth = ({ setMouthClicked, mouthClicked }) => {
    const [showMouthInfo, setShowMouthInfo] = useState(false)

    const mouthClickedState = () => {
        setMouthClicked((prev) => !prev)
    }
    const exitMouthButton = () => {
        setShowMouthInfo(false)
        setMouthClicked(false)
    }
    return (
        <>
            <section className="mouth-container">
                <div className={mouthClicked ? "box-mouth-clicked" : "box-mouth"}>
                    <video muted
                        autoPlay={mouthClicked ? true : false}
                        className={ mouthClicked? "video-mouth-clicked" : "video-mouth"}
                        onMouseOver={event => event.target.play()}
                        onEnded={mouthClicked ? () => setShowMouthInfo(true) : () => ''}
                        onMouseOut={mouthClicked ? event => event.target.play() : event => event.target.pause()}
                        src={`${mouthClicked ? vid2 : vid1}`}
                        // poster is initial photo before video play
                        poster={mouthClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg"}>
                    </video>
                    {mouthClicked ? '' : <button className="video-buttons" id="mouth-button" onClick={() => mouthClickedState()}>Mouth Video</button>}
                {
                    showMouthInfo ?
                        <div className="info-box-mouth">
                            <div id="exit-mouth" onClick={() => exitMouthButton()}>⚔︎</div>
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