import styles from "./style.module.scss"
import { FaShare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const ProjectsSection = () =>{
    return(
        <section className={styles.section}>
            <section className={styles.fistSection}>
                <h3 className="Heading-4-600">Vamos trocar uma ideia?</h3>
                <p>No linkedIn sempre estou <span className="body-1-600">compartilhando</span> meus <br/> processos diários para desenvolver esses projetos e <br/> estou disposto a trocar algumas ideias por lá</p>
                <button className={styles.button}><a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-teodoro-563a1a278/" className="button-text" target="_blank">Acessar perfil no LinkedIn</a></button>
            </section>
            <section className={styles.secondSection}>
                <h3 className="Heading-4-600">Projetos</h3>
                <h2 className="Heading-2-600">Projetos by Kenzie Academy Brasil</h2>
                <ul>
                    <li>
                        <h3 className="Heading-3-500"> Kenzie Hub</h3>
                        <p className="body-2-500">Linguagens: <div><span>React</span></div> <div><span>Sass</span></div> <div><span>Api Rest</span></div> </p>
                        <span className="body-1-405">Esté é um projeto de criação de usuários e regitros, com um crud completo e usando proteção de rotas.</span>
                        <div>
                            <div>
                            <FaGithub/>
                            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_Teodorok71-T18" target="_blank" className="body-2-505">Github Code</a>
                            </div>
                            <div>
                            <FaShare/>
                            <a href="https://react-entrega-kenzie-hub-teodorok71-t18.vercel.app/" target="_blank" className="body-2-505">Aplicação</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3 className="Heading-3-500"> Nu Kenzie</h3>
                        <p className="body-2-500">Linguagens: <div><span>React</span></div> <div><span>Sass</span></div></p>
                        <span className="body-1-405">Esté é uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas...</span>
                        <div>
                            <div>
                            <FaGithub/>
                            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie_Teodorok71-T18" target="_blank" className="body-2-505">Github Code</a>
                            </div>
                            <div>
                            <FaShare/>
                            <a href="https://react-entrega-s1-template-nu-kenzie-teodorok71-t18.vercel.app/" target="_blank" className="body-2-505">Aplicação</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3 className="Heading-3-500"> Jobs</h3>
                        <p className="body-2-500">Linguagens: <div><span>React</span></div> <div><span>TypeScript</span></div> <div><span>Styled components</span></div> <div><span>ApiRest</span></div> </p>
                        <span className="body-1-405">Esse foi um projeto em um grupo com 5 pessoas e o objetivo foi criar é uma aplicação de cadrastros de empresas "usuários" e as empresas cadrastrados podem criar vaga de trabalho para pessoas se candidarem a tal vaga.</span>
                        <div>
                            <div>
                            <FaGithub/>
                            <a href="https://github.com/rcoelhomf/Kenzie-Jobs-T17-tsunode" target="_blank" className="body-2-505">Github Code</a>
                            </div>
                            <div>
                            <FaShare/>
                            <a href="https://kenzie-jobs-t17-tsunode.vercel.app" target="_blank" className="body-2-505">Aplicação</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    )
}