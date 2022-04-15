import "./App.css";
import Profile from "./components/Context/Profile";
import ScoreCard from "./components/Context/ScoreCard";

function App() {
  return (
    <div className="App">
      <h1>ContextApi</h1>
      <Profile />
      <ScoreCard />
    </div>
  );
}

export default App;
