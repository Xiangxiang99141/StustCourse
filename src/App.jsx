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
import ClassesLayout from "./layout/ClassesLayout"
import { setClasses } from "./store/module/dataSlice"


function App() {
  useEffect(()=>{
    
  },[])

  return (
    <Provider store={store}>
      <Header/>
      <main className="grow container mx-auto pt-5 px-4 pb-11">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/course">
            <Route index element={<CourseHome/>}/>
            <Route path=":year/:semester">
              <Route path="search" element={<CourseLayout />} >
                <Route index element={<CourseSearch />} />
              </Route>
              <Route path="instructors">
                <Route index element={<Teachers/>}></Route>
                <Route path=":query"></Route>
              </Route>
              <Route path="className">
                <Route index></Route>
                <Route path=":query"></Route>
              </Route>
              <Route path="schedule">
                <Route index/>
                <Route path="weekday/:query"/>
                <Route path="period/:query"/>
              </Route>
              <Route path="language">
                <Route index></Route>
                <Route path="query"></Route>
              </Route>
              <Route path="location">
                <Route index></Route>
                <Route path=":query"></Route>
              </Route>
              <Route path=":code" element={<Course />} />
            </Route>
          </Route>
          <Route path="classes">
            <Route index element={<ClassesLayout/>}></Route>
            <Route path=":classes" element={<CourseHome/>}></Route>
          </Route>
          
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </main>
      <Footer/>
    </Provider>
  )
}

export default App