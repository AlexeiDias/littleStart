import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import MovieTime from "../images/MovieTime.JPG";


const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 50px;
    }

    .footerStyle {
        font-size: 20px;
    }

    .Jumbo {
        background: url(${MovieTime}) no-repeat;
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


export default class SleepJumbo extends Component {
    render() {
        return (
            <Styles>
                
                 <Card.Header className="headerStyle">Movie Nights</Card.Header>
             <Jumbo fluid className="Jumbo">
                <div className="overlay">
                    <Container>
                        
                    </Container>
                </div>
               

                </Jumbo>
                <Card.Footer className="text-muted footerStyle">We offer movie dinner nights throughut the year, usually on Staturday nights, from 7:00pm to 10:00pm. Children will be watching a movie, have dinner and will have circle time to discuss the movie afterward.</Card.Footer>
            </Styles>
           
        )
    }
}
