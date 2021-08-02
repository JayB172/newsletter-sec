import logo from './logo.svg';
import './App.css';
import Head from "./Components/Head"
import About from "./Components/About"
import BSTC from "./Components/BSTC"
import Games from "./Components/Games"
import Team from "./Components/Team"

function App() {
  return (
    <div className="App">
      <Head />
      <About />
      <BSTC />
      <Games />
      <Team />
    </div>
  );
}

export default App;
