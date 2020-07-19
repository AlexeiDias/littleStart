import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import MovieTime from "../images/MovieTime.JPG";


const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 30px;
    }

    .footerStyle {
        font-size: 20px;
    }

    


   


`;


export default class SleepJumbo extends Component {
    render() {
        return (
            <Styles>
                
                 <Card.Header className="headerStyle">Movie Nights</Card.Header>
                 <Card className="bg-dark text-white Joycard">
  <Card.Img src={MovieTime} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
        
    </Card.Text>
  </Card.ImgOverlay>
</Card>
                <Card.Footer className="text-muted footerStyle">We offer movie dinner nights throughut the year, usually on Staturday nights, from 7:00pm to 10:00pm. Children will be watching a movie, have dinner and will have circle time to discuss the movie afterwards.</Card.Footer>
            </Styles>
           
        )
    }
}
