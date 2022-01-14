import React from "react";
import Type from "./TypeWriter";
import MainIntro from "./MainIntro";
import './MainStyles.css'



class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="inner-container">
                        <h1>
                        Hey There!&nbsp;<span className="wave">👋🏾</span> 
                        </h1>
                        <br/>
                        <h1>
                            I'M <strong> JARED VELTSOS</strong>
                        </h1>
                        <br/>
                        <Type />
                    </div>
                </div>
                <div>
                    <MainIntro />
                </div>
                
            </div>
            
        )
    }
}

export default Main;

