import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header_block}>
            <div className={s.header}>

            <div className={s.logo}>
                <div className={s.ball} />
                <p>oenrique</p>
                <span>ux/ui expert</span>
            </div>

            <div className={s.navbar}>
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Portfolio</span>
                <span>Contact</span>
            </div>

            <div className={s.block}>
                <h1>Luis Oenrique</h1>
                <p>User Experience / User Interface Expert</p>
                <div className={s.buttons_block}>
                    <button>know more</button>
                    <button>hire me</button>
                </div>
            </div>

            </div>
            
<div className={s.background} />

        </div>
    )
}

export default Header