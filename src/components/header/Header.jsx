import React from "react";
import styles from "./header.module.scss";
import LogoHarry from "../../icon/LogoHarry";


const Header = () => {
  return (
    <>
      <section className={styles.containerHeader}>
        <main>
          <figure>
            <LogoHarry/>
          </figure>
        </main>
        <h2 className={styles.titleSelection}>Selecciona un filtro</h2>
        <section className={styles.filterArea}>
          <button className={styles.filtersButtons}> ESTUDIANTES</button>
          <button className={styles.filtersButtons}>STAFF</button>
        </section>
      </section>
    </>
  );
};

export default Header;
