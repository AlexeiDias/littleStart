import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
//import {Jumbotron as Jumbo, Container, Col, Row, Image} from 'react-bootstrap';
import styled from "styled-components";
import TataScooter from "../images/TataScooter2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
    
        .contact {
            margin-top:220px
        }
        .email {
        font-size: 30px;
        padding-top: 0px;
    }

        .footerCard {
            margin-top:30px;
            font-size:50px;
            color:lightpink;
        }
   


`;


export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Card className="bg-dark text-white footerCard">
  <Card.Img src={TataScooter} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
    <p>
          You belong here    
          <FontAwesomeIcon icon="heart" />
    </p>
    
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card.Footer className="text-muted footerStyle"> 
<a className="insta" href="https://www.instagram.com/lilstartdaycare/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    <p className="email"><a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a></p>
    <p className="email"><a href="tel:1-415-705-9104">415 - 7059104</a></p>
</Card.Footer>
                
            </Styles>
           
        )
    }
}

