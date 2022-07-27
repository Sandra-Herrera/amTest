import React from "react";
import styles from "./card.module.scss";
import iconFavorites from "../../img/iconFavorites.png";

const Card = () => {
  return (
    <>
      <section className={styles.cardCharacter}>
        <section className={styles.photoContainer}>
          <img alt="photoStudent"></img>
        </section>

        <section className={styles.infoCharacter}>
          <h2 className={styles.name}>Harry Potter</h2>
          <section className={styles.topSectionCard}>
            <p className={styles.status}>VIVO / ESTUDIANTE</p>
            <button className={styles.buttonSave}>
              <img alt="icon" src={iconFavorites}></img>
            </button>
          </section>
          <section>
            <section>
              <span>Cumpleaños:</span>
              <span>31-07-1980</span>
            </section>
            <section>
              <span>Genero:</span>
              <span>Male</span>
            </section>
            <section>
              <span>Color de ojos:</span>
              <span>Green</span>
            </section>
            <section>
              <span>Color de pelo:</span>
              <span>Black</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
