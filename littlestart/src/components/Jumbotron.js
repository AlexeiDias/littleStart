import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
import styled from "styled-components";
import JoyMaozinha from "../images/JoyMaozinha.jpg";


const Styles = styled.div`
    .Joycard {
        margin-top:30px;
        }
        .imageText {
        font-size: 50px;
        text-align: center;
        padding-top: 5px;


    }
   


`;


export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Card className="bg-dark text-white Joycard">
  <Card.Img src={JoyMaozinha} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
        <p className="imageText">
        Find your happiness <br/>
                             and learn to put it first.
         </p>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
                
            </Styles>
           
        )
    }
}
