import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from "styled-components";


const Styles = styled.div`
    .Jumbo {
        background-color: transparent;
        height: 50px;
        margin-top: 30px;
        padding-left: 5px;
        padding-top: 0px;
        color: darkgrey;
        font-size: 30px;
        text-align: center;
        }
    .author {
        font-size: 20px;
    }
   


`;


export default class JumboCote extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="Jumbo">
                <div className="overlay">
                    <Container>
                        <p>
                             "I continue to belive if children are given the necessary tools to succeed, they will succeed beyond their wildest dreams."<br></br>
                             
                        </p>
                        <p className="author">-David Vitter </p>
                    </Container>
                </div>
                </Jumbo>
            </Styles>
           
        )
    }
}
