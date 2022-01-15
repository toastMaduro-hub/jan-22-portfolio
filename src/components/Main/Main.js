import React from "react";
import Type from "../../Assets/TypeWriterEffect/TypeWriter";
import Skills from './Skills/Skills'
import MainIntro from "./MainIntro";
import './Main.css'
import { RiArrowDownSLine } from "react-icons/ri";



class Main extends React.Component {
    render() {
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
                        <a href="#myTarget"><RiArrowDownSLine /></a>
                    </div>
                </div>
                <div id='myTarget'>
                    <Skills />
                </div>
                <div>
                    <MainIntro />
                </div>
            </section>
        )
    }
}

export default Main;

