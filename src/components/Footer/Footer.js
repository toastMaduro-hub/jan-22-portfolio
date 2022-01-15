import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterAssets from "./FooterAssets";
import './Footer.css';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Jared Veltsos</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} SB</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        {FooterAssets.map((item, index) => {
                            return (
                                <li key={index} className="social-icons">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.image}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;