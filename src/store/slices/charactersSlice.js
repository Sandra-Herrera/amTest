import { createSlice } from '@reduxjs/toolkit';



export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: []
    },
    reducers: {
        setCharacters: (state,  action ) => {
            state.characters = action.payload.characters
        },
        addCharacter: (state,  action ) => {
            return [...state.characters, action.payload.character]
        },
    }
});
export const { addCharacter, setCharacters } = charactersSlice.actions;