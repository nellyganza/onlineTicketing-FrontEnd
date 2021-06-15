import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/header';
import TopTitle from '../components/eventsComponents/toptitle';
import EventSearchBar from '../components/eventsComponents/eventSearchBar';
import EventComp from '../components/eventsComponents/eventComponents';
const landingPage = () => (
  <>
  <Header/>
  <div className="w-screen space-y-10 overflow-hidden bg-gray-50">
    
    <TopTitle last={"Events"}/>
    <EventSearchBar />
    <EventComp />
    <Footer /> 

  </div>
  </>
);

export default landingPage;
