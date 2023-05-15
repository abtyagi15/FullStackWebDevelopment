import './App.css';
import DisplaySize from './components/DisplaySize';

function App() {
  return (
    <div className="App">
      <h1>Display Window Size</h1>
      <p>This app is used to display the size of the window as the size of the window changes</p>
      <DisplaySize></DisplaySize>
    </div>
  );
}

export default App;
