import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => (
  <div>
    <div id="hero">
      <h1>Hello World</h1>
      <h2>
        My name is Wan Ikmal Fitri. I am a front-end developer and UI/UX
        designer.
      </h2>
    </div>
    <div id="about">
      <h2 className="section_title">About Me</h2>
    </div>
    <div id="skills">
      <h2 className="section_title">Skills</h2>
    </div>

    <div id="portfolio">
      <h2 className="section_title">Portfolio</h2>
    </div>
    <div id="contact" className="contact_wrapper">
      <div className="text-center">
        <h2 className="section_title">Contact</h2>
      </div>
      <Row className="justify-content-center">
        <Col lg={3} md={12}>
          <Row>
            <Col xs='auto 'md='auto'>
              <div className="contact_item">
                <h5>Phone</h5>
                <p>+60-11-56464-624</p>
              </div>
            </Col>
            <Col>
              <div className="contact_item">
                <h5>Email</h5>
                <p>wan.ikmal.fitri@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={9} md={12}>
          <form id="contact-form" action="php/mail.php">
            <Row>
              <Col>
                <p className="form-message" />
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <input
                  className="input_field required"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </Col>
              <Col md={7}>
                <input
                  className="input_field required"
                  type="text"
                  name="message"
                  placeholder="Your message"
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  </div>
);
