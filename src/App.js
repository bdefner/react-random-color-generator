function App() {
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
          backgroundColor: '#ff6bb5',
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
