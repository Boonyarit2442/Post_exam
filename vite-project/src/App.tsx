import './App.css'
import Home from './Components/Home'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/Laout"} element={<Layout />}></Route>
        <Route path={"*"} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
