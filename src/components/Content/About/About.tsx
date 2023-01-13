import s from './About.module.scss'

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.column_1}>
            <h2>know more about me</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                pellentesque eu, pretium quis, sem. 
                Nulla consequat massa quis enim.</p>
            <button>download my cv</button>
            </div>
            <div className={s.img_1} />
        </div>
    )
}

export default About