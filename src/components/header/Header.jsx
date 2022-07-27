import React from "react";
import styles from "./header.module.scss";
import imgHP from "../../img/imgHP.png";


const Header = () => {
  return (
    <>
      <section className={styles.containerHeader}>
        <main>
          <figure>
            <img className={styles.logo} src={imgHP} alt="imgLogo" />
          </figure>
        </main>
        <h2 className={styles.titleSelection}>Selecciona un filtro</h2>
        <section>
          <button className={styles.filtersButtons}> ESTUDIANTES</button>
          <button className={styles.filtersButtons}>STAFF</button>
        </section>
      </section>
    </>
  );
};

export default Header;
