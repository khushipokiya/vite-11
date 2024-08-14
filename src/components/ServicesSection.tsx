import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="mb-12 text-3xl font-bold text-gray-800">We Offer Best Services</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Service Box 1 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-2xl rounded-3xl">
                        <img 
                            src="https://img.freepik.com/free-psd/weather-icon-isolated_23-2151178579.jpg" 
                            alt="Calculated Weather"
                            className="object-contain w-24 h-24 mb-4" // Adjust size as needed
                        />
                        <h3 className="mb-2 text-xl font-semibold cursor-pointer hover:text-gray-500">Calculated Weather</h3>
                        <p className="text-gray-600">Get real-time weather updates for your destinations.</p>
                    </div>
                    
                    {/* Service Box 2 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-2xl rounded-3xl">
                        <img 
                            src="https://img.freepik.com/premium-photo/colorful-logo-with-airplane-with-white-background_1204564-53114.jpg" 
                            alt="Best Flights"
                            className="object-contain w-24 h-24 mb-4" // Adjust size as needed
                        />
                        <h3 className="mb-2 text-xl font-semibold cursor-pointer hover:text-gray-500">Best Flights</h3>
                        <p className="text-gray-600">Find the best flight deals that fit your schedule.</p>
                    </div>
                    
                    {/* Service Box 3 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-2xl rounded-3xl">
                        <img 
                            src="https://img.freepik.com/free-vector/retro-monochrome-music-microphone-concept_225004-1213.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723507200&semt=ais_hybrid" 
                            alt="Local Events"
                            className="object-contain w-24 h-24 mb-4" // Adjust size as needed
                        />
                        <h3 className="mb-2 text-xl font-semibold cursor-pointer hover:text-gray-500">Local Events</h3>
                        <p className="text-gray-600">Discover events happening around your travel destination.</p>
                    </div>
                    
                    {/* Service Box 4 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-2xl rounded-3xl">
                        <img 
                            src="https://i.pinimg.com/originals/29/cf/0b/29cf0b8ee95b9f33e76941a122407300.png" 
                            alt="Customization"
                            className="object-contain w-24 h-24 mb-4" // Adjust size as needed
                        />
                        <h3 className="mb-2 text-xl font-semibold cursor-pointer hover:text-gray-500">Customization</h3>
                        <p className="text-gray-600">Tailor your trip to suit your personal preferences.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
