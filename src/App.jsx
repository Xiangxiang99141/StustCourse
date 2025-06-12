import { Button } from "@/components/ui/button"
import { Route, Router, Routes } from "react-router"
//pages
import Error404 from './pages/error/404'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./pages/Header"
import Footer from "./pages/Footer"


function App() {
  return (
    <>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element=<Home/> />
          <Route path="/login" element=<Login/> />
          <Route path="*" element=<Error404/> />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App