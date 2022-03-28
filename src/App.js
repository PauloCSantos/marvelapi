import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Characters from "./components/pages/characters/Characters";
import Comics from "./components/pages/comics/Comics";
import ErrorPage from "./components/pages/errorpage/ErrorPage";

function App() {
  const [foundhero, setFoundHero] = useState("")

  return (
    <Router>
      <Menu searchero={hero => setFoundHero(hero)}></Menu>
      <Routes>
        <Route path="/" element={<Characters foundhero={foundhero}/>}></Route>
        <Route path="/comics/:comicid" element={<Comics/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
