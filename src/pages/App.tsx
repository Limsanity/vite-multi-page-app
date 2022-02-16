import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">主页
    <ul>
      <li>home</li>
      <li><a href="/user/">user 用户</a></li>
    </ul>
  </div>;
}

export default App;
