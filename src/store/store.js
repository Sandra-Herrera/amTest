import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from './slices/charactersSlice'
export const store = configureStore({
    reducer:{
        characters: charactersSlice.reducer,
        // gryffindor: gryffindorSlice.reducer,
        // staff: staffSlice.reducer, //
        // students: studentsSlice.reducer //
    }
})