import { AboutMeSection } from "./components/AboutMeSection"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ProjectsSection } from "./components/ProjectsSection"
import { TechSection } from "./components/TechSection"
import "./style/index.scss"

function App() {
  return (
    <>
     <Header/>
     <AboutMeSection/>
     <TechSection/>
     <ProjectsSection/>
     <Footer/>
    </>
  )
}

export default App
