import React from 'react'
import styles from './CSS/Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_2}>
        <div className={styles.img_1236}>   
          <img src="https://guiadelbuenvivir.com/Media/guiadelbuenvivir/dayvo/consejos-para-cuidar-elcorazon.png"   
            alt="Imagen de corazón"                 
          />  
        </div>
      </div>
      <div className={styles.container_1}>
         <input type="text" placeholder="Buscar" className={styles.input_1}/>         
      </div>
      
      <div className={styles.text_1234}>    
        Bienvenido a healthsys
      </div>
      <div className={styles.text_1235}>
           <button className={styles.button_1}>Iniciar sesión</button>
      </div>      
    </div>
  )
}

export default Header