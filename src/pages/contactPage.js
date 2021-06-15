import React from 'react';
import ClientRecomended from '../components/client';
import Footer from '../components/common/Footer';
import Header from '../components/common/header';
import ContactHeader from '../components/contactComponents/contactHeader';
import ContactConent from '../components/contactComponents/contactContent';

const contactpage = () => (
  <><Header/>
  <div className="w-screen space-y-10 overflow-hidden">
    <ContactHeader />
    <ContactConent />
    <Footer /> 

  </div>
  </>
);

export default contactpage;
