import React from 'react'
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Service from '../components/Services';
import Location from '../components/Location';
import Holiday from '../components/Holiday';
import IndiaTrip from '../components/IndiaTrip';
import Inter from '../components/Inter';
import International from '../components/International';
import Inclusive from '../components/Inclusive';
import TravelPackages from '../components/TravelPackages';
import Recommended from '../components/Recommended';
import SubscribeSection from '../components/SubscribeSection';
import Testimonials from '../components/Testimonials';


function Home() {
  return (
    <Layout>
        <HeroSection/>
        <Service/>
        <Location/>
        <Holiday/>
        <IndiaTrip/>
        <Inter/>
        <International/>
        <Inclusive/>
        <Recommended/>
        <TravelPackages/>
        <SubscribeSection/>
        <Testimonials/>
    
    </Layout>
  )
}

export default Home;


