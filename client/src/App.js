import data from './data.json';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data.message}
        </p>
      </header>
    </div>
  );
}

export default App;
