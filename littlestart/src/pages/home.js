import React from 'react'
import Jumbotron from "../components/Jumbotron"
import CardGroups from '../components/CardGroups';


export default function home() {
    return (
        <div>
            <h1>
                <Jumbotron />
                <CardGroups />
            </h1>
        </div>
    )
}
