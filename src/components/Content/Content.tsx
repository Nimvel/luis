import AboutMe from './About/About'
import s from './Content.module.scss'
import Skills from './Skills/Skills'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'

const Content = () => {
    return (
        <div className={s.content}>
            <AboutMe />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
        </div>
    )
}

export default Content