import React from 'react'
import Jumbotron from "../components/Jumbotron"
import CardGroups from '../components/CardGroups';
import verticalCard from "../components/VerticalCard";
import VerticalCard from '../components/VerticalCard';
import SleepJumbo from "../components/SleepJumbo";
import Footer from "../components/Footer";
import EventsJumbo from "../components/EventsJumbo";
import JumboCote from "../components/JumboCote";
import AboutCard from "../components/AboutCard";
import Rules from "../pages/rules";



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
                <AboutCard />
                <Rules />
                <Footer />
                
            </h1>
        </div>
    )
}
