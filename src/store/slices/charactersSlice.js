import { createSlice } from '@reduxjs/toolkit';



export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        allCharacters: [],
        isStudent: false,
        isStaff: false,
        isModalVisible:false,
    },
    reducers: {
        setCharacters: (state,  action ) => {
            state.characters = action.payload.characters;
            state.allCharacters = action.payload.characters;
        },
        addCharacter: (state,  action ) => {
            state.characters = [...state.characters, action.payload.character]
        },
        filterCharacter: (state, action) =>{
            state.isStudent = action.payload.isStudent;
            state.isStaff = action.payload.isStaff;
            if(state.isStudent){
                state.characters = state.allCharacters.filter((character)=>character.hogwartsStudent===state.isStudent);
            }
            if(state.isStaff){
                state.characters = state.allCharacters.filter((character)=>character.hogwartsStaff===state.isStaff);
            }
            if(!state.isStudent && !state.isStaff){
                state.characters = state.allCharacters;
            }
        },
        setVibilityModal:(state, action)=>{
            state.isModalVisible = action.payload.isModalVisible;
        },
        setFavorite:(state, action)=>{
            console.log(action.payload);
            state.characters = state.characters.map((character)=>{
                if(character.id === action.payload.character.id){
                    character = {...character,isFavorite:action.payload.character.isFavorite}
                }
                return character;
            });
            state.allCharacters = state.allCharacters.map((character)=>{
                if(character.id === action.payload.character.id){
                    character = {...character,isFavorite:action.payload.character.isFavorite}
                }
                return character;
            });
        }
    }
});
export const { addCharacter, setCharacters, filterCharacter, setVibilityModal, setFavorite } = charactersSlice.actions;
