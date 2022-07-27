
import { setCharacters } from "./charactersSlice";


export const getCharacters = (page = 0) =>{
    return async(dispatch, getState)=>{
        const resp = await fetch(`http://localhost:4000/characters`);
        const data = await resp.json();
        console.log(data)
        dispatch(setCharacters({characters:data}));
    }
}