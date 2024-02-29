import { Route, Routes, Link } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import White from "./White";
import Green from "./Green";
import Pink from "./Pink";
import Grey from "./Grey";
import Orange from "./Orange";
import Yellow from "./Yellow";
import Purple from "./Purple";

import './index.css'


function App () {


return (
<div id="container">
    <div id="navbar">
      <Link to="/Blue">Blue</Link>
      <Link to="/Red">Red</Link>
      <Link to="/White">White</Link>
      <Link to="/Green">Green</Link>
      <Link to="/Pink">Pink</Link>
      <Link to="/Grey">Grey</Link>
      <Link to="/Orange">Orange</Link>
      <Link to="/Yellow">Yellow</Link>
      <Link to="/Purple">Purple</Link>
    </div>
    <div id="main-section">
     <Routes>
      <Route path="/blue" element={<Blue/>} />
      <Route path="/red" element={<Red/>} />
      <Route path="/white" element={<White/>} />
      <Route path="/green" element={<Green/>} />
      <Route path="/pink" element={<Pink/>} />
      <Route path="/grey" element={<Grey/>} />
      <Route path="/orange" element={<Orange/>} />
      <Route path="/yellow" element={<Yellow/>} />
      <Route path="/purple" element={<Purple/>} />

      </Routes>
      </div>
  </div>
)
}

export default App

