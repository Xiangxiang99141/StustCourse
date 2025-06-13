import { Route, Router, Routes } from "react-router"
//pages
import Error404 from './pages/error/404'
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Course from "./pages/Course"
import Teachers from "./pages/Teacher"
import CourseLayout from './layout/CourseLayout'
import CourseSearch from './pages/CourseSearch'

function App() {
  return (
    <>
      <Header/>
      <main className="flex-grow container mx-auto pt-3 px-4 bottom-14">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Course layout + nested pages */}
          <Route path="/course" element={<CourseLayout />}>
            <Route path="search/:year/:semester" element={<CourseSearch />} />
            <Route path=":code" element={<Course />} />
          </Route>
          
          <Route path="/teachers" element={<Teachers/>} />
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App