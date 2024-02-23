import { Routes, Route } from "react-router-dom"
import Navbar from "./conponents/Navbar"
import Home from "./views/Home"
import Detail from "./conponents/Detail"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="detail/:id" element = {<Detail />}></Route>
      </Routes>
    </>
  )
}

export default App