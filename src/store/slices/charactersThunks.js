import { setCharacters, addCharacter, setVibilityModal, setFavorite } from "./charactersSlice";

export const getCharacters = () => {
  return async (dispatch, getState) => {
    const resp = await fetch(`http://localhost:3004/characters`);
    const data = await resp.json();
    dispatch(setCharacters({ characters: data }));
  };
};

export const postCharacters = (character) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:3004/characters`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(character),
    })
      .then((response) => response.json())
      .then((addedcharacter) => {
        dispatch(addCharacter({ character: addedcharacter }));
        dispatch(setVibilityModal({isModalVisible:false}))
      });
  };
};

export const putCharactersFavorite = (character) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:3004/characters/${character.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(character),
    })
      .then((response) => response.json())
      .then((updatedcharacter) => {
        console.log(updatedcharacter);
        dispatch(setFavorite({ character: updatedcharacter }));
      });
  };
};
