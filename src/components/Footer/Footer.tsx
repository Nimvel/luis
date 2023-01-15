import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h3>say hello!</h3>
            <div className={s.background} />
            <div className={s.form} >
                <div className={s.inputs}>
                <input placeholder='Name' />
                <input placeholder='Email' />
                </div>
                
                <textarea placeholder='Message' />
                <button>send</button>
            </div>
            <div className={s.block}>
            <p>
                2017 All Right Resetved
            </p>
            </div>
            
        </div>
    )
}

export default Footer