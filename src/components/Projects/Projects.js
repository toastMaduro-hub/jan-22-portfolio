// import React from "react";
// import ProjectImages from "./ProjectImages";
// import { Col, Row } from "react-bootstrap";
// import './Projects.css';

// class Projects extends React.Component {
//     render() {
//         return (
//             <div className="project-container">
//             <div className="heading">
//                 <h1>Professional <span className="bold">Projects</span></h1>
//             </div>

//             {/* Map is being called on SkillsIcons array with a callback that returns each item into a column.  */}

//             <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//                 {ProjectImages.map((item) => {
//                     return (
//                         <Col className="project-images">
//                             <div className="img-container">
//                             {item.image}
//                             </div>

//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//         )
//     }
// };

// export default Projects;

import React from "react";
import ProjectImages from "./ProjectImages";
// import { Col, Row } from "react-bootstrap";
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div className="project-container">
                <div className="heading">
                    {/* <h1>Professional <span className="bold">Projects</span></h1> */}
                </div>

                {/* Map is being called on SkillsIcons array with a callback that returns each item into a column.  */}

                <div className="main">
                    {ProjectImages.map((item) => {
                        return (
                            <div className="img-container">
                                <div className="img">
                                    <a>
                                        <h2>{item.title} </h2>
                                        <p>{item.discription}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Projects;

