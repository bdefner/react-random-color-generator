import currentColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [randomColor, setRandomColor] = useState(currentColor.randomColor());
  const backgroundGradient =
    'linear-gradient(145deg, rgba(251,63,229,1) 0%, rgba(70,124,252,1) 32%, rgba(93,252,70,1) 59%, rgba(252,248,70,1) 96%)';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: backgroundGradient,
      }}
    >
      <div
        style={{
          padding: '50px',
          backgroundColor: randomColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: 'solid white',
          borderRadius: '5px',
          margin: '25px',
        }}
      >
        Generated Color: {randomColor}
      </div>
      <button
        onClick={() => {
          setRandomColor(currentColor.randomColor());
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
