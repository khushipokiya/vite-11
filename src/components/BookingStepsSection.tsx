import React from 'react';

const BookingStepsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Book Your Next Trip In 3 Easy Steps</h2>
                    <ul>
                        <li className="flex items-start mb-4">
                            <div className="bg-yellow-500 text-white rounded-full p-3 mr-4">
                                <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0h2m-2-4v8m0 0H5m14 0V8m0 8H5m14 0V8m0 8H5m0-8v8M5 8V7a2 2 0 012-2h10a2 2 0 012 2v1m-6-3v3M9 6h6" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 cursor-pointer hover:underline">Choose Destination</h4>
                                <p className="text-gray-600">Select your preferred travel destination.</p>
                            </div>
                        </li>
                        <li className="flex items-start mb-4">
                            <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                                <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l1.5 1.5M20 6a2 2 0 10-2.83-2.83L12 8.34m0 0L7.5 3.84m4.5 4.5L4 12m0 0l4.5 4.5M4 12h6" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold cursor-pointer hover:underline text-gray-800">Make Payment</h4>
                                <p className="text-gray-600">Complete your payment securely.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                                <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m-9 4h18m-3-16l2.5 2.5M16 8.5l2.5 2.5M6 18h3" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold cursor-pointer hover:underline text-gray-800">Reach Airport on Selected Date</h4>
                                <p className="text-gray-600">Be on time for your flight.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-2">Trip to Greece</h3>
                    <p className="text-gray-600">14-29 June | By Robin Joe</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="bg-purple-500 text-white text-sm py-1 px-3 rounded-full">Ongoing</span>
                        <span className="text-gray-600 text-sm">24 people going</span>
                    </div>
                    <div className="mt-6">
                        <div className="bg-purple-100 text-purple-600 text-sm p-4 rounded-lg">
                            <strong>Trip to Rome</strong> <span className="text-gray-600">(40% completed)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingStepsSection;
