import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import JoyBaker2 from "../images/JoyBaker2.jpg";


const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 50px;
    }

    .footerStyle {
        font-size: 20px;
    }

    .Jumbo {
        background: url(${JoyBaker2}) no-repeat;
        background-size: cover;
        height: 550px;
        margin-top: 1px;
        margin-bottom: 1px;
        padding-left: 100px;
        color: white;
        font-size: 40px;
        text-align: left;
        }


   


`;


export default class EventsJumbo extends Component {
    render() {
        return (
            <Styles>
                
                 <Card.Header className="headerStyle">Special Events</Card.Header>
             <Jumbo fluid className="Jumbo">
                <div className="overlay">
                    <Container>
                        
                    </Container>
                </div>
               

                </Jumbo>
                <Card.Footer className="text-muted footerStyle">Special Events for parents and children. 
                             Special familu projects are usuallu held on Saturdaus from 10:00 to 2:pm. We offer snacks, refreshments, and material for the selected project. At leasdt one adult must accompanu their children. Sapeial Projects Event was created to integrate parents and their children socializing in their childdrens daily environment.</Card.Footer>
            </Styles>
           
        )
    }
}
