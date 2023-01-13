
import s from './Services.module.scss'

const Services = () => {
    return (
        <div className={s.services}>
            <h2>services</h2>
            <div className={s.columns}>
            <div>
                <div className={`${s.img} ${s.user_research}`} />
                <p>User Reserch</p>
            </div>
            <div>
                <div className={`${s.img} ${s.ia_and_wireframes}`} />
                <p>IA And Wireframes</p>
            </div>
            <div>
                <div className={`${s.img} ${s.user_testing}`} />
                <p>User Testing</p>
            </div>
            <div>
                <div className={`${s.img} ${s.ui}`} />
                <p>Looks and Feel Design (UI)</p>
            </div>
            <div>
                <div className={`${s.img} ${s.delivery}`} />
                <p>Delivery</p>
            </div>
            <div>
                <div className={`${s.img} ${s.support}`} />
                <p>Integration Support</p>
            </div>
            </div>
            
        </div>
    )
}

export default Services