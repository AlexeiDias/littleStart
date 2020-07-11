import React from 'react'
import {Card as CardG, Card} from 'react-bootstrap'
import AfterProgram from "../images/AfterProgram.jpg"
import styled from "styled-components";
import {Image, Container, Row, Col} from 'react-bootstrap';


const Styles = styled.div`
   
        .textStyle {
        font-size: 25px;
        margin-top: 30px;
    }
       .h1Style {
           padding-top: 100px;
       }


`;

export default function VerticalCard() {
    return (
       <Styles>
        <div>
           <Container className="textStyle">
                <Row>
                <Col xs={6} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={AfterProgram} />
                        
                </Card>
                </Col>
                   
                 <Col xs={6} md={8}>
                     <h1 className="h1Style" >Before and after school Program</h1>
                        <p className="textStyle">
                            We accept children for the before and after school program.
                            Activities to be discussed according the childens need.
                        </p>
                </Col>
                </Row>
           </Container>
            
        </div>
        </Styles>
        
    )
}
