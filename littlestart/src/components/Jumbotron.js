import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import JoyMaozinha from "../images/JoyMaozinha.jpg";


const Styles = styled.div`
    .Jumbo {
        background: url(${JoyMaozinha}) no-repeat;
        background-size: cover;
        height: 550px;
        margin-top: 0px;
        padding-left: 100px;
        padding-top: 250px;
        color: white;
        font-size: 60px;
        text-align: left;
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
                             Find your happiness <br/>
                             and learn to put it first.
                        </p>
                    </Container>
                </div>
                </Jumbo>
            </Styles>
           
        )
    }
}
