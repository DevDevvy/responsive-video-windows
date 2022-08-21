
import { useEffect ,useRef } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const LeftEye = ({ setLeftClicked, leftClicked }) => {

    const ref = useRef(null)
    useEffect(()=>{
        
    },[])
    const clickedState = () => {
        setLeftClicked(true)
        console.log(ref.current)
    }
    
    return (
        <>
            <section className="left-eye-container">
                <div className="box-left">
                    {/* second video after click state change */}
                    {
                        leftClicked ?
                            <video muted autoPlay
                                className="eye-video-left"
                                ref={ref}
                            >
                                <source src={vid2} />
                            </video>
                            :
                            // first video rendered
                            <video muted
                                className="eye-video-left"
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                poster="https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg">
                                <source src={vid1} />
                            </video>
                    }
                    <button className="video-buttons" id="left-eye-button" onClick={() => clickedState()}>Left Video</button>
                </div>
            </section>
        </>
    )
}