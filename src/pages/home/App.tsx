import React, { useState } from "react";
import logo from '../../assets/images/logo.svg';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <div><img src={logo} className="App-logo" alt="logo" /></div>
    主页
    <ul>
      <li>home</li>
      <li><a href="/user/"><button>user 用户</button></a></li>
    </ul>
  </div>;
}

export default App;
