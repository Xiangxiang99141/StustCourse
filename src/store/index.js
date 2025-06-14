import  { configureStore } from "@reduxjs/toolkit";
import filterSlice from './module/filterSlice'
// import classesFilterSlice from "./module/classesFilterSlice";
// import courseTypeSlice from "./module/courseTypeSlice";

const store = configureStore({
    reducer:{
        filter:filterSlice,
        // classFilter:classesFilterSlice,
        // courseTypeFilter:courseTypeSlice
    }
})

export default store;