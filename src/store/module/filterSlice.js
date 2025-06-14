import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}

const fliterSlice = createSlice({
    name:'filter',
    initialState:initialState,
    reducers:{
        setIsOpen(state,action){
            state.isOpen = !state.isOpen
        }
    }
});

export const {setIsOpen} =  fliterSlice.actions;
export default fliterSlice.reducer;