import React from 'react';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="mb-12 text-4xl font-bold text-gray-800">What People Say About Us</h2>
                <div className="flex flex-col items-center lg:flex-row lg:space-x-8">
                    {/* Testimonial Box 1 */}
                    <div className="p-8 mb-8 transition-transform transform bg-white rounded-lg shadow-xl lg:w-1/2 lg:mb-0 hover:scale-105">
                        <p className="mb-4 text-lg italic text-gray-700">
                            "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                        </p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <img 
                                src="https://image.pngaaa.com/345/1582345-middle.png" 
                                alt="User 1" 
                                className="object-cover w-16 h-16 border-2 border-blue-300 rounded-full"
                            />
                            <div className="ml-4 text-left">
                                <p className="font-semibold text-gray-800">Mike Taylor</p>
                                <p className="text-sm text-gray-600">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Box 2 */}
                    <div className="p-8 transition-transform transform bg-white rounded-lg shadow-xl lg:w-1/2 hover:scale-105">
                        <p className="mb-4 text-lg italic text-gray-700">
                            "We had an amazing experience with the travel services provided by Jadoo. Everything was perfectly organized and stress-free!"
                        </p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <img 
                                src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png" 
                                alt="User 2" 
                                className="object-cover w-16 h-16 border-2 border-blue-300 rounded-full"
                            />
                            <div className="ml-4 text-left">
                                <p className="font-semibold text-gray-800">Chris Thomas</p>
                                <p className="text-sm text-gray-600">CEO of Red Button</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div className="mt-12">
                    <h3 className="mb-4 text-lg font-semibold text-gray-600">Trusted by:</h3>
                    <div className="flex flex-wrap justify-center gap-12">
                        <img 
                            src="https://seeklogo.com/images/A/Axon_Airlines-logo-6F31ED289F-seeklogo.com.png" 
                            alt="Brand 1" 
                            className="h-12"
                        />
                        <img 
                            src="https://logos-world.net/wp-content/uploads/2023/01/Jetstar-Logo.png" 
                            alt="Brand 2" 
                            className="h-12"
                        />
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbI_q_6uhEswhPB6C9PUKq9s7znM-0UJo0BA&s" 
                            alt="Brand 3" 
                            className="h-12"
                        />
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-Kv_FdCjQ8A6zSkfL9i1D5ylZgf7OAIe9BDekFShRb507Ya0tWPC1lWSgMRo1yIZQ-I&usqp=CAU" 
                            alt="Brand 4" 
                            className="h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
