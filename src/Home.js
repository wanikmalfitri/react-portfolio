import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import zigzagImage from "../src/assets/zigzag.svg";

export const Home = () => (
  <div id="top">
    {/* Start Landing Section */}
    <div id="particles-js" class="landing_wrapper no-bg-img">
      {/* Start Home Section */}
      <div className="landing_content text-center">
        <Container>
          <Row>
            <Col className="text-white cd-intro">
              <h5 class="title-slide-in" data-splitting>
                Hi There, I'm
              </h5>
              <h1 class="title-slide-in" data-splitting>
                Wan Ikmal Fitri
              </h1>
              <h4 class="title-slide-in" data-splitting>
                UI/UX Designer &amp; Developer
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    {/* End Landing Section */}

    {/* Start Main Body */}
    <Container>
      <Row>
        <Col>
          {/* Start About Section */}
          <div id="about" className="about_wrapper">
            <div className="about">
              <Row className="justify-content-center align-item-center">
                <Col lg={2} md={5}>
                  {/* Start About GIF/image */}
                  <div className="about_img">
                    <img className="about_img_1 top" src="zigzagImage" alt="" />
                  </div>
                  {/* End About GIF/image */}
                </Col>
                <Col lg={8} md={10}>
                  {/* Start About details */}
                  <h4>
                    UI / UX Designer &amp; Web Developer. Based in Kuala Lumpur.
                    I code &amp; design for web app and mobile app.
                  </h4>
                  <img className="zigzag" src="assets/zigzag.svg" alt="" />
                  <p class="about_desc">
                    <span>
                    I have 2 years experience as a front-end developer and UI/UX
                    designer
                    </span>
                    I have worked with small startups and large
                    organizations. I love building things and exploring new
                    technology and frameworks, mainly in Javascript. Recently, i
                    discovered JAMStack and i believe that Progressive Web App
                    (PWA) is the next big thing.
                  </p>
                  <br />
                  {/* Start Social Section*/}
                  <ul class="social_links">
                    <li>
                      <a href="#">
                        <span className="icon ion-logo-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ion-logo-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ion-logo-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ion-logo-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ion-md-mail" />
                      </a>
                    </li>
                  </ul>
                  {/* End About details */}
                </Col>
              </Row>
            </div>
          </div>

          {/* Start Skills Section */}
          <div id="skills" className="skills_wrapper">
            <div className="text-center">
              <h2 className="section_title">Skills</h2>
              <Row>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#HTML</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#CSS</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#JavaScript</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#Bootstrap</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#Wordpress</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#ReactJS</Badge>
                  </h3>
                </Col>
                <Col className="badge_wrapper">
                  <h3>
                    <Badge variant="primary">#ReactNative</Badge>
                  </h3>
                </Col>
              </Row>
            </div>
          </div>

          {/* Start Portfolio Section */}
          <div id="portfolio" className="contact_wrapper">
            <Row>
              <Col lg={10}>
                {/* Section Title */}
                <div className="text-center">
                  <h2 className="section_title">Portfolio</h2>
                </div>

                {/* Portfolio List Section */}
                <Row>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>HOMS</h6>
                        <p>React Native</p>
                        <a
                          className="ajax-popup-link"
                          href="./work-details-1.html"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>HOMS</h6>
                        <p>React Native</p>
                        <a
                          className="ajax-popup-link"
                          href="http://homs.com.my/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>iPro</h6>
                        <p>Wordpress</p>
                        <a
                          className="ajax-popup-link"
                          href="https://ipro.my/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>INTELEK</h6>
                        <p>Wordpress</p>
                        <a
                          className="ajax-popup-link"
                          href="https://intelek.org.my/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>ATM Beras Malaysia</h6>
                        <p>Wordpress</p>
                        <a
                          className="ajax-popup-link"
                          href="https://atmberasmalaysia.com/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>Festive Travels</h6>
                        <p>Wordpress</p>
                        <a
                          className="ajax-popup-link"
                          href="https://festivetravels.com.my/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} className="uiux">
                    <div className="work_single_item">
                      <img className="img-fluid" src="img/work_01.jpg" alt="" />
                      <div className="work_info">
                        <h6>FHBC Australia</h6>
                        <p>Wordpress</p>
                        <a
                          className="ajax-popup-link"
                          href="http://firsthomebuyerclub.com.au/"
                        >
                          <span className="icon ion-md-expand" />
                        </a>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
              </Col>
            </Row>
          </div>

          {/* Start Contact Section*/}
          <div id="contact" className="contact_wrapper">
            <div className="text-center">
              <h2 className="section_title">Contact</h2>
            </div>
            <Row className="justify-content-center">
              <Col lg={3} md={12}>
                <Row>
                  <Col xs="auto " md="auto">
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
                      <input
                        className="input_field required"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </Col>
                    <Col md={7}>
                      <textarea
                        className="input_field required"
                        name="message"
                        placeholder="Your message"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="align-self">
                      <button
                        className="button slide-vertical"
                        type="submit"
                        data-splitting
                      >
                        Send Message
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
          {/* End Contact Section*/}

          {/* Start Footer Section*/}
          <footer>
            <a href="/" className="go_top">
              <i class="icon ion-md-home" />
            </a>
            {/* Start Social Section*/}
            <ul class="social_links">
              <li>
                <a href="#">
                  <span className="icon ion-logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon ion-logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon ion-logo-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon ion-logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon ion-md-mail" />
                </a>
              </li>
            </ul>
            <p class="copyright">
              &copy; 2019 <span>wanikmalfitri.xyz</span>. All Rights Reserved.
            </p>
          </footer>
        </Col>
      </Row>
    </Container>
  </div>
);
