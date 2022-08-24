
import { useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const Mouth = ({ setMouthClicked, mouthClicked }) => {
    const [showMouthInfo, setShowMouthInfo] = useState(false)

    const mouthClickedState = () => {
        setMouthClicked(true)
    }
    const exitMouthButton = () => {
        setShowMouthInfo(false)
        setMouthClicked(false)
    }
    return (
        <>
            <section className="mouth-container">
                {/* changes mouth styling depending on clicked state */}
                <div className={mouthClicked ? "box-mouth-clicked" : "box-mouth"}>
                    <video muted
                        autoPlay={mouthClicked ? true : false}
                        className={mouthClicked ? "video-mouth-clicked" : "video-mouth"}
                        onMouseOver={event => event.target.play()}
                        onEnded={mouthClicked ? () => setShowMouthInfo(true) : () => ''}
                        onMouseOut={mouthClicked ? event => event.target.play() : event => event.target.pause()}
                        // src points to different videos depending on clicked state ---- CHANGE THIS
                        src={`${mouthClicked ? vid2 : vid1}`}
                        // poster is initial photo before video play ---- CHANGE THIS
                        poster={mouthClicked ? '' : "https://images.kinorium.com/movie/shot/290182/h280_38854647.jpg?21575066120"}>
                    </video>
                    {
                        mouthClicked ?
                            ''
                            : <button className="video-buttons"
                                id="mouth-button"
                                onClick={() => mouthClickedState()}>
                                About
                            </button>}
                    {
                        showMouthInfo ?
                            // Info box in mouth ------- CHANGE THESE
                            <div className="info-box-mouth">
                                <div id="exit-mouth"
                                    onClick={() => exitMouthButton()}>⚔︎</div>
                                <h3>About Me
                                    <br></br>
                                    & My Work
                                </h3>
                                <p>
                                    Thank you for visiting my app!
                                    I am Randall, the Singing Dev.
                                    <br></br>
                                    <a href="www.randallthomasmusic.com"> Visit my website here!</a>
                                    <br></br>
                                    I am a software developer with a background in music and writing.
                                    Feel free to contact me or help support my work.
                                    This app was written by me and is available on github at my <a href="github.com/devdevvy/responsive-video-windows">APP REPO</a>
                                </p>
                            </div>
                            : ''
                    }
                </div>
            </section>
        </>
    )
}