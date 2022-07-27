import React,{useState, useEffect} from "react";
import Close from "../../icon/Close";
import styles from "./modalAdd.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { postCharacters } from "../../store/slices/charactersThunks";
import { setVibilityModal } from "../../store/slices/charactersSlice";

export function ModalAdd(props) {
  const { isModalVisible } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const[character,setCharacter] = useState({id:''});
  
  useEffect(()=>{
    setCharacter({...character,id:new Date().getUTCMilliseconds()})
  },[isModalVisible]);

  const handleChange = (e) => {
    const {id,value} = e.target;
    setCharacter({...character,[id]:value});
  }

  const onClickGender = (e) => {
    const {value} = e.target;
    setCharacter({...character,'gender':value});
  }
  
  const onClickPosition = (e) => {
    const {value} = e.target;
    const staff = value === 'staff' ? true : false;
    const student = value === 'student' ? true : false;
    setCharacter({...character,'hogwartsStaff':staff,'hogwartsStudent':student});
  }
  
  return isModalVisible ? (
    <>
      <section>
        <div id="myModal" className={styles.modal}>
          <div className={styles.centerContent}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={()=>dispatch(setVibilityModal({isModalVisible:false}))}>
                <Close />
              </span>
              <h1 className={styles.titleAddCharacter}>Agrega un personaje</h1>
              <section className={styles.modalContainer}>
                <section className={styles.inputsContainerLeft}>
                  <label>NOMBRE</label>
                  <input
                    type={"text"}
                    id="name"
                    className={styles.inputText}
                    onChange={handleChange}
                    tabIndex="1"
                  ></input>
                  <label>COLOR DE OJOS</label>
                  <input
                    type={"text"}
                    id="eyeColour"
                    className={styles.inputText}
                    onChange={handleChange}
                    tabIndex="3"
                  ></input>
                  <label>GÉNERO</label>
                  <p>
                    <input
                      type={"radio"}
                      value="female"
                      id="genderWoman"
                      name="gender"
                      className={styles.genderInput}
                      onClick={onClickGender}
                      tabIndex="5"
                    />{" "}
                    <label htmlFor="woman">Mujer</label>
                    <input
                      type={"radio"}
                      value="male"
                      id="genderMan"
                      name="gender"
                      className={styles.genderInput}
                      onClick={onClickGender}
                    />{" "}
                    <label htmlFor="man">Hombre</label>
                  </p>
                </section>
                <section className={styles.inputsContainerRight}>
                  <label>CUMPLEAÑOS</label>
                  <input
                    type={"text"}
                    id="dateOfBirth"
                    onChange={handleChange}
                    className={styles.inputText}
                    tabIndex="2"
                  ></input>
                  <label>COLOR DE PELO</label>
                  <input
                    type={"text"}
                    id="hairColour"
                    className={styles.inputText}
                    onChange={handleChange}
                    tabIndex="4"
                  ></input>
                  <label>POSICIÓN</label>
                  <p>
                    <input
                      type={"radio"}
                      value="student"
                      id="positionStudent"
                      name="position"
                      className={styles.positionInput}
                      onClick={onClickPosition}
                      tabIndex="6"
                    />{" "}
                    <label htmlFor="student">Estudiante</label>
                    <input
                      type={"radio"}
                      value="staff"
                      id="positionStaff"
                      name="position"
                      className={styles.positionInput}
                      onClick={onClickPosition}
                    />{" "}
                    <label htmlFor="staff">Staff</label>
                  </p>
                </section>
              </section>
              <section className={styles.attachImageArea}>
                <div>FOTOGRAFIA</div>
              </section>
              <section className={styles.saveButtonArea}>
                <button className={styles.saveButtonModal} onClick={()=>dispatch(postCharacters(character))}>Guardar</button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : null;
}

export default ModalAdd;
