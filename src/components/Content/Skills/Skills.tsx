
import s from './Skills.module.scss'

import xd from '../../../assets/images/xd.png'
import ae from '../../../assets/images/ae.png'
import ps from '../../../assets/images/ps.png'
import ai from '../../../assets/images/ai.png'

// import CanvasJSReact from '../../../assets/canvasjs.react'
// import { Component } from 'react'

// var CanvasJS = CanvasJSReact.CanvasJS
// var CanvasJSChart = CanvasJSReact.CanvasJSChart

// class Skills extends Component {
//     render() {
//         const options = {
//             animationEnabled: true,
//             axisY: {
//                 suffix: "%"
//             },
//             data: [{

//                 type: "splineArea",
//                 dataPoints: [
//                     { label: '', y: 50 },
//                     { label: 'xd', y: 83 },
//                     { label: '', y: 55 },
//                     { label: 'ai', y: 72 },
//                     { label: '', y: 48 },
//                     { label: 'ps', y: 97 },
//                     { label: '', y: 48 },
//                     { label: 'ae', y: 83 },
//                     { label: '', y: 50 },
//                 ]
//             }]
//         }

//         return (
//             <div className={s.skills}>
//                 <h2>my skills</h2>
//                 <CanvasJSChart options={options} />
//             </div>
//         )
//     }
// }

const Skills = () => {
    return (
        <div className={s.skills}>
            <h3>my skills</h3>
            <div className={s.skill_chart}>
                <div className={s.percents}>
                    <span>100%</span>
                    <span>90%</span>
                    <span>80%</span>
                    <span>70%</span>
                    <span>60%</span>
                    <span>50%</span>
                </div>
                <div>
                    <div className={s.chart} />
                    <div className={`${s.point} ${s.point_1}`} />
                    <div className={`${s.point} ${s.point_2}`} />
                    <div className={`${s.point} ${s.point_3}`} />
                    <div className={`${s.point} ${s.point_4}`} />
                </div>
            </div>
            <div className={s.icons}>
                <div className={s.xd} />
                <div className={s.ae} />
                <div className={s.ps} />
                <div className={s.ai} />
            </div>


        </div>
    )
}

export default Skills