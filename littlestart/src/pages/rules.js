import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
// import {container as Container} from 'react-bootstrap';
import styled from "styled-components";
import ZenJoyPlay from "../images/ZenJoyPlay.jpg";


const Styles = styled.div`

    .headerStyle {
        font-size: 20px;
        margin-top: 50px;
    }

    .footerStyle {
        font-size: 20px;
    }

    
    .imageText {
        font-size: 60px;
        text-align: center;
        padding-top: 50px;

    }
   


`;


export default class Rules extends Component {
    render() {
        return (
            <Styles>
                
                
<Card className="text-justify headerStyle">
  <Card.Header>Our rules and policy</Card.Header>
  <Card.Body>
    
    <Card.Text>
    <p>
        01 — Communication is a must!
All official communication will be made by email to be send to our email: littlestartdaycare@gmail.com
* In the event where you will disconnect your child from the program, we expect 4 weeks  in advance. You will be requested to pay 2 weeks deposit upon your child’s registration, we charge $100 non refundable registration fee. 
* You will be provided a year calendar containing all celebrations days off, vacation days and sick days. 
* In the event of sick or celebration days outside of the agreed calendar schedule you must notify us by email or text message to be send to the phone number we will provide you when you register your child. 
* Please initially reach out by email to discuss any related child care such as questions about your child’s daily routine, diet, socialization we will be happy to reply within 24 to 48 hours. For further matters we can always schedule a time outside of the care hours, so we can focus better on the meeting and to prize the safety of all children in the daycare. We usually separate 30 minutes per day for special meetings and we do not charge for that.   
        </p>
        <p>
        02 — Good Hygiene 
* One of the most important self-hygiene tasks that preschool-aged children need to master is hand washing. We teach little ones in a very concrete and understandable way how germs are spread, and how hand washing kills germs. 
* We teach kids how to properly brush their teeth after meals and the importance of keeping good mouth hygiene.  
* We encourage parents to keep up with good hygiene practices at home as well such as, the diaper changes and potty time, everyday bath, teeth brushing, hand washing, clean clothes and surrounding environment.  
        </p>
        <p>
        03 — Punctuality 
Punctuality is a must, we will be there for you on the agreed calendar schedule, and we expect that you will also be on time to pick up your child by 6:15 pm. In the event of late pick up we will be charging you a fee per minute per child, to be paid on the day of the late pick up. The fee will be informed on your contract. 
        </p>
        <p>
        04 — Payments
We count on you to make on time payments. It is important to keep our business up and running for all the parents and children that count on us to help their lives on the good flow.  Your weekly payment is expected every Monday when you drop off your child. You may pay by cash or debit card. Unfortunately, we will not be able to provide service if payments are not made on the expected requested time. 
        </p>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="bg-dark text-white">
  <Card.Img src={ZenJoyPlay} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
        <p className="imageText">
        Schedulle a tour visit 
        today.
         </p>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
           
            </Styles>
            
           
        )
    }
}
