import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Col, Row, Image} from 'react-bootstrap';
import styled from "styled-components";
import Tata from "../images/Tata.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Styles = styled.div`
    .Jumbo {
        background-color: #ff8080;
        background-size: cover;
        height: 550px;
        margin-top: 50px;
        padding-left: 100px;
        padding-top: 120px;
        color: white;
        font-size: 40px;
        text-align: left;
        }
    .Image {
        height: 300px;
        width: 300px;
        margin-bottom: 100px;
        }
    .slogan {
        font-size: 30px;
        padding-top: 120px;
        /* word-spacing: 30px; */
    }

    .email {
        font-size: 25px;
        padding-top: 75px;
    }
   


`;


export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo  className="Jumbo">
                <div className="overlay">
                <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image className="Image" src={Tata} rounded />
    </Col>
    <Col xs={6} md={4}>
      <p className="slogan">
          You belong here    
          <FontAwesomeIcon icon="heart" />
    </p>
    
    </Col>
    <Col xs={6} md={4}>
    <a href="https://www.w3schools.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    <p className="email"><a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a></p>
    <p className="email"><a href="tel:1-415-705-9104">415 - 7059104</a></p>
    </Col>
  </Row>
</Container>
                </div>
                </Jumbo>
            </Styles>
           
        )
    }
}
