import styles from "./style.module.scss"
import Foto from "../../assets/fotoPerfil.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.fistDiv}><img src={Foto} alt="Foto de Perfil" /> <p className="Heading-4-600">João Vitor Teodoro</p></div>
            <div className={styles.segundDiv}>
                <button className={styles.button}><a href="https://wa.me/5531973415966" className="button-text" target="_blank">Falar no whatsapp</a></button>
                <a href="https://github.com/Teodorok71" target="_blank"><FaGithub className={styles.icon} size={29} /></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-teodoro-563a1a278/" target="_blank"><FaLinkedin className={styles.icon}  size={29}/></a>
            </div>
        </header>
    )
}