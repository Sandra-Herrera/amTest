import React, { useState } from "react";
import styles from "./footer.module.scss";
import ModalAdd from "../modalAdd/ModalAdd";
import { AddCharacter } from "../../icon/AddCharacter";
import { FavoritesIcon } from "../../icon/FavoritesIcon";

const Footer = () => {
  const [addModal, setAddModal] = useState({ visibility: false });

  const onAdd = () => {
    let modalCharacter = {};
    setAddModal({ visibility: true, modalCharacter });
  };
  const onClickHide = () => {
    // getAllProduct();
    setAddModal({ visibility: false });
  };

  return (
    <>
      <ModalAdd
        onClickCloseModal={onClickHide}
        visible={addModal.visibility}
        attrProduct={addModal.modalCharacter}
      ></ModalAdd>
      <footer className={styles.containerFooter}>
        <button className={styles.buttonFavoritesFooter}>
          FAVORITOS <FavoritesIcon />
        </button>
        <button className={styles.buttonAddFooter} onClick={onAdd}>
          AGREGAR <AddCharacter />
        </button>
      </footer>
    </>
  );
};

export default Footer;
