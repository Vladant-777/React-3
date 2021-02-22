import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <Timer
        timer={{
          time: 5000,
          timeChek: 50,
          autostart: false,
        }}
      />
      <Timer
        timer={{
          time: 10000,
          timeChek: 100,
          autostart: true,
        }}
      />
    </div>
  );
}

export default App;
