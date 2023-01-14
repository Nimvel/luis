
import s from './Portfolio.module.scss'

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <h3>Portfolio</h3>
            <div className={s.images}>
                <div className={s.img_2_1} />
                <div className={s.img_2_2} />
                <div className={s.img_2_3} />
                <div className={s.img_2_4} />
                <div className={s.img_2_5} />
                <div className={s.img_2_6} />
            </div>

            <button>load more</button>

        </div>
    )
}

export default Portfolio