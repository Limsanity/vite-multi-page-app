import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">用户
    <ul>
      <li><a href="/home/"><button>home</button></a></li>
      <li>user 用户</li>
    </ul>
  </div>;
}

export default App;
