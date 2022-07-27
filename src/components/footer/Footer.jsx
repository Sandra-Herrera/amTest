import React, { useLayoutEffect, useState } from "react";
import styles from "./footer.module.scss";
import ModalAdd from "../modalAdd/ModalAdd";
import { useSelector, useDispatch } from "react-redux";
import { AddCharacter } from "../../icon/AddCharacter";
import { FavoritesIcon } from "../../icon/FavoritesIcon";
import { setVibilityModal } from "../../store/slices/charactersSlice";
import { DeleteIcon } from "../../icon/DeleteIcon";
import { putCharactersFavorite } from "../../store/slices/charactersThunks";

const Footer = () => {
  const [width] = useWindowSize();
  const {allCharacters} = useSelector((state)=>state.characters);
  const dispatch = useDispatch();
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
 
  const getAllFavoriteCharacters = () =>{
    setIsFavoritesVisible(!isFavoritesVisible);
  };

  const styleDisplayUp = ()=>{
    if(width<=930){
      let nFav = allCharacters.filter(cha=>cha.isFavorite).length;
      return {top:`-${nFav*100}%` };
    }
    else{
      return{};
    }
  }

  return (
    <>
      <ModalAdd></ModalAdd>
      <footer className={styles.containerFooter}>
        <ul className={styles.nav}>
          <li>
            <button className={styles.buttonFavoritesFooter} onClick={getAllFavoriteCharacters}>
              FAVORITOS <FavoritesIcon />
            </button>
            <ul style={styleDisplayUp()}>
              {
                isFavoritesVisible ?
                  allCharacters.map((character,index) => {
                    if (character?.isFavorite) {
                      return <li key={index}>
                        <div className={styles.favContainer}>
                          <figure className={styles.image} style={{backgroundImage: 'url(' + character.image + ')'}}></figure>
                          <button>{character.name}</button>
                          <section className={styles.deleteIcon} onClick={()=>dispatch(putCharactersFavorite({...character,isFavorite:false}))}>
                            <DeleteIcon/>
                          </section>
                          
                        </div>
                      </li>
                    }
                  })
                  :
                  ''
              }
            </ul>
          </li>
          <li>
            <button className={styles.buttonAddFooter} onClick={() => dispatch(setVibilityModal({ isModalVisible: true }))}>
              AGREGAR <AddCharacter />
            </button>
          </li>
        </ul>
      </footer>
    </>
  );
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default Footer;
