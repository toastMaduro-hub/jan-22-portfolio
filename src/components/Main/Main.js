import React, { useRef } from "react";
import Type from "../../Assets/TypeWriterEffect/TypeWriter";
import Skills from './Skills/Skills'
import MainIntro from "./MainIntro";
import './Main.css'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";




// class Main extends React.Component {

//     render() {
//         return (
//             <section>
//                 <div className="main-container">
//                     <div className="inner-container">
//                         <h1>
//                             Hey There!&nbsp;<span className="wave">👋🏾</span>
//                         </h1>
//                         <br />
//                         <h1>
//                             I'M <strong> JARED VELTSOS</strong>
//                         </h1>
//                         <br />
//                         <Type />
//                     </div>
//                     <div className="down-arrow">
//                         <a href="#myTarget"><RiArrowDownSLine /></a>
//                     </div>
//                 </div>
//                 <div id='myTarget'>
//                     <Skills />
//                 </div>
//                 <div>
//                     <MainIntro />
//                 </div>
//             </section>
//         )
//     }
// }

// export default Main;

function Main() {

    // const skillRef = useRef();
    const mainIntroRef = useRef();
    // const upper = useRef();

    function handleClick() {
        // skillRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        window.scrollTo(0, 800)
    }

    function handleClick2() {
        mainIntroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    function handleClick3() {
        window.scrollTo(0, 0)
    }

    return (
        <section>
            <div className="main-container">
                <div className="inner-container">
                    <h1>
                        Hey There!&nbsp;<span className="wave">👋🏾</span>
                    </h1>
                    <br />
                    <h1>
                        I'M <strong> JARED VELTSOS</strong>
                    </h1>
                    <br />
                    <Type />
                </div>
                <div className="down-arrow">
                    <i onClick={handleClick}><RiArrowDownSLine /></i>
                </div>
            </div>
            <div>
                <Skills />
                <div className="down-arrow">
                    <i onClick={handleClick2}><RiArrowDownSLine /></i>
                </div>
            </div>
            <div ref={mainIntroRef}>
                <MainIntro />
                <div className="down-arrow">
                    <i onClick={handleClick3}><RiArrowUpSLine /></i>
                </div>
            </div>
        </section>
    )

}

export default Main;


