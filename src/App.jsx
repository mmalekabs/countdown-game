import PlayerComponent from './components/Player/Player.component.jsx';
import TimerChallenge from "./components/TImerChallenge/TimerChallenge.component";

function App() {
  return (
    <>
      <PlayerComponent />
      <div id="challenges">
          <TimerChallenge title='Easy' targetTime={1}/>
          <TimerChallenge title='Intermediate' targetTime={5}/>
          <TimerChallenge title='Hard' targetTime={10}/>
          <TimerChallenge title='Profissional' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
