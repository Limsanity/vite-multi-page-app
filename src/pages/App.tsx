import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">主页
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/user/">user</a></li>
    </ul>
  </div>;
}

export default App;
