import React, {useState} from "react";
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
      <footer>
        <button className={styles.buttonsFooter}>
          FAVORITOS <FavoritesIcon />
        </button>
        <button className={styles.buttonsFooter} onClick={onAdd}>
          AGREGAR <AddCharacter />
        </button>
      </footer>
    </>
  );
};

export default Footer;
