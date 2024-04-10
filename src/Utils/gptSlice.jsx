import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { configure } from "@testing-library/react";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
    },
    reducers:{
        toggleGptSearchView:(state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})
export const{toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;