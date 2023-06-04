import * as React from "react";
import "./App.css";
import { NavLink } from "./components/header";
import { Button } from "./components/shared";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LogoType</h1>

        <nav>
          <ul>
            <NavLink link={"#"} label={"Home"} />
            <NavLink link={"#"} label={"Functions"} />
            <NavLink link={"#"} label={"Contact"} />
          </ul>
        </nav>

        <Button label={"Join Us"} action={null} />
      </header>
      <main></main>
    </div>
  );
}

export default App;
