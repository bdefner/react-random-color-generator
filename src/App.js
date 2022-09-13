import currentColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState('');
  const [randomColor, setRandomColor] = useState(currentColor.randomColor());

  const backgroundGradient =
    'linear-gradient(145deg, rgba(251,63,229,1) 0%, rgba(70,124,252,1) 32%, rgba(93,252,70,1) 59%, rgba(252,248,70,1) 96%)';
  const inputStyle = {
    margin: '5px',
    textAlign: 'center',
  };

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
          transition: 'all 1s ease',
          boxShadow: '5px 10px',
        }}
      >
        Generated Color: {randomColor}
      </div>
      <br />
      <input
        style={inputStyle}
        placeholder="hue (optional)"
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      />
      <input
        style={inputStyle}
        placeholder="lightness (optional)"
        onChange={(event) => {
          setLightness(event.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          setRandomColor(
            currentColor.randomColor({ hue: hue, luminosity: lightness }),
          );
          console.log('Hue:' + hue);
          console.log('lightness:' + lightness);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
