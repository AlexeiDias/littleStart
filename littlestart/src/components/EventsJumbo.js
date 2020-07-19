import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import FamilyProject2 from "../images/FamilyProject2.png";



const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 30px;
    }

    .footerStyle {
        font-size: 20px;
    }

    


   


`;


export default class EventsJumbo extends Component {
    render() {
        return (
            <Styles>
                
                 <Card.Header className="headerStyle">Special Events</Card.Header>
                 <Card className="bg-dark text-white Joycard">
  <Card.Img src={FamilyProject2} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
        
    </Card.Text>
  </Card.ImgOverlay>
</Card>
                <Card.Footer className="text-muted footerStyle">Special Events for parents and children. 
                             Special family projects are usually held on Saturdaus from 10:00 to 2:pm. We offer snacks, refreshments, and material for the selected project. At least one adult must accompany their children. Sapeial Projects Event was created to integrate parents and their children socializing in their childdrens daily environment.</Card.Footer>
            </Styles>
           
        )
    }
}
