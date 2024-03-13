import styles from "./style.module.scss"

export const AboutMeSection = () =>{
    return(
        <section className={styles.section}>
            <h1 className="Heading-1-700">Sobre mim</h1>
            <p className="body-1-400">Sou estudante de programação na Kenzie Academy Brasil, participei de diversos projetos <br/> resolvendo problemas de alto nível e desenvolvendo habilidades e agora estou em <br/> busca da minha primeira oportunidade no mercado de trabalho!</p>
        </section>
    )
}