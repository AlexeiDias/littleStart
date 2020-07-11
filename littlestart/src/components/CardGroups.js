import React, { Component } from 'react'
import {CardGroup as CardG, Card} from 'react-bootstrap'
// import JoyFlor from "../images/JoyFlor.JPG";
import TataZenReading from "../images/TataZenReading.JPG";
import JoyHelena from "../images/JoyHelena.jpg";
import JoyBaker from '../images/JoyBaker.JPG';
import styled from "styled-components";
import TableWork from "../images/TableWork.jpg";


const Styles= styled.div`
    .textStyle {
        font-size: 20px;
    }

    `;
export default class CardGroups extends Component {
    render() {
        return (
            <Styles>
                <CardG className="textStyle">
  <Card>
    <Card.Img variant="top" src={TataZenReading} />
    <Card.Body>
      <Card.Title>Full Time</Card.Title>
      <Card.Text>
          <h6> 3 to 5 days a week from 8:00am to 6:10pm</h6>
       Our full-time schedule offers breakfast, lunch,  circle time, gardening, quiet time, motor and cognitive activities,afternoon snack and other outdoor activities.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={TableWork} />
    <Card.Body>
      <Card.Title>Part-Time</Card.Title>
      <Card.Text>
          <h6>1 to 2 days a week from 8:45am to 6:00pm</h6>
        Our Part-Time schedule offers breakfast, lunch, circle time, gardening, quiet time, motor and cognitive activities,afternoon snack and other outdoor activities.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={JoyHelena} />
    <Card.Body>
      <Card.Title>Drop-offs</Card.Title>
      <Card.Text>
          <h6>Only for a full day schedule</h6>
       Dop-offs will be accepted upon avaiability. You should contact us 24h before to request a drop-off date.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardG>
                
</Styles>
        )
    }
}
