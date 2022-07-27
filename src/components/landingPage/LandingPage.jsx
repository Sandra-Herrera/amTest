import React from "react";
import Favorites from "../favorites/Favorites";
import Header from "../header/Header";
import Card from "../card/Card";
import styles from "./landingPage.module.scss";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../store/slices/charactersThunks"

const LandingPage = () => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
    console.log(characters);
  }, []);

  return (
    <>
      <div className={styles.landingContainer}>
        <Favorites/>
        <Header />
        <section className={styles.cardsContainer}>
          {characters.map((character, index)=>
            <Card key={index} character={character} />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
