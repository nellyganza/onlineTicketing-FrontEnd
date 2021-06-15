import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/header';
import TopTitle from '../components/eventsComponents/toptitle';
import SingleEvent from '../components/singleEventComponents/singleEventBox';
import {useLocation} from 'react-router-dom';
// import DialogDemo from '../components/common/Dialog';
const signleEvent = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            <div className="w-screen space-y-10 overflow-hidden bg-gray-50">
                <TopTitle last={"Tickets"} />
                <SingleEvent />
                {/* <DialogDemo /> */}
                <Footer />
            </div>
        </>
    )
};

export default signleEvent;
