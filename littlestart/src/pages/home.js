import React from 'react'
import Jumbotron from "../components/Jumbotron"
import CardGroups from '../components/CardGroups';
import verticalCard from "../components/VerticalCard";
import VerticalCard from '../components/VerticalCard';
import SleepJumbo from "../components/SleepJumbo";
import Footer from "../components/Footer";
import EventsJumbo from "../components/EventsJumbo";
import JumboCote from "../components/JumboCote";


export default function home() {
    return (
        <div>
            <h1>
               
                <Jumbotron />
                <CardGroups />
                <SleepJumbo />
                <VerticalCard />
                <EventsJumbo />
                <JumboCote />
                <Footer />
                
            </h1>
        </div>
    )
}
