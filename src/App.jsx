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
        <div className="min-h-svh w-10/12 -translate-x-1/2 left-1/2 fixed pt-3 shadow-amber-100">
          <Routes>
            <Route path="/" element=<Home/> />
            <Route path="/course" element=<Login/> />
            <Route path="*" element=<Error404/> />
          </Routes>
        </div>
      <Footer/>
    </>
  )
}

export default App