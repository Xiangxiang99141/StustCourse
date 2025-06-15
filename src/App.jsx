import { Route, Router, Routes } from "react-router"
import {Provider} from 'react-redux'

//pages
import Error404 from './pages/error/404'
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Course from "./pages/Course"
import Teachers from "./pages/Teacher"
import CourseLayout from './layout/CourseLayout'
import CourseSearch from './pages/CourseSearch'
//store
import store from "./store/index"
import { useEffect } from "react"
import CourseHome from "./pages/CourseHome"


function App() {
  return (
    <Provider store={store}>
      <Header/>
      <main className="grow container mx-auto pt-5 px-4 pb-11">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/course">
            <Route index element={<CourseHome/>}/>
            <Route path=":year/:semester" element={<CourseLayout />}>
              <Route path="search" element={<CourseSearch />} />
              <Route path=":code" element={<Course />} />
              <Route path="instructors" element={<Teachers/>} />
            </Route>
          </Route>
          
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </main>
      <Footer/>
    </Provider>
  )
}

export default App