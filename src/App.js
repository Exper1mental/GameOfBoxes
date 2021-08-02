// import './App.css';
import StartScreen from './components/StartScreen';
// import Grid from './components/Grid';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <StartScreen />
      <Game />
      <footer class="text-white bg-gray-600 p-10 italic text-center">
        © 2021 Thomas Delvaux. All rights reserved.
      </footer>
    </div>
  );
}


export default App;
