import { createSlice } from "@reduxjs/toolkit";

export const promptSlice = createSlice({
    name:'promptSlice',
    initialState:{
        prompts:[]
    },
    reducers:{
        setPrompts(state,action){
            state.prompts= action.payload
        }
    }
})