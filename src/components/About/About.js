import React from "react";
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div
                className="about-sec"
                style={{
                    display: 'flex',
                    justifyContent: 'Right',
                    alignItems: 'Right',
                    height: '100vh'
                }}
            >
                <h1>This is my about page</h1>
            </div>
        );
    };
};

export default About;
