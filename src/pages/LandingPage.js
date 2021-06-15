import React from 'react';
import ClientRecomended from '../components/client';
import Footer from '../components/common/Footer';
import Header from '../components/common/header';
import VideoSection from '../components/HomePageComponents/videosection';
import WelcomeService from '../components/HomePageComponents/welcomeServices';
import UpcomingEvents from '../components/HomePageComponents/upcomingEvents';
import PreveousEvents from '../components/HomePageComponents/preveousEvents';
const landingPage = () => (
  <><Header/>
  <div className="w-screen space-y-10 overflow-hidden">
    
    <VideoSection />
    <WelcomeService />
    <UpcomingEvents />
    <PreveousEvents />
    <ClientRecomended className="mx-10" />
    <Footer /> 

  </div>
  </>
);

export default landingPage;
