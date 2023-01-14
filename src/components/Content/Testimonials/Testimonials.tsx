
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

            <div className={s.statistics}>
                <div>
                    <div className={s.hands_to_work} />
                    <h5>120</h5>
                    <h6>hands to work</h6>
                </div>
                <div>
                    <div className={s.happy_client} />
                    <h5>310</h5>
                    <h6>happy client</h6>
                </div>
                <div>
                    <div className={s.finished_project} />
                    <h5>510</h5>
                    <h6>finished project</h6>
                </div>
                <div>
                    <div className={s.coffee} />
                    <h5>720</h5>
                    <h6>cups of coffe</h6>
                </div>
            </div>
        </div>
    )
}

export default Testimonials