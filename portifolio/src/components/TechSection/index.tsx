import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { LiaNode } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import styles from "./style.module.scss"

export const TechSection = () =>{
    return(
        <section className={styles.section}>
            <h2 className="Heading-3-500">Ferramentas que domino</h2>
            <div>
                <div className={styles.icon}><FaReact size={50}/><span className={styles.tooltip}>React</span> </div>
                <div className={styles.icon}><FaHtml5 size={50}/><span className={styles.tooltip}> HTML5</span></div>
                <div className={styles.icon}><IoLogoJavascript size={50} /><span className={styles.tooltip}> JavasScript</span></div>
                <div className={styles.icon}><LiaNode size={50} /><span className={styles.tooltip}> NodeJs</span></div>
                <div className={styles.icon}> <FaPython size={50}/><span className={styles.tooltip}> Python</span></div>
                <div className={styles.icon}><FaCss3 size={50}/><span className={styles.tooltip}> Css3</span></div>
                <div className={styles.icon}><FaSass size={50}/><span className={styles.tooltip}> Sass</span></div>
                <div className={styles.icon}><SiStyledcomponents size={60}/><span className={styles.tooltip}> StyledComponents</span></div>
                <div className={styles.icon}><SiTypescript size={50}/><span className={styles.tooltip}>TypeScript</span></div>
                <div className={styles.icon}><DiDjango size={50}/><span className={styles.tooltip}>Django</span></div>
                <div className={styles.icon}><BiLogoPostgresql  size={50} /><span className={styles.tooltip}>Postgresql</span></div>
            </div>
        </section>
    )
}