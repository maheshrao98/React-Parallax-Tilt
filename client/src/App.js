import React from 'react';
import Tilt from 'react-parallax-tilt';

function App() {
  return (
    <Tilt gyroscope={true}>
      <div className="center">
        <div style={{ height: '300px', backgroundColor: 'darkgreen'}}>
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </div>
    </Tilt>
  );
}

export default App;
