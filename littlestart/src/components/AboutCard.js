import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import family from "../images/family.jpg";
import Footer from "../components/Footer"


const Styles = styled.div`

    .headerStyle {
        font-size: 30px;
        margin-top: 50px;
        font-weight: 300;
        line-height: 1.5;
        
    }

    .footerStyle {
        font-size: 20px;
    }

    .Jumbo2 {
        background: url(${family}) no-repeat;
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


export default class AboutCard extends Component {
    render() {
        return (
            <Styles>
                
                <Card.Body>
                 <Card.Text className="text-justify headerStyle">
                     <p>Once upon a time there was a girl who travelled to see the world, this girl wanted to learn a new language, meet new people and get to know how other cultures behave and interact with others. This girl came all they way from South America to the United States and learned a lot of things like speaking English and Spanish. Once in the United States this girl studied a lot, she took about 2 years of ESL classes and than she coursed International Business at CCSF. Then one day she fell in love and got married had two beautiful children, Zen and Joy who are the highlights of her life. Becoming a mother made her realize how amazing it is to be around children, so she decided to open a children daycare and have a whole bunch of these awesome beings in her place.  And then she lived haply forever. 
                     </p>
</Card.Text>
</Card.Body>

             <Jumbo fluid className="Jumbo2">
                <div className="overlay">
                    <Container>
                        
                    </Container>
                </div>
               

                </Jumbo>
            <Footer></Footer>
            </Styles>
           
        )
    }
}
