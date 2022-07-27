import React from "react";
import Favorites from "../favorites/Favorites";
import Header from "../header/Header";
import Card from "../card/Card";
import styles from "./landingPage.module.scss";
import Footer from "../footer/Footer";


const LandingPage = () => {

    return(
        <>
          <div className={styles.landingContainer}>
            <Favorites/>
            <Header/>
            <section className={styles.cardsContainer}>
              <Card/>
              <Card/>
            </section>
            <Footer/>
          </div>  
        </>
    );
}

export default LandingPage;