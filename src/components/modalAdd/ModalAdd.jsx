import React from "react";
import Close from "../../icon/Close";
import styles from "./modalAdd.module.scss";

export function ModalAdd(props) {
  const onClickCloseModal = () => {
    props.setVisible(false);
  };

  return props.visible ? (
    <>
      <section>
        <div id="myModal" className={styles.modal}>
          <div className={styles.centerContent}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={onClickCloseModal}>
                <Close />
              </span>
              <h1 className={styles.titleAddCharacter}>Agrega un personaje</h1>
              <section className={styles.modalContainer}>
                <section className={styles.inputsContainerLeft}>
                  <label>NOMBRE</label>
                  <input
                    type={"text"}
                    id="name"
                    className={styles.nameInput}
                  ></input>
                  <label>COLOR DE OJOS</label>
                  <input
                    type={"text"}
                    id="eyes"
                    className={styles.eyesInput}
                  ></input>
                  <label>GÉNERO</label>
                  <p>
                    <input
                      type={"radio"}
                      value="woman"
                      id="genderWoman"
                      className={styles.genderInput}
                    />{" "}
                    <label for="woman">Mujer</label>
                    <input
                      type={"radio"}
                      value="man"
                      id="genderMan"
                      className={styles.genderInput}
                    />{" "}
                    <label for="man">Hombre</label>
                  </p>
                </section>
                <section className={styles.inputsContainerRight}>
                  <label>CUMPLEAÑOS</label>
                  <input
                    type={"text"}
                    id="birthday"
                    className={styles.birthdayInput}
                  ></input>
                  <label>COLOR DE PELO</label>
                  <input
                    type={"text"}
                    id="hair"
                    className={styles.hairInput}
                  ></input>
                  <label>POSICIÓN</label>
                  <p>
                    <input
                      type={"radio"}
                      value="student"
                      id="positionStudent"
                      className={styles.positionInput}
                    />{" "}
                    <label for="student">Estudiante</label>
                    <input
                      type={"radio"}
                      value="staff"
                      id="positionStaff"
                      className={styles.positionInput}
                    />{" "}
                    <label for="staff">Staff</label>
                  </p>
                </section>
              </section>
              <section className={styles.attachImageArea}>
                    <div>FOTOGRAFIA</div>
              </section>
              <section className={styles.saveButtonArea}>
                    <button className={styles.saveButtonModal}>Guardar</button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : null;
}

export default ModalAdd;
