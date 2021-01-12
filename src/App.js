import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import MainBanner from './components/mainBanner/MainBanner';
import IntroductionBlock from './components/introductionBlock/IntroductionBlock';
import EducationalVideosBlock from './components/educationalVideosBlock/EducationalVideosBlock';
import CreateEditDownloadBlock from './components/createEditDownloadBlock/CreateEditDownloadBlock';
import EducationalBenefitsBlock from './components/educationalBenefitsBlock/EducationalBenefitsBlock';
import JoinUsBlock from './components/joinUsBlock/JoinUsBlock';
import TipsBlock from './components/tipsBlock/TipsBlock';
import Footer from './components/footer/Footer';
import CustomersReviewsBlock from './components/customersReviewsBlock/CustomersReviewsBlock';

const App = () => {
  return ( 
    <div className="App">
        <Header />
        <MainBanner />
        <IntroductionBlock />
        <EducationalVideosBlock />
        <CreateEditDownloadBlock />
        <EducationalBenefitsBlock />
        <CustomersReviewsBlock />
        <JoinUsBlock />
        <TipsBlock />
        <Footer />
    </div>
   );
}

export default App;

