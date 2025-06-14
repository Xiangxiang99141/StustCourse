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



function App() {
  return (
    <Provider store={store}>
      <Header/>
      <main className="flex-grow container mx-auto pt-3 px-4 bottom-14">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/course">
            <Route path=":year/:semester" element={<CourseLayout />}>
              <Route path="search" element={<CourseSearch />} />
            </Route>
            <Route path=":code" element={<Course />} />
          </Route>
          
          <Route path="/teachers" element={<Teachers/>} />
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Provider>
  )
}

export default App