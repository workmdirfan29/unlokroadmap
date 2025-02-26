import React from 'react';
import LandingPage from './pages/LandingPage';
import Background from './pages/Background';
import ServiceShowCase from './service-showcase/ServiceShowCase';
import Author from './pages/Author';

const Service = () => {
    return <div className='relative'>
        <div className='relative z-10 min-h-screen px-2 md:px-14 mt-14'>
            <LandingPage />
            <ServiceShowCase />
            <Author />
        </div>
        <Background />
    </div>
}

export default Service;