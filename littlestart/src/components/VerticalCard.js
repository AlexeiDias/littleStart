import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
import styled from "styled-components";
import AfterProgram from "../images/AfterProgram.jpg"


const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 30px;
    }

    .footerStyle {
        font-size: 20px;
    }

    .Jumbo {
        background: url(${AfterProgram}) no-repeat;
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
                
                 <Card.Header className="headerStyle">Before and after school Program</Card.Header>
             <Jumbo fluid className="Jumbo">
                <div className="overlay">
                    <Container>
                        
                    </Container>
                </div>
               

                </Jumbo>
                <Card.Footer className="text-muted footerStyle">We accept children for the before and after school program.
                            Activities to be discussed according the childens need.</Card.Footer>
            </Styles>
           
        )
    }
}

