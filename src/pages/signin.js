import React, { Component } from 'react'
import SigninComponent from '../components/auth/signin'
import Footer from '../components/common/Footer'
export class signin extends Component {
    render() {
        return (
            <div className='w-screen overflow-hidden bg-gray-50'>
            <Navigation/>
            <div className='main p-4'>
                <SigninComponent />
            </div> 
            <Footer />
          </div>
        )
    }
}

export default signin
