import  { configureStore } from "@reduxjs/toolkit";
import filterSlice from './module/filterSlice'

const store = configureStore({
    reducer:{
        filter:filterSlice
    }
})

export default store;