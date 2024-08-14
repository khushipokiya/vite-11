import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TopDestinations from './components/TopDestinations';
import BookingStepsSection from './components/BookingStepsSection';
import TestimonialsSection from './components/TestimonialsSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ServicesSection />
            <TopDestinations />
            <BookingStepsSection />
            <TestimonialsSection />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default App;
