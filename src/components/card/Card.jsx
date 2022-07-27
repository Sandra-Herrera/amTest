import React from "react";
import styles from "./card.module.scss";
import { useDispatch } from "react-redux";
import { FavoritesIcon } from "../../icon/FavoritesIcon"
import { putCharactersFavorite } from "../../store/slices/charactersThunks";
//import { setFavorite } from "../../store/slices/charactersSlice";


const Card = (props) => {
  const character = props.character;
  const getColor = (house) => {
    if(house?.toLowerCase() === "slytherin"){
      return styles.slytherinGrandient
    }
    else if(house?.toLowerCase() === "ravenclaw"){
      return styles.ravenclawGrandient
    }
    else if(house?.toLowerCase() === "hufflepuff"){
      return styles.hufflepuffGrandient
    }
    else if(house?.toLowerCase() === "gryffindor"){
      return styles.gryffindorGrandient
    }
    else{
      return styles.whiteBackgroundColor
    }
  }


  const dispatch = useDispatch();
  return (
    <>
    <section className={styles.cardCharacter}>
          <section className={`${styles.photoContainer} ${getColor(character.house)}`}>
            <figure className={styles.image} style={{backgroundImage: 'url(' + character.image + ')'}}></figure>
          </section>
        
        <section className={styles.infoCharacter}>
          <h2 className={styles.name}>{character.name}</h2>
          <section className={styles.topSectionCard}>
            <span className={styles.status}>{character.alive ? 'VIVO':'MUERTO'} / {character.hogwartsStaff ? 'STAFF' : (character.hogwartsStudent ? 'ESTUDIANTE' : 'OTROS')}</span>
            <button className={`${styles.buttonFav} ${character.isFavorite ? styles.selected : styles.unselected}`} onClick={()=>dispatch(putCharactersFavorite({...character,isFavorite:!character.isFavorite}))}>
              <FavoritesIcon/>
            </button>
          </section>
          <section className={styles.bottomCard}>
            <section>
              <span className={styles.leftSpan}>Cumpleaños:</span>
              <span>{character.dateOfBirth}</span>
            </section>
            <section>
              <span className={styles.leftSpan}>Genero:</span>
              <span>{character.gender}</span>
            </section>
            <section>
              <span className={styles.leftSpan}>Color de ojos:</span>
              <span>{character.eyeColour}</span>
            </section>
            <section>
              <span className={styles.leftSpan}>Color de pelo:</span>
              <span>{character.hairColour}</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
