import AboutMe from './AboutMe/AboutMe'
import s from './Content.module.scss'
import MySkills from './MySkills/MySkills'
import Portfolio from './Portfolio/Portfolio'
import SayHello from './SayHello/SayHello'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'

const Content = () => {
    return (
        <div className={s.content}>
            <AboutMe />
            <Services />
            <MySkills />
            <Portfolio />
            <Testimonials />
            <SayHello />
        </div>
    )
}

export default Content