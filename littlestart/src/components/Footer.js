import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
//import {Jumbotron as Jumbo, Container, Col, Row, Image} from 'react-bootstrap';
import styled from "styled-components";
import TataScooter from "../images/TataScooter2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
    .Jumbo {
        background: url(${TataScooter}) no-repeat;
        background-size: ;
        background-position: 100% 45%;
        height: 550px;
        margin-top: 0px;
        padding-left: 100px;
        padding-top: 50px;
        color: lightpink;
        font-size: 40px;
        text-align: left;
        }
        .contact {
            margin-top:220px
        }
        .email {
        font-size: 30px;
        padding-top: 0px;
    }
   


`;


export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="Jumbo">
                <div className="overlay">
                    <Container>
                    <p>
          You belong here    
          <FontAwesomeIcon icon="heart" />
    </p>
    <p className="contact">Contact</p>
    <a className="insta" href="https://www.instagram.com/lilstartdaycare/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    <p className="email"><a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a></p>
    <p className="email"><a href="tel:1-415-705-9104">415 - 7059104</a></p>
                    </Container>
                </div>
                </Jumbo>
            </Styles>
           
        )
    }
}

