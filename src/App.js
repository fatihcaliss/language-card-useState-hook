import './App.css';
import logo from "./assets/react.svg";
import { languages } from "./helper/data";
import Card from "./components/card/Card";


function App() {
  return (
    <div className="App">
        <header>
          <img src={logo} alt="logo" width="350"/>
        </header>
        <main>
          <h1>Languages</h1>
          <div className="card-main">
            {languages.map((item,index) => {
              return <Card {...item} key={index}/>
            })}
          </div>
        </main>
    </div>
  );
}

export default App;
