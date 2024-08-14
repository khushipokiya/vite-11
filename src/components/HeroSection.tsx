import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container flex flex-col-reverse items-center mx-auto md:flex-row md:justify-between">
                {/* Text Content */}
                <div className="mb-12 text-center md:text-left md:w-1/2 md:mb-0">
                    <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                        Travel, enjoy and live a new and full life
                    </h1>
                    <p className="mb-8 text-lg text-gray-600">
                    Book unique experiences and create unforgettable memories with us. Whether you're looking for serene beach vacations, thrilling adventures, or cultural immersions, our curated options ensure a perfect getaway. Enjoy seamless booking, personalized recommendations, and exceptional service every step of the way.
                    </p>
                    <button className="px-6 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
                        Find Destinations
                    </button>
                </div>
                {/* Image */}
                <div className="flex justify-center md:w-1/2 md:justify-end">
                    <img
                        src="https://static.independent.co.uk/2023/10/05/14/iStock-1392554386.jpg"
                        alt="Travel"
                        className="w-full rounded-b-full shadow-2xl max-w-max  md:mt-[-10%]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
