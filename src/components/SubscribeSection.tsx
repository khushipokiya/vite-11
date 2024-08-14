import React from 'react';

const SubscribeSection: React.FC = () => {
    return (
        <section className="py-20 bg-purple-50">
            <div className="container mx-auto text-center">
                <div className="max-w-3xl p-10 mx-auto bg-white rounded-lg shadow-lg">
                    <h2 className="mb-6 text-3xl font-bold text-gray-800">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
                    <form className="flex flex-col items-center justify-center lg:flex-row">
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            className="flex-grow w-full px-6 py-3 mb-4 border border-gray-300 rounded-full lg:w-auto lg:mb-0 lg:mr-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        />
                        <button 
                            type="submit" 
                            className="px-6 py-3 text-white transition-colors duration-300 ease-in-out bg-orange-500 rounded-full hover:bg-orange-600">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-between mx-auto mt-20 text-center lg:flex-row lg:text-left">
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800">Jadoo.</h3>
                    <p className="mt-2 text-gray-600">Book your trip in minutes, get full control for much longer.</p>
                </div>
                <div className="flex flex-col text-gray-600 lg:flex-row lg:space-x-12">
                    <div className="mb-6 lg:mb-0">
                        <h4 className="mb-2 text-lg font-medium text-gray-800">Company</h4>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">About</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600">Mobile</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <h4 className="mb-2 text-lg font-medium text-gray-800">Contact</h4>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">Help/FAQ</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">Press</a></li>
                            <li><a href="#" className="hover:text-purple-600">Affiliates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-2 text-lg font-medium text-gray-800">More</h4>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">Airlines</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-purple-600">Airline</a></li>
                            <li><a href="#" className="hover:text-purple-600">Low fare tips</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0">
                    <h4 className="mb-2 text-lg font-medium text-gray-800">Discover our app</h4>
                    <div className="flex space-x-4">
                        <a href="https://play.google.com"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Google Play" className="h-12"/></a>
                        <a href="https://www.apple.com/in/app-store"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-12"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
