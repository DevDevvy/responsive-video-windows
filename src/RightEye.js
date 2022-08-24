
import { useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const RightEye = ({ setRightClicked, rightClicked }) => {
    const [showRightInfo, setShowRightInfo] = useState(false)

    const clickedState = () => {
        setRightClicked(true)
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
                        autoPlay={ rightClicked ? true : false }
                        className="eye-video-right"
                        onMouseOver={ event => event.target.play() }
                        onEnded={ rightClicked ? () => setShowRightInfo(true) : () => '' }
                        onMouseOut={ rightClicked ? event => event.target.play() : event => event.target.pause() }
                        // ternary holding video that plays before and video that plays after click --- CHANGE THESE
                        src={ `${ rightClicked ? vid2 : vid1 }` }
                        // poster is initial photo before video play ------ CHANGE THIS
                        poster={ rightClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg" }>
                    </video>
                    {/* when clicked, button disappears to make room for info box, when info box is exited, rightClicked resets back to false */}
                    {
                        rightClicked ?
                            ''
                            :
                            <button className="video-buttons"
                                id="right-eye-button"
                                // name "music" for info button ----- CHANGE THIS
                                onClick={() => clickedState()}>
                                Music
                            </button>
                    }

                    {/* Info for each info box goes below ------ CHANGE THESE*/}
                    {
                        showRightInfo ?
                            <div className="info-box-right">
                                <div id="exit-right" onClick={() => exitButton()}>⚔︎</div>
                                <h3>Music & Vocals</h3>
                                <ul>
                                    <li>Music Production</li>
                                    <li>Session Vocals</li>
                                    <li>Consultation</li>
                                    <li>Recording</li>
                                    <li>Writing</li>
                                    <li>Editing</li>
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