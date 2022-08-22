
import { useState } from 'react';
import './App.css';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';
import bridge from "./assets/bridge.png"
import mustache from './assets/mustache.png'
// poster attribute is the beginning frame photo before video starts


function App() {
  const [leftClicked, setLeftClicked] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)
  return (
    <main className="container">
      <div className="App">
        <h1>Randall's Windows</h1>
        <section id='face-container'>
        <div id="bridge-of-glasses-top"></div>
        <div className='eyes-container'>
        <LeftEye leftClicked={leftClicked} setLeftClicked={setLeftClicked} id="master-left"/>
        <div id="bridge-of-glasses"></div>
        <RightEye rightClicked={rightClicked} setRightClicked={setRightClicked} id="master-right"/>
        <img id="bridge-of-nose" src={bridge}/>
        </div>
        <div className='base-of-nose'>
        <div id="holes">⏜ ⏝ ⏜</div>
        <img src={mustache} id="mustache" />
        </div>
        </section>
      </div>
    </main>
  );
}

export default App;
