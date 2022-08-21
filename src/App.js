
import { useState } from 'react';
import './App.css';
import { LeftEye } from './LeftEye';

// poster attribute is the beginning frame photo before video starts


function App() {
  const [leftClicked, setLeftClicked] = useState(false)
  return (
    <main className="container">
      <div className="App">
        <h1>Randall's Windows</h1>
        <LeftEye leftClicked={leftClicked} setLeftClicked={setLeftClicked} id="master-left"/>
      </div>
    </main>
  );
}

export default App;
