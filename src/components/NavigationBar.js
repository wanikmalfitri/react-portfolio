import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <header>
    <Container>
      <Row>
        <Col md={3} lg={8}>
          <h2 id='top'>WIF</h2>
        </Col>
        <Col md={9} lg={4}>
          <ul id='menu_items' className="menu_items">
            <li className='nav-item'>
              <a href='#top' className='active menu_item nav-link slide-horizontal'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='#about' className='active menu_item nav-link slide-horizontal'>About Me</a>
            </li>
            <li className='nav-item'>
              <a href='#skills' className='active menu_item nav-link slide-horizontal'>Skills</a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio' className='active menu_item nav-link slide-horizontal'>Portfolio</a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='active menu_item nav-link slide-horizontal'>Contact</a>
            </li>
          </ul>
   
                        <div class="nav-btn">
                            <span class="ion-android-menu"></span>
                        </div>
        </Col>
      </Row>
    </Container>
    </header>
    
  </Styles >
)