import "./App.css";
import Profile from "./components/Profile";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <div className="App">
      <h1>Zustand</h1>
      <Profile />
      <ScoreCard />
      <h1>Context</h1>
    </div>
  );
}

export default App;
