import React, { ReactFragment } from "react";
import Favorites from "../favorites/Favorites";
import Header from "../header/Header";
import styles from "./landingPage.module.scss";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import { connect } from 'react-redux';
import { getCharacters } from "../../store/slices/charactersThunks"



class LandingPageClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          characters: []
        }
    }

    
    componentWillUnmount(){
      this.setState({
        characters: []
      })
    }

    componentDidMount() {
      this.props.getCharacters();
    }

    componentDidCatch(){
        console.error('algo salio mal')
    }
    render() {
      const { characters } = this.props.characters;
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
          )
    }
}

const mapStateToProps = state => ({
  characters: state.characters
});
const mapDispatchToProps = (dispatch) => ({ 
  getCharacters: () => dispatch(getCharacters()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageClass);
