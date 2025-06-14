import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false,
    type:["必修","選修","通識"],
    class:"工資"
}

const fliterSlice = createSlice({
    name:'filter',
    initialState:initialState,
    reducers:{
        setIsOpen(state,action){
            state.isOpen = !state.isOpen
        },
        setType(state,action){
            state.type = action.payload
        },
        setClass(state,action){
            state.class = action.payload
        }
    }
});

export const {setIsOpen,setType,setClass} =  fliterSlice.actions;
export default fliterSlice.reducer;