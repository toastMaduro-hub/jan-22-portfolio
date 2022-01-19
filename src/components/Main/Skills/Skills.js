// import React, { useRef } from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiGit,
//   DiStackoverflow,
//   DiCss3,
//   DiHtml5,
//   DiGithubBadge,
// } from "react-icons/di";
// import { SiExpress } from "react-icons/si"
// import './Skills.css'

// function Skills() {

//   return (
//     <div className="skills-container">
//         <div className="title">
//             <h1>Professional <span className="bold">Skillset</span></h1>
//         </div>

//         <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiMongodb />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <SiExpress />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiReact />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiNodejs />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiJavascript1 />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiCss3 />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiHtml5 />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiGit />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiGithubBadge />
//         </Col>
//         <Col xs={4} md={2} className="tech-icons">
//             <DiStackoverflow />
//         </Col>
//         </Row>
//     </div>



//   );
// }

// export default Skills;

// ** Refreacted original code to pull from data set in SkillsIcons. Keeping it dry and easier to update. **

import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillsIcons from './SkillsIcons';
import './Skills.css'

function Skills() {
    return (
        <div className="skills-container">
            <div className="title">
                <h1>Professional <span className="bold">Skillset</span></h1>
            </div>

            {/* Returning each icon with map */}

            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {SkillsIcons.map((item) => {
                    return (
                        <Col xs={4} md={2} className="tech-icons">
                            {item.image}
                        </Col>
                    )
                })}
            </Row>
        </div>



    );
}

export default Skills;