
import s from './Testimonials.module.scss'

const Testimonials = () => {
    return (
        <div className={s.testimonials}>
            <h3>Testimonials</h3>
            <div className={s.block}>
                <div className={s.img_3} />
                <div >
                    <h4>limara tusi</h4>
                    <span>ceo, random company</span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
                </div>
            </div>

            <div className={s.squares}>
                <div className={s.square} />
                <div className={s.black_square} />
                <div className={s.square} />
            </div>

            <div className={s.statistics}>
                <div>
                    <div className={s.hands_to_work} />
                    <h4>120</h4>
                    <h5>hands to work</h5>
                </div>
                <div>
                    <div className={s.happy_client} />
                    <h4>310</h4>
                    <h5>happy client</h5>
                </div>
                <div>
                    <div className={s.finished_project} />
                    <h4>510</h4>
                    <h5>finished project</h5>
                </div>
                <div>
                    <div className={s.coffee} />
                    <h4>720</h4>
                    <h5>cups of coffe</h5>
                </div>
            </div>
        </div>
    )
}

export default Testimonials