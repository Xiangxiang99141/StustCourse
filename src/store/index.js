import  { configureStore } from "@reduxjs/toolkit";
import filterSlice from './module/filterSlice'
import dataSlice from './module/dataSlice'

const store = configureStore({
    reducer:{
        filter:filterSlice,
        data:dataSlice
    }
})

export default store;