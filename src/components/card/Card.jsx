import React from "react";
import styles from "./card.module.scss";
import iconFavorites from "../../img/iconFavorites.png";


const Card = (props) => {
  const character = props.character;
  const getColor = (house) => {
    if(house.toLowerCase() === "slytherin"){
      return styles.slytherinGrandient
    }
    else if(house.toLowerCase() === "ravenclaw"){
      return styles.ravenclawGrandient
    }
    else if(house.toLowerCase() === "hufflepuff"){
      return styles.hufflepuffGrandient
    }
    else if(house.toLowerCase() === "gryffindor"){
      return styles.gryffindorGrandient
    }
    else{
      return styles.whiteBackgroundColor
    }
  }

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
            <button className={styles.buttonFav}>
              <img alt="icon" src={iconFavorites}></img>
            </button>
          </section>
          <section className={styles.bottomCard}>
            <section>
              <span>Cumpleaños:</span>
              <span>{character.dateOfBirth}</span>
            </section>
            <section>
              <span>Genero:</span>
              <span>{character.gender}</span>
            </section>
            <section>
              <span>Color de ojos:</span>
              <span>{character.eyeColour}</span>
            </section>
            <section>
              <span>Color de pelo:</span>
              <span>{character.hairColour}</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
