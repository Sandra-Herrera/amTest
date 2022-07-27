import React from "react";
import styles from "./header.module.scss";
import LogoHarry from "../../icon/LogoHarry";
import { useSelector, useDispatch } from "react-redux";
import { filterCharacter } from "../../store/slices/charactersSlice";


const Header = () => {
  const { isStudent, isStaff } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  

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
          <button className={`${styles.filtersButtons} ${isStudent ? styles.selected:''}`} onClick={()=>dispatch(filterCharacter({isStudent:!isStudent}))}>ESTUDIANTES</button>
          <button className={`${styles.filtersButtons} ${isStaff ? styles.selected:''}`} onClick={()=>dispatch(filterCharacter({isStaff:!isStaff}))}>STAFF</button>
        </section>
      </section>
    </>
  );
};

export default Header;
