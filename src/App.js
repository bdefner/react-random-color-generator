import currentColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [randomColor, setRandomColor] = useState(currentColor.randomColor());
  console.log(randomColor);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '50px',
          backgroundColor: randomColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        Generated Color:
      </div>
      <button>Generate</button>
    </div>
  );
}

export default App;
