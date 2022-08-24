import { useState } from 'react';
import './App.css';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';
import bridge from "./assets/bridge.png"
import mustache from './assets/mustache.png'
import handlebar from './assets/handlebar.png'
import { Mouth } from './Mouth';

function App() {
  // keeps track of all three window's clicked states
  const [leftClicked, setLeftClicked] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)
  const [mouthClicked, setMouthClicked] = useState(false)

  return (
    <main className="container">
      <div className="App">

        {/* title goes here */}
        <h1>Randall's Windows</h1>

        <section id='face-container'>
          {/* bridge-of-glasses(-top) are empty divs that create the bridge of the glasses */}
          <div id="bridge-of-glasses-top"></div>

          <div className='eyes-container'>
            <LeftEye leftClicked={leftClicked} setLeftClicked={setLeftClicked} id="master-left" />
            <div id="bridge-of-glasses"></div>
            <RightEye rightClicked={rightClicked} setRightClicked={setRightClicked} id="master-right" />
            <img id="bridge-of-nose" alt="bridge of nose" src={bridge} />
          </div>

          <div className='base-of-nose'>
            {/* nostrils are just text below lol */}
            <div id="holes">⏜ ⏝ ⏜</div>
            {/* switches which style of mustache based on clicked state */}
            {mouthClicked ? <img src={handlebar} id="mustache" alt="handlebar-mustache" /> : <img src={mustache} alt="a mustache" id="mustache" />}
            <Mouth setMouthClicked={setMouthClicked} mouthClicked={mouthClicked} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
