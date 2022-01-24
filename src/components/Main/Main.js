import React from "react";
import Type from "../../Assets/TypeWriterEffect/TypeWriter";
import Skills from './Skills/Skills'
import MainIntro from "./MainIntro";
import './Main.css'
import DownArrow from "../../Assets/DownArrow/DownArrow";

function Main() {

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
                <DownArrow locationX={0} locationY={800} />
            </div>
            <div>
                <Skills />
                <DownArrow locationX={0} locationY={1750} />
            </div>
            <div>
                <MainIntro />
                <DownArrow location='bottom' locationX={0} locationY={0} />
            </div>
        </section>
    )
}

export default Main;






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