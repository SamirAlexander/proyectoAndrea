import React from 'react'
import styles from './CSS/Navbar.module.css'

const NavBar = () => {
    return (
      <div className={styles.container}>
          <div className={styles.container_1}>
              <button className={styles.button}>INICIO</button>
              <button className={styles.button}>NOSOTROS</button>
              <button className={styles.button}>AFILIATE</button>
              <button className={styles.button}>VISIÓN</button>
              <button className={styles.button}>MISIÓN</button>  
              <button className={styles.button}>CANALES DE ATENCIÓN</button>
            </div>
          <div className={styles.container_2}>
              <button className={styles.button}>REGISTRATE</button>
          </div>
      </div>
    );
  };
  

export default NavBar